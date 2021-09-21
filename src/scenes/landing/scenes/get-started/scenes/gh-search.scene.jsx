import React, { useState } from "react";
import { useRouter } from 'next/router'
import { Container, Row, Col, Form } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { StyledButton, FormComponents } from "./gh-search.styles";

var isGithubUrl = require('is-github-url');

const constants = {
  PLACEHOLDER: "Paste Your Github Repository Link",
  BUTTON: {
    text: "GO"
  }
};

const GhSearch = () => {
  const router = useRouter()
  const [ghLink, setGhLink] = useState('');

  const notifyError = () => toast.error("Invalid URL");

  const handleSearchBar = (e) => {
     setGhLink(e.target.value);
  };



  const handleButtonClick = () => {
    const linkArr = ghLink.split('/')
    const [username, repo] =  linkArr.slice(linkArr.length - 2);
    isGithubUrl(ghLink, { repository: true }) ? router.push(`/${username}/${repo}`) : notifyError();
  };


  return (
    <FormComponents>
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col md={6}>
            <Row className="mx-auto">
              <Col xs={10} className="p-0">
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder={constants.PLACEHOLDER}
                  value={ghLink}
                  onChange={handleSearchBar}
                />
              </Col>
              <Col xs={2} className="p-0">
                <StyledButton onClick={handleButtonClick}>
                  {constants.BUTTON.text}
                  <ToastContainer />
                </StyledButton>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </FormComponents>
  )
};

export default GhSearch;
