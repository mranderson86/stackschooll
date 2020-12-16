import React from "react";
import { useRouter } from "next/router";

import { SearchAdd } from "../Common";

import { StudentWrapper } from "./styles";
import { List } from "../../../components/List";

import { useAuth } from "../../../contexts/auth";

const Students = (): JSX.Element => {
  const { user } = useAuth();
  const router = useRouter();

  const students = ["Aluno 1", "Aluno 2"];

  const goRegister = () => {
    router.push("students/register");
  };

  return (
    <StudentWrapper>
      <SearchAdd onClick={goRegister} />

      <List
        title="Nome do Aluno"
        items={students}
        show={user.profile === "responsavel"}
      />
    </StudentWrapper>
  );
};
export { Students };
