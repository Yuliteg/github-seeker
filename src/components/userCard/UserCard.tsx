import { Typhography } from "../../globalStyles";
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
  LinkButton,
} from "./userCardStyle";
import { MdLocationCity, MdBusiness, MdLanguage } from "react-icons/md";
import { FC } from "react";
import { User } from "../../model/profile";
import { RiExternalLinkLine } from "react-icons/ri";

interface UserCardProps {
  user: User | null;
}

const UserCard: FC<UserCardProps> = ({ user }) => {
  if (!user) return null;

  const {
    avatarUrl,
    name,
    username,
    company,
    location,
    website,
    bio,
    githubLink,
  } = user;

  return (
    <Wrapper>
      <Card>
        <Header>
          <Avatar src={avatarUrl} alt={name} />
          <UserName>{name || username}</UserName>
        </Header>
        <ContentWrapper>
          {company && location && website && (
            <InfoColumn>
              <InfoRow>
                <MdBusiness fontSize="23" color="var(--icon-grey)" />
                <InfoTextContainer>
                  <InfoText>{company}</InfoText>
                </InfoTextContainer>
              </InfoRow>
              <InfoRow>
                <MdLocationCity fontSize="23" color="var(--icon-grey)" />
                <InfoTextContainer>
                  <InfoText>{location}</InfoText>
                </InfoTextContainer>
              </InfoRow>
              <InfoRow>
                <MdLanguage fontSize="23" color="var(--icon-grey)" />
                <InfoTextContainer>
                  <InfoText>{website}</InfoText>
                </InfoTextContainer>
              </InfoRow>
            </InfoColumn>
          )}
          <BioContainer>
            <h3>User Biography</h3>
            <Typhography style={{ fontSize: "var(--font-size-large)" }}>
              {bio || "The user does not have bio"}
            </Typhography>
          </BioContainer>
        </ContentWrapper>
      </Card>
      <ButtonContainer>
        <LinkButton href={githubLink} target="_blank" rel="noopener noreferrer">
          GitHub Profile <RiExternalLinkLine />
        </LinkButton>
      </ButtonContainer>
    </Wrapper>
  );
};

export default UserCard;
