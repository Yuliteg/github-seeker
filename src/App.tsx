import styled from "styled-components";
import Navbar from "./components/navbar/Navbar";
import SearchInput from "./components/searchInput/SearchInput";
import searchImg from "./assets/images/pngwing.com (17).png";
import { Subtitle, Title } from "./globalStyles";
import { BsFillSearchHeartFill } from "react-icons/bs";
import UserCard from "./components/userCard/UserCard";
import UserInfoCard from "./components/userInfoCard/UserInfoCard ";
import { useSelector } from "react-redux";
import { RootState } from "./redux/configureStore";
import Loading from "./components/helpers/Loading";
import { AiOutlineWarning } from "react-icons/ai";

function App() {
  const { user, isLoading, error } = useSelector(
    (state: RootState) => state.user
  );

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

          {isLoading ? (
            <Loading />
          ) : (
            <UserContentWrapper>
              <UserCard user={user} />
              <UserInfoCard user={user} />
            </UserContentWrapper>
          )}

          {!user && !isLoading && !error && (
            <SearchMessage>
              <Subtitle>Please, search your user</Subtitle>
              <BsFillSearchHeartFill size={25} color="var(--icon-grey)" />
            </SearchMessage>
          )}

          {error && (
            <Subtitle textalign="center">
              {error.message || "An error occurred."}
              <AiOutlineWarning
                style={{ marginLeft: "3%", color: "#dc143c" }}
                size="28"
              />
            </Subtitle>
          )}
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

  @media (max-width: 952px) {
    flex-direction: column;
  }
`;
