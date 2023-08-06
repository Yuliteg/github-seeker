import { AiFillFolderOpen } from "react-icons/ai";
import { BsFillPeopleFill, BsFillPersonCheckFill } from "react-icons/bs";
import { FC } from "react";
import { User } from "../../model/profile";
import { InfoArticle, UserInfo } from "./userInfoCardStyle";

interface UserInfoCardProps {
  user: User | null;
}

const UserInfoCard: FC<UserInfoCardProps> = ({ user }) => {
  if (!user) return null;

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

export default UserInfoCard;
