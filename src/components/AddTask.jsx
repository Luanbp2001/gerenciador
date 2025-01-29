import { MainInput } from "./Styleds/Main";
import { ButtonAdd } from "./Styleds/Button";
import { Input } from "./Styleds/inputs";
import { Textarea } from "./Styleds/inputs";
import { useState } from "react";
function AddTask({ addTask }) {
  const [input, setInput] = useState("");
  const [text, setText] = useState("");
  const getValueInput = (e) => {
    setInput(e.target.value);
  };
  const getValueText = (e) => {
    setText(e.target.value);
  };
  const handleAddClick = () => {
    if (input.trim()) {
      addTask(input, text);
      setInput("");
      setText("");
    }
  };
  const addEnter = (e) => {
    if (e.key === "Enter") {
      handleAddClick();
    }
  };
  return (
    <>
      <MainInput>
        <Input
          value={input}
          onChange={getValueInput}
          onKeyDown={addEnter}
          text="text"
          placeholder="Adicione a tarefa..."
        ></Input>
        <Textarea
          rows={3}
          value={text}
          onChange={getValueText}
          placeholder="Descreva a tarefa..."
        ></Textarea>
        <ButtonAdd onClick={handleAddClick}>
          <i class="bi bi-plus-square"></i>
        </ButtonAdd>
      </MainInput>
    </>
  );
}
export default AddTask;
