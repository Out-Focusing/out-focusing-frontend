import React from "react";
import AuthForm from "../common/AuthForm";
import AuthTitle from "../common/AuthTitle";
import Button from "../common/Button";
import DefaultTamplate from "../common/DefaultTamplate";
import AuthInput from "../common/Input/AuthInput";
import { StyledBtnContainer } from "./RegisterSubmit.style";

const RegisterSubmit = () => {
  return (
    <DefaultTamplate>
      <AuthForm height={787}>
        <AuthTitle text="회원가입" />
        <AuthInput text="이메일" type="text" />
        <AuthInput text="전화번호" type="text" />
        <AuthInput text="국가" type="text" />
        <StyledBtnContainer>
          <Button
            width={150}
            text="돌아가기"
            margin={0}
            background="rgba(112, 113, 125, 0.96)"
          />
          <Button width={150} text="가입하기" margin={0} background="#887BEC" />
        </StyledBtnContainer>
      </AuthForm>
    </DefaultTamplate>
  );
};

export default RegisterSubmit;
