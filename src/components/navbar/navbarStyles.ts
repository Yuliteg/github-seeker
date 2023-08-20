import styled from "styled-components";

const Wrapper = styled.header`
  width: 100%;
  height: var(--navbar-height);
  padding: 0 4rem;
  background-color: var(--navbar-bg-color);
  display: flex;
  align-items: center;
  gap: 0.6rem;
  box-sizing: border-box;

  .logo-img {
    width: 40px;
  }
`;

export { Wrapper };
