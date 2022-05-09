import react from "react";
import Button from "../common/Button";
import AuthInput from "../common/Input/AuthInput";
import {
  StyledLoginSubtitle,
  StyledRegisterBtn,
  StyledText,
  StyledLoginContainer,
  StyledLoginSubContainer,
} from "./Login.style";
import AuthForm from "../common/AuthForm";
import AuthTitle from "../common/AuthTitle";

const Login = () => {
  return (
    <>
      <StyledLoginContainer>
        <AuthForm height={580}>
          <AuthTitle text="아웃포커싱에 로그인" />
          <AuthInput text="아이디" type="text" />
          <AuthInput text="패스워드" type="password" />
          <Button margin={80} text="로그인" width={262} background="#887bec" />
          <StyledText>비밀번호를 잊으셨나요?</StyledText>
        </AuthForm>
        <StyledText>혹은</StyledText>
        <StyledLoginSubContainer>
          <StyledLoginSubtitle>계정이 없으신가요?</StyledLoginSubtitle>
          <StyledRegisterBtn>계정 만들기</StyledRegisterBtn>
        </StyledLoginSubContainer>
      </StyledLoginContainer>
    </>
  );
};

export default Login;
