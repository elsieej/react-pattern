import {
  Children,
  cloneElement,
  isValidElement,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";

type Props<T> = PropsWithChildren<{
  resourceName: string;
  getData: () => Promise<T>;
}>;

export const ContainerLoader = <T,>({
  resourceName,
  children,
  getData,
}: Props<T>) => {
  const [resource, setResource] = useState<T | null>(null);
  useEffect(() => {
    const getDataHandler = async () => {
      const data = await getData();
      setResource(data);
    };
    void getDataHandler();
  }, [getData]);
  return (
    <>
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          return cloneElement(child, { ...{ [resourceName]: resource } });
        }
        return child;
      })}
    </>
  );
};
