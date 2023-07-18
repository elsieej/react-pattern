import { StarWarType } from "../../types/api";

type Props = {
  character?: StarWarType | null;
};

export const StarWarInfo = ({ character }: Props) => {
  return <>{character?.name}</>;
};
