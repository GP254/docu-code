import React from "react";
import Link from "next/link";
import { Container, Row, Col} from "react-bootstrap";
import { BsFileText, BsFolder } from "react-icons/bs";

import {StyledAlert} from "./dir-view.styles";

const constants = {
  SUMMARY: "Summary"
};

const DirView = ({ ghData, path, dirPath }) => {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={7}>
          <h2>{dirPath}</h2>
          {
            ghData.map(({ name, type }, id) => (
              <Link key={`files-${id}`} href={path + "/" + name} passHref>
                <StyledAlert>
                  {type === "file" ? <BsFileText/> : <BsFolder/>}
                  {" "}
                  {name}
                </StyledAlert>
              </Link>
            ))
          }
        </Col>
        <Col md={5}>
          <h2>{constants.SUMMARY}</h2>
        </Col>
      </Row>
    </Container>
  );
};

export default DirView;
