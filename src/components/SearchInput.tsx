import styled from "styled-components";
import { Button, Input } from "../globalStyles";

const SearchInput = () => {
  return (
    <Wrapper>
      <Form>
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
