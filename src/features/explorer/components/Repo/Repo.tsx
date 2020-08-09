import React from "react";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import { IRepo } from "../../services/store/types";

import classes from "./Repo.module.css";

interface IProps {
  repo: IRepo;
}

const Repo: React.FC<IProps> = ({
  repo: { name, description, stargazersCount },
}) => {
  return (
    <section className={classes.wrapper}>
      <Row className={classes["main-row"]}>
        <Col sm="10">{name}</Col>
        <Col sm="2" className={classes["stargazers-col"]}>
          {stargazersCount}
          <FontAwesomeIcon icon={faStar} className="ml-1"/>
        </Col>
      </Row>
      <Row className={classes["description-row"]}>
        <Col>{description}</Col>
      </Row>
    </section>
  );
};

export default Repo;
