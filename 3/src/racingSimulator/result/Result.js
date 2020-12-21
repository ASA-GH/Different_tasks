import React from "react";
import { Button, Modal, Table } from "react-bootstrap";
import Tbody from "./Tbody";

const Result = (props) => {
  const { members, show, HandleClose, HandlerStart, value } = props;

  return (
    <Modal show={show} onHide={HandleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Race Results Table</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Point</th>
              <th>Name</th>
              <th>Type</th>
              <th>Time</th>
            </tr>
          </thead>
          <Tbody members={members} />
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={HandleClose}>
          Close
        </Button>
        <Button variant="success" onClick={() => HandlerStart(value)}>
          Lap start
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Result;
