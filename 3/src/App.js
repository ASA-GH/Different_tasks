import React, { useState, useMemo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Row, Col, Container, Moda } from "react-bootstrap";
import "./App.scss";
import config from "./config.json";
import CreateTransport from "./racingSimulator/transport/CreateTransport";
import ListMembers from "./racingSimulator/race/ListMembers";
import Start from "./racingSimulator/race/Race";
import Navigation from "./racingSimulator/race/navigation/Navigation";
import ControlPanel from "./racingSimulator/race/ControlPanel";
import Result from "./racingSimulator/result/Result";

function App() {
  const [show, setShow] = useState(false);
  const [members, setMembers] = useState(0);
  const [race, setRace] = useState(false);
  const [time, setTime] = useState(0);
  const [distance, setDistance] = useState(0);

  const Finished = (_members, context) => {
    console.log("Finished");
    setRace(false);
    setShow(true);
    setMembers(_members);
    return members;
  };

  const HandleClose = () => {
    setShow(false);
    setDistance(0);
    setTime(0);
  };

  const Update = (_members, _time) => {
    setMembers(_members);
    setTime(_time);
    return members;
  };

  const HandlerStart = (_distance) => {
    HandleClose();
    setRace(true);
    setDistance(_distance);
    Start([...members], Finished, {
      distance: _distance,
      time: 0,
      update: Update,
    });
  };

  const DeleteMember = (member) => {
    let _members = [...members];
    _members.splice(_members.indexOf(member), 1);
    setMembers(_members);
  };

  const GetDistance = (config) => {
    if (config.distance && config.distance > 1)
      return config.distance > 100000 ? 100000 : config.distance;
    return 1;
  };
  const GetMembers = (config) => {
    if (!config.members) return [];

    let arr = [];
    config.members.map((member) => {
      arr.push(CreateTransport(member.name, member.type, member.context));
    });
    return arr;
  };

  const init = (members, config) => {
    if (members === 0) {
      setDistance(GetDistance(config));
      setMembers(GetMembers(config));
      return true;
    }
    return ListMembers(members, distance, DeleteMember);
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
      <Container style={{ minHeight: "100vh" }}>
        <Row>
          <Col style={{ height: "100%" }}>
            <Row>
              <Col>
                <br />
                <h1 className="md-center">Member</h1>
                <br />
              </Col>
            </Row>
            <Row>
              <Col>{init(members, config)}</Col>
            </Row>
          </Col>
          <Col>
            <ControlPanel
              race={race}
              HandlerStart={HandlerStart}
              distance={distance}
              members={members}
              show={show}
              HandleClose={HandleClose}
            />
          </Col>
          <Col>
            <Navigation members={members} AddMember={AddMember} race={race} />
          </Col>
        </Row>
      </Container>
    );
  }, [members, race, time, show, HandleClose]);
}
export default App;
