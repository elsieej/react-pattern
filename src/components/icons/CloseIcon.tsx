import styled from "styled-components";

const CloseIconContainer = styled.svg`
  width: 100%;
  height: 100%;
`;
const CloseIcon = () => {
  return (
    <CloseIconContainer>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </CloseIconContainer>
  );
};

export default CloseIcon;
