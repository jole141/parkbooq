import React from "react";
import * as S from "./LoginForm.styled";
import { Button, Input } from "..";
import { useFormik } from "formik";
import { loginValidation } from "./LoginForm.validation";
import { useRouter } from "next/navigation";
import { useLogin } from "@/ui/hooks/useLogin";

export default function LoginForm() {
  const { replace } = useRouter();
  const { login } = useLogin();
  const { values, setFieldValue, errors, submitForm } = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: async (values) => {
      await login(values.username, values.password);
    },
    validationSchema: loginValidation,
    validateOnBlur: true,
  });

  const handleSubmit = () => {
    submitForm();
  };

  return (
    <S.LoginFormContainer>
      <Input
        label="Username"
        value={values.username}
        onChange={(value) => setFieldValue("username", value)}
        error={errors.username}
      />
      <Input
        label="Password"
        value={values.password}
        onChange={(value) => setFieldValue("password", value)}
        type="password"
        error={errors.password}
      />
      <Button onClick={() => handleSubmit()}>Login</Button>
    </S.LoginFormContainer>
  );
}
