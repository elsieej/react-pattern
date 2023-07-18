import { createRef, FormEvent } from "react";

export const UncontrolledForm = () => {
  const nameInputRef = createRef<HTMLInputElement>();
  const ageInputRef = createRef<HTMLInputElement>();

  const formSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(nameInputRef.current?.value);
    console.log(ageInputRef.current?.value);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <input
        name={"name"}
        type={"text"}
        placeholder={"Name"}
        ref={nameInputRef}
      />
      <input
        name={"age"}
        type={"number"}
        placeholder={"Age"}
        ref={ageInputRef}
      />
      <input type={"submit"} value={"Submit"} />
    </form>
  );
};
