import { MainTarefas, Main } from "./Styleds/Main";
import { Button } from "./Styleds/Button";
import { ButtonDetails } from "./Styleds/Button";
import { DeletTask } from "./Styleds/Button";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Task({ tasks, onDelete }) {
  const [isMarked, setIsMarked] = useState({});

  useEffect(() => {
    const savedMarked = JSON.parse(localStorage.getItem("markedTasks")) || {};
    setIsMarked(savedMarked);
  }, []);

  useEffect(() => {
    localStorage.setItem("markedTasks", JSON.stringify(isMarked));
  }, [isMarked]);

  function marked(id) {
    setIsMarked((prev) => {
      const newState = { ...prev, [id]: !prev[id] };

      if (newState[id] && "vibrate" in navigator) {
        navigator.vibrate(200);
      }

      return newState;
    });
  }

  return (
    <Main>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <MainTarefas>
            <Button
              key={task.id}
              onClick={() => marked(task.id)}
              style={{
                textDecoration: isMarked[task.id] ? "line-through" : "none",
                opacity: isMarked[task.id] ? 0.5 : 1,
              }}
            >
              {task.name}
            </Button>
            <ButtonDetails>
              <Link to={`/task/${task.id}`}>
                <i className="bi bi-arrows-fullscreen"></i>
              </Link>
            </ButtonDetails>
            <DeletTask onClick={() => onDelete(task.id)}>
              <i className="bi bi-trash"></i>
            </DeletTask>
          </MainTarefas>
        ))
      ) : (
        <p>Adicione uma nova tarefa</p>
      )}
    </Main>
  );
}

export default Task;
