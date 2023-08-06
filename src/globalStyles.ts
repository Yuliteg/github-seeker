import styled from "styled-components";

interface TypographyProps {
  size?: string;
  fontWeight?: string;
}

export const Button = styled.button`
  background-color: #28282b;
  color: white;
  border: none;
  padding: 10px 15px;
  text-decoration: none;
  cursor: pointer;
`;

export const Input = styled.input`
  padding: 10px;
  background-color: hsl(212, 33%, 93%);
  border: none;
  flex-grow: 1;
`;


export const Title = styled.h1<TypographyProps>`
  font-size: 35px;
  font-weight: ${(props) => props.fontWeight || "normal"};
`;

export const Subtitle = styled.h3<TypographyProps>`
  font-size: 25px;
  font-weight: ${(props) => props.fontWeight || "normal"};
`;

export const BodyText = styled.p<TypographyProps>`
  font-size: 16px;
  font-weight: ${(props) => props.fontWeight || "normal"};
`;

export const Typhography = styled.p<TypographyProps>`
  font-size: ${(props) => props.size || "16px"};
  font-weight: ${(props) => props.fontWeight || "normal"};
`;