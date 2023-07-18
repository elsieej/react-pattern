import { useEffect, useState } from "react";
import axios from "axios";

export const useResource = <T,>(resourceUrl: string) => {
  const [resource, setResource] = useState<T | null>(null);
  useEffect(() => {
    const getDataHandler = async () => {
      const response = await axios.get<T>(resourceUrl);
      setResource(response.data);
    };
    void getDataHandler();
  }, [resourceUrl]);

  return resource;
};
