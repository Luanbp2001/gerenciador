import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Task from "./components/Task";
import AddTask from "./components/AddTask";
import TaskDetails from "./components/TaskDetails";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskName) => {
    const newTask = {
      id: Date.now(),
      name: taskName,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <Router>
      <h1>Gerenciador de Tarefas</h1>
      <Routes>
        {/* Página inicial */}
        <Route
          path="/"
          element={
            <>
              <AddTask addTask={addTask} />
              <Task tasks={tasks} onDelete={deleteTask} />
            </>
          }
        />
        {/* Página de detalhes */}
        <Route path="/task/:id" element={<TaskDetails tasks={tasks} />} />
      </Routes>
    </Router>
  );
}

export default App;
