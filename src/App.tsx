import Button from "./components/Button";
import Header from "./components/Header";
import Input from "./components/Input";
import { TaskBoard } from "./components/TaskBoard";

function App() {
  return (
    <main className="bg-gray600 h-screen">
      <Header />
      <form className="flex w-1/2 -mt-7 mx-auto	items-center justify-center gap-2">
        <Input />
        <Button />
      </form>
      <TaskBoard />
    </main>
  );
}

export default App;

// 0px - 1.5rem - 4px