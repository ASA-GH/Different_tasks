import React, { useState, useMemo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Row, Col, Container } from "react-bootstrap";
import "./App.scss";
import config from "./config.json";
import CreateTransport from "./racingSimulator/transport/CreateTransport";
import ListMembers from "./racingSimulator/race/ListMembers";
import Start from "./racingSimulator/race/Race";
import Navigation from "./racingSimulator/race/navigation/Navigation";

function App() {
  const [members, setMembers] = useState(0);
  const [race, setRace] = useState(false);
  const [time, setTime] = useState(0);

  const Finished = (_members, context) => {
    console.log("Finished");
    setRace(false);

    setMembers(_members);
    return members;
  };
  const Update = (_members, _time) => {
    setMembers(_members);
    setTime(_time);
    return members;
  };
  const HandlerStart = () => {
    setRace(true);
    Start([...members], Finished, { distance: 300, time: 0, update: Update });
  };
  const DeleteMember = (member) => {
    let _members = [...members];
    _members.splice(_members.indexOf(member), 1);
    setMembers(_members);
  };
  const initMembers = (members, config) => {
    if (members === 0) {
      let arr = [];
      config.members.map((member) => {
        arr.push(CreateTransport(member.name, member.type, member.context));
      });
      setMembers(arr);
      return true;
    } else return ListMembers(members, DeleteMember);
  };
  const AddMember = (members, data) => {
    let _members = [...members];

    let context = {};
    Object.keys(data).map((key) => {
      if (key !== "name" && key !== "type") context[key] = data[key];
    });
    _members.push(CreateTransport(data.name, data.type, context));
    setMembers(_members);
  };
  return useMemo(() => {
    return (
      <Container style={{ backgroundColor: "#d63384", minHeight: "100vh" }}>
        <Row>
          <Col style={{ backgroundColor: "red", height: "100%" }}>
            {initMembers(members, config)}
          </Col>
          <Col style={{ backgroundColor: "blue" }}>
            <Button variant="success" disabled={race} onClick={HandlerStart}>
              Start
            </Button>
          </Col>
          <Col style={{ backgroundColor: "yellow" }}>
            <Navigation members={members} AddMember={AddMember} />
          </Col>
        </Row>
      </Container>
    );
  }, [members, race, time]);
}
export default App;
