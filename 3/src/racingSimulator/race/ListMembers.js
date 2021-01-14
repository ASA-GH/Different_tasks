import React from "react";
import "../../App.scss";
import {
  Container,
  Row,
  Col,
  Toast,
  Badge,
  ProgressBar,
} from "react-bootstrap";

const ListMembers = (props) => {
  const { members, distance, onClose } = props;

  const Parameter = (member) => {
    switch (member.type) {
      case "Bike":
        return `Stroller : ${member.stroller === false ? "No" : "Yes"}`;
      case "Car":
        return `People : ${member.peopleCount}`;
      case "Truck":
        return `Cargo : ${member.cargoWeight}`;
      default:
        return "Error";
    }
  };
  return members.map((member, i) => (
    <Toast
      onClose={() => {
        onClose(member);
      }}
    >
      <Toast.Header className={`pl-3 ${member.GetColor()}`}>
        <Badge className="mr-3 " variant="light">
          {i + 1}
        </Badge>
        <strong className="mr-auto"> {member.name} </strong>
      </Toast.Header>
      <Toast.Body>
        <Container>
          <Row>
            <Col>
              <ProgressBar
                min={0}
                max={distance}
                variant={member.GetVariant()}
                now={member.distance}
                className="progressBar"
              />
            </Col>
          </Row>
          <Row>
            <Col>{`Distance : ${member.distance}`}</Col>
            <Col>{`Time : ${member.time}`}</Col>
          </Row>
          <Row>
            <Col>{`Speed : ${member.speed}`}</Col>
            <Col>{Parameter(member)}</Col>
          </Row>
          <Row>
            <Col>{`Type : ${member.type}`}</Col>
            <Col>{`Chance : ${member.probability}`}</Col>
          </Row>
        </Container>
      </Toast.Body>
    </Toast>
  ));
};
export default ListMembers;
