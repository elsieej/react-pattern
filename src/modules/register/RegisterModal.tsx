import {
  CloseIconContainer,
  Container as RegisterContainer,
  RegisterHeader,
  RegisterHelper,
} from "./Register.tsx";

import RegisterImage from "../../assets/register.svg";

import { PrimaryButton } from "../../components/button";
import { CloseIcon } from "../../components/icons";

export const RegisterModal = () => {
  return (
    <RegisterContainer>
      <img style={{ maxWidth: "350px" }} src={RegisterImage} alt={"register"} />
      <RegisterHeader>Register</RegisterHeader>
      <RegisterHelper>Register and unlock all the features!</RegisterHelper>
      <PrimaryButton onClick={() => alert("Registered!")}>
        Register
      </PrimaryButton>
      <CloseIconContainer onClick={() => alert("Closed")}>
        <CloseIcon />
      </CloseIconContainer>
    </RegisterContainer>
  );
};
