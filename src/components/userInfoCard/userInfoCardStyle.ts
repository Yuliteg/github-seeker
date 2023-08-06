import styled from "styled-components";

const UserInfo = styled.div`
  margin-top: 4%;
  display: flex;
  flex-direction: column;
  gap: 3%;
  width: 13vw;

  @media (max-width: 952px) {
    width: 100%;
    gap: 10px;
  }
`;

const InfoArticle = styled.article`
  background-color: hsl(211, 30%, 90%);
  border: 1px solid grey;
  border-radius: 10px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: 5px;
  }
`;

export { UserInfo, InfoArticle };
