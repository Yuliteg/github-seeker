import styled from "styled-components";
import { AiFillFolderOpen } from "react-icons/ai";
import { BsFillPeopleFill, BsFillPersonCheckFill } from "react-icons/bs";
import { FC } from "react";
import { User } from "../model/profile";

interface UserInfoCardProps {
  user: User | null;
}

const UserInfoCard: FC<UserInfoCardProps> = ({ user }) => {
  if (!user) {
    return null;
  }

  const { repo, followers, following } = user;

  return (
    <UserInfo>
      <InfoArticle>
        <AiFillFolderOpen size={20} color="hsl(250, 75%, 70%)" />
        <p>Repo: {repo}</p>
      </InfoArticle>
      <InfoArticle>
        <BsFillPeopleFill size={20} color="hsl(0, 70%, 70%)" />
        <p>Followers: {followers}</p>
      </InfoArticle>
      <InfoArticle>
        <BsFillPersonCheckFill size={20} color="hsl(50, 77%, 65%)" />
        <p>Following: {following}</p>
      </InfoArticle>
    </UserInfo>
  );
};

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

export default UserInfoCard;
