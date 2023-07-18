import { ElementType } from "react";

type Props = {
  size?: "sm" | "lg";
  color?: string;
};

const partialComponent =
  <T,>(Component: ElementType, partialProps: Partial<T>) =>
  (props: T) => <Component {...partialProps} {...props} />;

export const Button = ({ size = "sm", color = "blue" }: Props) => {
  return (
    <button
      style={{
        fontSize: size === "sm" ? "8px" : "12px",
        color,
      }}
    >
      Button
    </button>
  );
};

export const RedButton = partialComponent(Button, { color: "red" });
export const RedSmallButton = partialComponent(RedButton, { size: "sm" });
