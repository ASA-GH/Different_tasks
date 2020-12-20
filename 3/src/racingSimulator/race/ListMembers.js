import React from "react";
import { Container, Row, Col, Toast, Badge } from "react-bootstrap";

const ListMembers = (members) => {
   const Parameter = (member) => {
    switch (member.type) {
      case "Motorcycle":
        return `Stroller : ${member.stroller === false ? "No" : "Yes"}`;
      case "Car":
        return `People : ${member.peopleCount}`;
      case "Truck":
        return `Cargo : ${member.cargoWeight}`;
      default:
        return "Error"
    }
     }
  return members.map((member, i) => (
    <Toast>
      <Toast.Header className="pl-3 ">
        <Badge className="mr-3 " variant="primary">
          {i + 1}
        </Badge>
        <strong className="mr-auto"> {member.name} </strong>
      </Toast.Header>
      <Toast.Body>
        {" "}
        <Container>
          <Row >
            <Col>{`Distance : ${member.distance}`}</Col>
            <Col>{`Time : ${member.time}`}</Col>
          </Row>
          <Row >
            <Col>{`Speed : ${member.speed}`}</Col>
            <Col>{Parameter(member)}</Col>
          </Row>
          <Row className="md" >
            {`Puncture probability : ${member.probability}`}
          </Row>

        </Container>
      </Toast.Body>
    </Toast>
  ));
};
export default ListMembers;
