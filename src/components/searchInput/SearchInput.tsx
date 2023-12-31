import { Button, Input } from "../../globalStyles";
import { FC, useState } from "react";
import { fetchProfile } from "../../api/fetchProfile";
import { useAppDispatch } from "../../redux/configureStore";
import { clearUser } from "../../redux/userProfileSlice";
import { Form, Wrapper } from "./searchInputStyle";

const SearchInput: FC = () => {
  const [inputValue, setInputValue] = useState("");
const dispatch = useAppDispatch();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(clearUser());
    dispatch(fetchProfile(inputValue));
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSearch}>
        <Input
          type="text"
          name="search"
          placeholder="Search user..."
          onChange={(e) => setInputValue(e.target.value)}
          autoComplete="off"
          required
        />
        <Button type="submit">Search</Button>
      </Form>
    </Wrapper>
  );
};

export default SearchInput;
