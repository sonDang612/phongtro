type Props = {
  text: string;
  textColor: string;
  bgColor: string;
  IcAfter?: any;
  fullWidth?: boolean;
  onClick?: () => void;
};
const Button = (props: Props) => {
  const { bgColor, text, textColor, IcAfter, fullWidth, onClick } = props;
  return (
    <button
      type="button"
      onClick={onClick}
      className={`p-2 ${textColor} ${
        fullWidth && 'w-full'
      } ${bgColor} outline-none rounded-md hover:underline flex items-center justify-center gap-1`}
    >
      {text}
      <span>{IcAfter && <IcAfter />}</span>
    </button>
  );
};

export default Button;
