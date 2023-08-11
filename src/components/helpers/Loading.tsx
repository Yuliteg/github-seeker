import { FC } from "react";
import { ClipLoader } from "react-spinners";
import styled from "styled-components";

const Loading: FC = () => {
  return (
    <SpinnerWrapper>
      <ClipLoader id="loader" color="#5A5A5A" loading={true} size={70} />
    </SpinnerWrapper>
  );
};

export default Loading;

const SpinnerWrapper = styled.div`
  margin-top: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
