import React from "react";

import Modal from "./Modal";
import { signUp } from "../api/auth";

interface ModalRegisterProps {
  setPageHome: () => void;
  setViewNone: () => void;
}

type RegisterForm = {
  preferredName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const ModalRegister: React.FC<ModalRegisterProps> = ({
  setPageHome,
  setViewNone
}) => {
  const [form, setForm] = React.useState<RegisterForm>({
    preferredName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleResetForm = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();

    setViewNone();
  };

  const handleSubmitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      form.preferredName &&
      form.email &&
      form.password &&
      form.confirmPassword
    ) {
      if (form.password === form.confirmPassword) {
      const { error } = await signUp(form.email, form.password);
      if (!error) {
        // moves to Home on success
        setPageHome();              
      } else {
        // surfaces Supabase error
        alert(error.message);       
      }
    } else {
      alert("Passwords do not match");
      }
    }
  };

  return (
    <Modal>
      <h2>Register</h2>
      <form onSubmit={handleSubmitForm}>
        <label>
          Preferred name:
          <input
            name="preferredName"
            onChange={handleChangeInput}
            required
            type="text"
            value={form.preferredName}
          />
        </label>
        <label>
          Email:
          <input
            name="email"
            onChange={handleChangeInput}
            required
            type="email"
            value={form.email}
          />
        </label>
        <label>
          Password:
          <input
            name="password"
            onChange={handleChangeInput}
            required
            type="password"
            value={form.password}
          />
        </label>
        <label>
          Confirm password:
          <input
            name="confirmPassword"
            onChange={handleChangeInput}
            required
            type="password"
            value={form.confirmPassword}
          />
        </label>
        <button type="submit">Submit</button>
        <button type="reset" onClick={handleResetForm}>
          Cancel
        </button>
      </form>
    </Modal>
  );
};

export default ModalRegister;
