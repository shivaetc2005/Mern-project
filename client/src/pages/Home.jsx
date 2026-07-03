import Navbar from "../components/Navbar";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

function Home() {
  return (
    <>
      <Navbar />
      <TodoForm />
      <TodoList />
    </>
  );
}

export default Home;