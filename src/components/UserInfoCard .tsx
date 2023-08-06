import styled from "styled-components";
import { AiFillFolderOpen } from "react-icons/ai";
import { BsFillPeopleFill, BsFillPersonCheckFill } from "react-icons/bs";

const UserInfoCard = ({ user }: any) => {
  return (
    <UserInfo>
      <InfoArticle>
        <AiFillFolderOpen size={20} color="hsl(250, 75%, 70%)" />
        <p>Repo: {user.repo}</p>
      </InfoArticle>
      <InfoArticle>
        <BsFillPeopleFill size={20} color="hsl(0, 70%, 70%)" />
        <p>Followers: {user.followers}</p>
      </InfoArticle>
      <InfoArticle>
        <BsFillPersonCheckFill size={20} color="hsl(50, 77%, 65%)" />
        <p>Following: {user.following}</p>
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
    display: none;
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
