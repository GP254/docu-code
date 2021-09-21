import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import SyntaxHighlighter from 'react-syntax-highlighter';
import Documentation from "./scenes/documentation/documentation.scene";

const constants = {
  SUMMARY: "Summary"
};

const FileView = ({ ghData, dirPath }) => {
  const { content } = ghData;
  const srcCode = content ? Buffer.from(content, 'base64').toString() : "loading ...";
  return (
    <Container className="mt-6">
      <Row>
        <Col md={7}>
          <h2>{dirPath}</h2>
          <SyntaxHighlighter>
            {srcCode}
          </SyntaxHighlighter>
        </Col>
        <Col md={5}>
          <h2>{constants.SUMMARY}</h2>
          <Documentation/>
        </Col>
      </Row>
    </Container>
  );
};

export default FileView;
