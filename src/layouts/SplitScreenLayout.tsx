import { PropsWithChildren, ReactNode } from "react";
import styled from "styled-components";

type Props = PropsWithChildren & {
  leftWidth?: number;
  rightWidth?: number;
};

const Container = styled.div`
  display: flex;
`;

const Panel = styled.div<{ flex: number }>`
  flex: ${(props) => props.flex};
`;

export const SplitScreenLayout = ({
  children,
  leftWidth = 1,
  rightWidth = 1,
}: Props) => {
  const [left, right] = children as ReactNode[];
  return (
    <Container>
      <Panel flex={leftWidth}>{left}</Panel>
      <Panel flex={rightWidth}>{right}</Panel>
    </Container>
  );
};
