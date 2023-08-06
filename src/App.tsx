import styled from "styled-components";
import Navbar from "./components/navbar/Navbar";
import SearchInput from "./components/SearchInput";
import searchImg from "./assets/images/pngwing.com (17).png";
import { Subtitle, Title } from "./globalStyles";
import { BsFillSearchHeartFill } from "react-icons/bs";
import UserCard from "./components/userCard/UserCard";
import UserInfoCard from "./components/UserInfoCard ";
import { useSelector } from "react-redux";
import {RootState} from "./redux/configureStore"

const userCustom = {
  name: "John Doe",
  username: "johndoe",
  avatarUrl: "https://example.com/avatar.jpg",
  bio: "Lorem ipsum dolor sit amet, consectetur adipisi ipsum dolor sit amet, consectetur adipisicipsum dolor sit amet, consectetur adipisiiipsum dolor sit amet, consectetur adipisinipsum dolor sit amet, consectetur adipisigv elit. Praesentium fugiat harum vitae vero quam laudantium eligendi asperiores hic nobis neque.",
  company: "Acme Inc.",
  location: "New York",
  website: "https://johndoe.com",
  githubLink: "https://github.com/johndoe",
  repo: 10,
  followers: 100,
  following: 13,
};

function App() {
 const user = useSelector((state: RootState) => state.user);

  return (
    <>
      <Navbar />
      <MainContainer>
        <div>
          <TitleContainer>
            <Title fontWeight="bold">GitHub Seeker</Title>
            <Subtitle fontWeight="bold">
              The best App for searching users!
            </Subtitle>
          </TitleContainer>
          <SearchInput />

          <UserContentWrapper>
            <UserCard user={userCustom} />
            <UserInfoCard user={userCustom} />
          </UserContentWrapper>

          <SearchMessage>
            <Subtitle>Please, search your user</Subtitle>
            <BsFillSearchHeartFill size={25} color="var(--icon-grey)" />
          </SearchMessage>
        </div>
        <div>
          <GithubImage
            src={searchImg}
            alt="GitHub Search"
            className="github-img"
          />
        </div>
      </MainContainer>
    </>
  );
}

export default App;

const MainContainer = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 2% 5% 2% 10%;
  gap: 2%;

  @media (max-width: 1224px) {
    margin-bottom: 6%;
    gap: 0;
    .github-img {
      display: none;
    }
  }
`;

const TitleContainer = styled.div`
  text-align: center;
`;

const GithubImage = styled.img`
  max-width: 30vw;
  margin-top: 10%;
`;

const SearchMessage = styled.div`
  margin-top: 5%;
  display: flex;
  align-items: center;

  svg {
    margin-left: 10px;
    vertical-align: text-top;
  }
`;

const UserContentWrapper = styled.div`
  display: flex;
  gap: 2%;
`;
