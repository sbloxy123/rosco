// Declaring type of props - see "Typing Component Props" for more examples
type BtnProps = {
  text: string;
};

const MainBtn = ({ text }: BtnProps): React.JSX.Element => {
  return (
    <div className="border-[2px] border-theme-dark rounded-sm px-8 py-2 w-72 text-center">
      {text}
    </div>
  );
};

export default MainBtn;
