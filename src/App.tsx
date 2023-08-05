import styled from "styled-components";
import Navbar from "./components/navbar/Navbar";
import SearchInput from "./components/SearchInput";
import searchImg from "./assets/images/pngwing.com (17).png";
import { Subtitle, Title } from "./globalStyles";
import UserCard from "./components/userCard/UserCard";

const user = {
  name: "John Doe",
  username: "johndoe",
  avatarUrl: "https://example.com/avatar.jpg",
  bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus nemo molestiae eveniet quidem voluptas eum commodi velit et enim illo. voluptas eum commodi velit et enim illo.",
  company: "Acme Inc.",
  location: "New York",
  website: "https://johndoe.com",
  githubLink: "https://github.com/johndoe",
};

function App() {
  return (
    <>
      <Navbar />
      <MainContainer>
        <div>
          <TitleContainer>
            <Title bold>GitHub Seeker</Title>
            <Subtitle bold>The best App for searching users!</Subtitle>
          </TitleContainer>
          <SearchInput />
          <UserCard user={user} />
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
  padding: 2% 10%;
  gap: 2%;

  @media (max-width: 1024px) {
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
