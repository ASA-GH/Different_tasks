import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container } from "react-bootstrap";
import "./App.scss";
import Navigation from "./racingSimulator/race/navigation/Navigation";
import ControlPanel from "./racingSimulator/race/ControlPanel";
import ContainerRaceView from "./racingSimulator/race/raceView/ContainerRaceView";
import ListMembers from "./racingSimulator/race/ListMembers";

const App = ( props ) => {
  const{ members,
    distance,
    race,
    show,
    HandlerStart,
    DeleteMember,
    HandleClose,
    AddMember} = props
  return (
    <Container className="mainContainer">
      <Row>
        <Col>
          <Row>
            <Col>
              <br />
              <h1 className="md-center">Members</h1>
              <br />
            </Col>
          </Row>
          <Row>
            <Container className="membersView">
            <ListMembers
        members={members}
        distance={distance}
        onClose={DeleteMember}
      />
            </Container>
          </Row>
        </Col>
        <Col>
          <Row>
            <Col>
              <br />
              <h1 className="md-center">Race control</h1>
              <br />
            </Col>
          </Row>
          <ContainerRaceView members={members} distance={distance} />
          <Row>
            <Col>
              <br />
              <ControlPanel
                race={race}
                HandlerStart={HandlerStart}
                distance={distance}
                members={members}
                show={show}
                HandleClose={HandleClose}
              />
            </Col>
          </Row>
        </Col>
        <Col>
          <Row>
            <Col>
              <br />
              <h1 className="md-center">Add member</h1>
              <br />
            </Col>
          </Row>
          <Row>
            <Col>
              <Navigation members={members} AddMember={AddMember} race={race} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default App;
