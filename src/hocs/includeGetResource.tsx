import { ElementType, useEffect, useState } from "react";
import axios from "axios";

export const includeGetResource = <T,>(
  Component: ElementType,
  resourceUrl: string,
) => {
  return (props: T) => {
    const [initialResource, setInitialResource] = useState<T | null>(null);
    useEffect(() => {
      const getDataHandler = async () => {
        const data = await axios.get<T>(resourceUrl);
        setInitialResource(data.data);
      };
      void getDataHandler();
    }, []);
    return <Component {...props} resource={initialResource} />;
  };
};
