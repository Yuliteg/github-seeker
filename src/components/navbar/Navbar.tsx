import { Wrapper } from "./navbarStyles";
import logoImg from "../../assets/images/github-character.png";
import { FC } from "react";

const Navbar : FC = () => {
  return (
    <Wrapper role="navigation">
      <img src={logoImg} alt="GitHub Seeker Logo" className="logo-img" />
      <h3> GitHub Seeker</h3>
    </Wrapper>
  );
};

export default Navbar;
