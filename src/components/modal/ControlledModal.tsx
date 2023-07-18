import { PropsWithChildren } from "react";
import styled from "styled-components";

const ModalBackground = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  overflow: auto;
  background: #00000067;
  width: 100%;
  height: 100%;
`;

const ModalContent = styled.div`
  margin: 12% auto;
  padding: 24px;
  background: wheat;
  width: 50%;
`;

type Props = PropsWithChildren<{
  shouldDisplay: boolean;
  onClose: () => void;
}>;

export const ControlledModal = ({
  shouldDisplay,
  onClose,
  children,
}: Props) => {
  return shouldDisplay ? (
    <ModalBackground onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose}>Hide Modal</button>
        {children}
      </ModalContent>
    </ModalBackground>
  ) : null;
};
