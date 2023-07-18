import { ElementType } from "react";

export const withLogProps = <T,>(Component: ElementType) => {
  return (props: T) => {
    console.log(props);
    return <Component {...props} />;
  };
};
