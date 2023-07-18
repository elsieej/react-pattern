import { NestedObject } from "../../types/nested-object.type.ts";

const isObject = (data: NestedObject | string) =>
  typeof data === "object" && data !== null;

const Recursive = ({ data }: { data: NestedObject | string }) => {
  if (!isObject(data)) {
    return <li>{data as string}</li>;
  }

  const pair = Object.entries(data);

  return (
    <>
      {pair.map(([key, value]) => {
        return (
          <li>
            {key}:
            <ul>
              <Recursive data={value} />
            </ul>
          </li>
        );
      })}
    </>
  );
};

export default Recursive;
