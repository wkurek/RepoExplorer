import React, { useState } from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

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

  const spinner = fetching && (
    <Spinner animation="border" size="sm" as="span" className="mr-2" />
  );

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
        {spinner}
        Search
        <FontAwesomeIcon icon={faSearch} className="ml-1"/>
      </Button>
    </Form>
  );
};

export default SearchForm;
