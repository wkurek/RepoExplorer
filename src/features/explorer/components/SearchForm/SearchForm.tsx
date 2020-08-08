import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

interface IProps {
  fetching: boolean;
  search: (query: string) => void;
}

const SearchForm: React.FC<IProps> = ({ fetching, search }) => {
  const [query, setQuery] = useState<string>("");

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) =>
    setQuery(target.value);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    search(query);
    event.preventDefault();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formQuery">
        <Form.Control
          placeholder="Enter username"
          value={query}
          onChange={handleChange}
        />
      </Form.Group>
      <Button type="submit" disabled={fetching} block={true}>
        Search
      </Button>
    </Form>
  );
};

export default SearchForm;
