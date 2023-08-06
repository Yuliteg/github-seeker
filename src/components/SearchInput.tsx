import styled from "styled-components";
import { Button, Input } from "../globalStyles";
import { FC, useState } from "react";

import { useDispatch } from "react-redux";
import { fetchProfile } from "../api/fetchProfile";
import { AppDispatch } from "../redux/configureStore";
import { clearUser } from "../redux/userProfileSlice";

const SearchInput: FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    if (inputValue.trim() === "") {
      setError(true);
      return;
    }

    dispatch(clearUser());
    dispatch(fetchProfile(inputValue));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setError(false);
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSearch}>
        <Input
          type="text"
          name="search"
          placeholder="Search user..."
          onChange={handleInputChange}
          className={error ? "error" : ""}
        />
        <Button type="submit">Search</Button>
      </Form>
      {error && <ErrorMessage>Please enter a username</ErrorMessage>}
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

const ErrorMessage = styled.p`
  color: red;
  margin-top: 4px;
`;

export default SearchInput;
