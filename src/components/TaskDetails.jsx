import { useParams } from "react-router-dom";
import { ButtonBack } from "./Styleds/Button";
import { MainDetails } from "./Styleds/Main";
function TaskDetails({ tasks }) {
  const { id } = useParams(); // Obtém o ID da tarefa pela URL
  const task = tasks.find((task) => task.id === Number(id)); // Busca a tarefa pelo ID

  if (!task) {
    return <p>Tarefa não encontrada!</p>;
  }

  return (
    <>
      <MainDetails>
        <h2>Detalhes da Tarefa</h2>
        <p>
          <strong>ID:</strong> {task.id}
        </p>
        <p>
          <strong>Tarefa:</strong> {task.name}
        </p>
        <ButtonBack onClick={() => window.history.back()}>
          <i class="bi bi-skip-backward"></i>
        </ButtonBack>
      </MainDetails>
    </>
  );
}

export default TaskDetails;
