import "./App.css";
import useInput from "./hooks/useInput";
// import { useState } from "react";

function App() {
  // const [name, setName] = useState("");
  // const [password, setPassword] = useState("");

  // const onChangeNameHandler = (e) => {
  //   setName(e.target.value);
  // };

  // const onChangePasswordHandler = (e) => {
  //   setPassword(e.target.value);
  // };

  // const onChangeHandler = (event) => {
  //   const value = event.target.value;
  //   const name = event.target.name;
  //   setTodo({ ...todo, [name]: value });
  // };

  const [name, onChangeNameHandler] = useInput();
  const [password, onChangePasswordHandler] = useInput();
  return (
    <div>
      <input type="text" value={name} onChange={onChangeNameHandler} />
      <input type="text" value={password} onChange={onChangePasswordHandler} />
    </div>
  );
}

export default App;
