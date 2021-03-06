import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";

// Exporting both Booksearch and BooksearchItem from this file

// Booksearch renders a bootstrap list item
export function books({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// BooksearchItem renders a bootstrap list item containing data from the book api call
export function BooksearchItem({
  thumbnail = "https://placehold.it/300x300",
  title,
  authors,
  description,
  link
}) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={thumbnail} />
          </Col>
          <Col size="xs-8 sm-9">
            <h3>{title}</h3>
            <p>Author: {authors}</p>
            <a rel="noreferrer noopener" target="_blank" link={link}>
              Go to book!
            </a>
            <h4>{description}</h4>
          </Col>
        </Row>
      </Container>
    </li>
  );
}
