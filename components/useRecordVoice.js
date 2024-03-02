import { useState, useRef, useCallback } from "react";

export const useRecordVoice = () => {
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [recording, setRecording] = useState(false);
  const chunks = useRef([]);
  const [transcript, setTranscript] = useState("");
  const [isSpeechRecognitionSupported, setIsSpeechRecognitionSupported] =
    useState(false);
  const speechRecognition = useRef(null);

  const initSpeechRecognition = useCallback(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      speechRecognition.current = new SpeechRecognition();
      speechRecognition.current.continuous = true;
      speechRecognition.current.interimResults = true;
      speechRecognition.current.onresult = (event) => {
        const currentTranscript = Array.from(event.results)
          .map((result) => result[0])
          .map((result) => result.transcript)
          .join("");
        setTranscript(currentTranscript);
      };

      speechRecognition.current.onerror = (event) => {
        console.log("Speech recognition error", event.error);
      };
      setIsSpeechRecognitionSupported(true);
    } else {
      console.log("SpeechRecognition is not supported in this browser.");
    }
  }, []);

  const initMediaRecorder = useCallback(async () => {
    if (navigator.mediaDevices) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });
        const newMediaRecorder = new MediaRecorder(stream);
        newMediaRecorder.onstart = () => {
          chunks.current = [];
        };
        newMediaRecorder.ondataavailable = (ev) => {
          chunks.current.push(ev.data);
        };
        newMediaRecorder.onstop = () => {
          const audioBlob = new Blob(chunks.current, { type: "audio/wav" });
          console.log(audioBlob, "audioBlob");
        };
        setMediaRecorder(newMediaRecorder);
      } catch (err) {
        console.error("Error accessing media devices:", err);
      }
    }
  }, []);

  const initializeRecording = useCallback(async () => {
    initSpeechRecognition();
    await initMediaRecorder();
  }, [initMediaRecorder, initSpeechRecognition]);

  const startRecording = async () => {
    if (!mediaRecorder) {
      console.log("start recording...");
      await initializeRecording();
    }
    if (
      mediaRecorder &&
      isSpeechRecognitionSupported &&
      speechRecognition.current
    ) {
      mediaRecorder.start();
      speechRecognition.current.start();
      setRecording(true);
    }
  };

  const stopRecording = () => {
    if (
      mediaRecorder &&
      isSpeechRecognitionSupported &&
      speechRecognition.current
    ) {
      mediaRecorder.stop();
      speechRecognition.current.stop();
      setRecording(false);
    }
  };

  return {
    recording,
    startRecording,
    stopRecording,
    transcript,
    isSpeechRecognitionSupported,
  };
};
