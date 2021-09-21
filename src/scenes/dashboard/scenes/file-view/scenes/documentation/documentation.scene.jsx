import React, {useState} from "react";
import {Alert, Button} from "react-bootstrap";

const constants = {
  DOCUMENTATION: 'Documentation'
};

const Documentation = () => {
  const [docItems, setDocItems] = useState([]);

  const handleClick = () => {
    setDocItems([...docItems, {
      type: "func",
      heading: null
    }]);
  };

  return (
    <>
      <h2>{constants.DOCUMENTATION}</h2>
      {
        docItems.map(({type, heading}, id) => (
          <Alert key={`doc-item-${id}`} variant="secondary" style={{ cursor: "pointer" }}>
            {type}
          </Alert>
        ))
      }
      <Button
        variant="secondary"
        style={{ float: 'right' }}
        onClick={handleClick}
      >+</Button>
    </>
  )
};

export default Documentation;
