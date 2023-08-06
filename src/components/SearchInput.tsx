import styled from "styled-components";
import { Button, Input } from "../globalStyles";
import { FC } from "react";

import { useDispatch } from "react-redux";
import { fetchProfile } from "../api/fetchProfile";
import { AppDispatch } from "../redux/configureStore";

const SearchInput: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const username = (e.target as HTMLFormElement).search.value;
    dispatch(fetchProfile(username));
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSearch}>
        <Input type="text" name="search" placeholder="Search user..." />
        <Button type="submit">Search</Button>
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 430px;
  margin-top: 3%;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export default SearchInput;
