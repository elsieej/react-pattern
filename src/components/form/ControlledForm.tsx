import { useEffect, useState } from "react";

export const ControlledForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    if (name.trim().length < 1) {
      console.log("name is not empty");
    }
  }, [name]);

  const formSubmitHandler = () => {};

  return (
    <form onSubmit={formSubmitHandler}>
      <input
        name={"name"}
        type={"text"}
        placeholder={"Name"}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        name={"age"}
        type={"number"}
        placeholder={"Age"}
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <input type={"submit"} value={"Submit"} />
    </form>
  );
};
