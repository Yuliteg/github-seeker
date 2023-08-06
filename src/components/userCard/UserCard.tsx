import { Typhography, Button } from "../../globalStyles";
import userAvatar from "../../assets/images/pngwing.com (19).png";
import {
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
  InfoTextContainer,
} from "./UserCardStyle";
import { MdLocationCity, MdBusiness, MdLanguage } from "react-icons/md";

const UserCard = ({ user }: any) => {
  return (
    <Wrapper>
      <Card>
        <Header>
          <Avatar src={userAvatar} alt={user.name} />
          <UserName>{user.name}</UserName>
        </Header>
        <ContentWrapper>
          <InfoColumn>
            <InfoRow>
              <MdBusiness fontSize="23" color="var(--icon-grey)" />
              <InfoTextContainer>
                <InfoText>{user.company}</InfoText>
              </InfoTextContainer>
            </InfoRow>
            <InfoRow>
              <MdLocationCity fontSize="23" color="var(--icon-grey)" />
              <InfoTextContainer>
                <InfoText>{user.location}</InfoText>
              </InfoTextContainer>
            </InfoRow>
            <InfoRow>
              <MdLanguage fontSize="23" color="var(--icon-grey)" />
              <InfoTextContainer>
                <InfoText>{user.website}</InfoText>
              </InfoTextContainer>
            </InfoRow>
          </InfoColumn>
          <BioContainer>
            <h3>User Biography</h3>
            <Typhography style={{ fontSize: "var(--font-size-large)" }}>
              {user.bio || "The user does not have bio"}
            </Typhography>
          </BioContainer>
        </ContentWrapper>
      </Card>
      <ButtonContainer>
        <Button>GitHub Profile</Button>
      </ButtonContainer>
    </Wrapper>
  );
};

export default UserCard;
