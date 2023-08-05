import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 650px;
  margin-top: 4%;
  display: flex;
  flex-direction: column;
  gap: 4%;
`;

const Card = styled.div`
  min-height: 18rem;
  background-color: hsl(211, 30%, 90%);
  border: 1px solid grey;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  border-bottom: 1px solid grey;
  display: flex;
  padding: 3%;
  align-items: center;
`;

const Avatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 20px;
`;

const UserName = styled.h2`
  margin: 0;
`;

const ContentWrapper = styled.section`
  display: flex;
  flex-grow: 1;
`;

const InfoColumn = styled.section`
  padding: 3%;
  border-right: 1px solid grey;
  display: flex;
  flex-direction: column;
  gap: 10%;
  width: 100%;
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
`;

const InfoText = styled.span`
  margin-left: 6px;
  color: #28282b;
`;

const BioContainer = styled.div`
  padding: 3%;

  h3 {
    margin: 0;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 5px;
`;

export {
  Wrapper,
  Card,
  Header,
  Avatar,
  UserName,
  ContentWrapper,
  InfoColumn,
  InfoRow,
  InfoText,
  BioContainer,
  ButtonContainer,
};
