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
  min-width: 40rem;
  display: flex;
  flex-grow: 1;

  @media (max-width: 768px) {
    min-width: 25rem;
  }
`;

const InfoColumn = styled.section`
  width: 50%;
  padding: 3%;
  border-right: 1px solid grey;
  display: flex;
  flex-direction: column;
  gap: 10%;
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
`;

const InfoText = styled.span`
  margin-left: 6px;
  color: #28282b;
`;

const InfoTextContainer = styled.div`
  overflow: auto;
  white-space: pre-line;

  scrollbar-width: thin;
  scrollbar-color: #cccccc transparent;

  &::-webkit-scrollbar {
    height: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #cccccc; 
    border-radius: 3px; 
  }
`;

const BioContainer = styled.div`
  overflow: auto;
  white-space: pre-line;
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

const LinkButton = styled.a`
  display: inline-block;
  background-color: #28282b;
  color: white;
  border: none;
  padding: 10px 15px;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  align-items: center;

  svg {
    margin-left: 5px;
  }
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
  InfoTextContainer,
  InfoText,
  BioContainer,
  ButtonContainer,
  LinkButton,
};
