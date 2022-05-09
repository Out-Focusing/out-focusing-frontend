import { StyledButton } from "./Button.style";

interface ButtonProps {
  margin: number;
  text: string;
  width: number;
  background: string;
}

const Button = ({ margin, text, width, background }: ButtonProps) => {
  return (
    <>
      <StyledButton
        style={{
          width: width,
          height: 38,
          marginTop: margin,
          background: background,
        }}
      >
        {text}
      </StyledButton>
    </>
  );
};

export default Button;
