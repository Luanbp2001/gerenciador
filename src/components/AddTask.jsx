import { MainInput } from "./Styleds/Main";
import { ButtonAdd } from "./Styleds/Button";
import { Input } from "./Styleds/inputs";
import { useState } from "react";
function AddTask({ addTask }) {
  const [input, setInput] = useState("");
  const getValueInput = (e) => {
    setInput(e.target.value);
  };
  const handleAddClick = () => {
    if (input.trim()) {
      addTask(input);
      setInput("");
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
          placeholder="Add task..."
        ></Input>
        <ButtonAdd onClick={handleAddClick}>
          <i class="bi bi-plus-square"></i>
        </ButtonAdd>
      </MainInput>
    </>
  );
}
export default AddTask;
