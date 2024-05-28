import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);

export async function POST(req) {
  try {
    const { to, from, subject, text, html } = await req.json();
    console.log(to, from, subject, text, html);
    const msg = {
      to: to, // Change to your recipient
      from: from, // Change to your verified sender
      subject: subject,
      text: text,
      html: html,
    };
    await sgMail.send(msg);
    return new Response(JSON.stringify({ message: "Email sent" }), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
