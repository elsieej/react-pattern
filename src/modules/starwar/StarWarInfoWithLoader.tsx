import { StarWarInfo } from "./StarWarInfo.tsx";
import { includeGetResource } from "../../hocs";

export const StarWarInfoWithLoader = includeGetResource(
  StarWarInfo,
  `https://swapi.dev/api/people/1`,
);
