import { StarWarInfo } from "./StarWarInfo.tsx";
import { withLogProps } from "../../hocs";
import { StarWarType } from "../../types/api";

type Props = {
  character: StarWarType;
};
export const StarWarInfoWrapper = withLogProps<Props>(StarWarInfo);
