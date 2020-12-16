import React, { useState } from "react";

import { FormSection, ContentSection, RegisterWrapper } from "./styles";

import { Label } from "../../../../components/Label";
import { InputField } from "../../../../components/InputField";
import { Button } from "../../../../components/Button";

// import { useAuth } from "../../../../contexts/auth";
// import { Profile } from "../../../../model/profile";

const RegisterForm = (): JSX.Element => {
  // const { user } = useAuth();

  const [name, setName] = useState("");

  const handleSubmitRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(name);
  };

  return (
    <RegisterWrapper>
      <FormSection onSubmit={handleSubmitRegister}>
        <ContentSection>
          <div>
            <Label>Preencha os dados do aluno</Label>
          </div>

          <fieldset>
            <InputField
              name="name"
              label="Nome"
              defaultValue={name}
              maxLength={50}
              onChange={e => setName(e.target.value)}
            />
          </fieldset>

          <Button button="submit" name="register">
            Cadastrar Aluno
          </Button>
        </ContentSection>
      </FormSection>
    </RegisterWrapper>
  );
};

export { RegisterForm };
