import React from "react";
import AuthForm from "../common/AuthForm";
import AuthTitle from "../common/AuthTitle";
import Button from "../common/Button";
import DefaultTamplate from "../common/DefaultTamplate";
import AuthInput from "../common/Input/AuthInput";

const Register = () => {
  return (
    <DefaultTamplate>
      <AuthForm height={787}>
        <AuthTitle text="회원가입" />
        <AuthInput text="이름" type="text" />
        <AuthInput text="아이디" type="text" />
        <AuthInput text="패스워드" type="password" />
        <AuthInput text="패스워드 확인" type="password" />
        <Button margin={89} text="계속하기" width={150} background="#887bec" />
      </AuthForm>
    </DefaultTamplate>
  );
};

export default Register;
