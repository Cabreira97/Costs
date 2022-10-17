import { useState } from "react";

import style from "./ProjectForm.module.css";

import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";

function ProjectForm({ btnText }) {
  const [categories, setCategories] = useState([]);

  fetch("http://localhost:5000/categories", {
    method: "GET",
    headers: {},
  });
  return (
    <form className={style.form}>
      <Input
        type="text"
        text="Nome do projeto"
        name="name"
        placeholder="Insira o nome do projeto"
      />
      <Input
        type="Number"
        text="Orcamento do projeto"
        name="budget"
        placeholder="Insira o orçamento total"
      />
      <Select name="category_id" text="Selecione a categoria" />
      <SubmitButton text={btnText} />
    </form>
  );
}
export default ProjectForm;
