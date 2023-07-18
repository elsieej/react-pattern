import { JSX } from "react";

type Props<T> = {
  items: T[];
  keyName: keyof T;
  sourceName: string;
  Component: JSX.ElementType;
};

const RegularList = <T,>({
  items,
  Component,
  keyName,
  sourceName,
}: Props<T>) => {
  return (
    <>
      {items.map((item) => (
        <Component key={item[keyName]} {...{ [sourceName]: item }} />
      ))}
    </>
  );
};

export default RegularList;
