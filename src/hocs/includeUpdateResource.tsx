import { ElementType, useEffect, useState } from "react";
import axios from "axios";
import { toCapitialize } from "../utils";

export const includeUpdateResource = <T,>(
  Component: ElementType,
  resourceUrl: string,
  resourceName: string,
) => {
  return (props: T) => {
    const [initialResource, setInitialResource] = useState<T | null>(null);
    const [resource, setResource] = useState<T | null>(null);
    useEffect(() => {
      const getDataHandler = async () => {
        const response = await axios.get<T>(resourceUrl);
        setInitialResource(response.data);
        setResource(response.data);
      };

      void getDataHandler();
    }, []);

    const onChangeHandler = (updates: T) =>
      setResource((prev) => ({ ...prev, ...updates }));

    const onPostHandler = async () => {
      const response = await axios.post<T>(resourceUrl, {
        [resourceName]: resource,
      });
      setInitialResource(response.data);
      setResource(response.data);
    };

    const onResetHandler = () => {
      setResource(initialResource);
    };

    const resourceProps = {
      [resourceName]: resource,
      [`onChange${toCapitialize(resourceName)}`]: onChangeHandler,
      [`onPost${toCapitialize(resourceName)}`]: onPostHandler,
      [`onReset${toCapitialize(resourceName)}`]: onResetHandler,
    };

    return <Component {...props} {...resourceProps} />;
  };
};
