import {
  StyledAuthInput,
  StyledInputName,
  StyledAuthInputContainer,
} from "./AuthInput.style";

interface AuthInputProps {
  text: string;
  type: string;
}

const AuthInput = ({ text, type }: AuthInputProps) => {
  return (
    <StyledAuthInputContainer>
      <StyledInputName>{text}</StyledInputName>
      <StyledAuthInput
        type={type}
        style={{ width: 300, height: 45 }}
      ></StyledAuthInput>
    </StyledAuthInputContainer>
  );
};

export default AuthInput;
