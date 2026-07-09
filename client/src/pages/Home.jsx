import Navbar from "../components/Navbar";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

import { useEffect, useState } from "react";
import { getTodos } from "../api/api";

function Home() {

  const [todos, setTodos] = useState([]);

  const loadTodos = async () => {

    console.log("Loading todos...");

    try {

        const result = await getTodos();

        console.log("Response:", result);

        setTodos(result.data);

    } catch (error) {

        console.error("Error:", error);

    }

};

  useEffect(() => {

    loadTodos();

  }, []);

  return (
    <>
      <Navbar />

      <TodoForm />

      <TodoList todos={todos} />
    </>
  );
}

export default Home;