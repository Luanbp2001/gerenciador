import { useParams } from "react-router-dom";
import { ButtonBack } from "./Styleds/Button";
import { MainDetails } from "./Styleds/Main";
function TaskDetails({ tasks }) {
  const { id } = useParams();
  const task = tasks.find((task) => task.id === Number(id));

  if (!task) {
    return <p>Tarefa não encontrada!</p>;
  }

  return (
    <>
      <MainDetails>
        <h2>Tarefa: {task.name}</h2>
        <h3>Detalhes da Tarefa</h3>
        {task.description.length > 0 ? (
          <p>{task.description}</p>
        ) : (
          <p>Descreva a tarefa</p>
        )}
        <ButtonBack onClick={() => window.history.back()}>
          <i class="bi bi-skip-backward"></i>
        </ButtonBack>
      </MainDetails>
    </>
  );
}

export default TaskDetails;
