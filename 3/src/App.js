import React, { useState, useMemo } from "react";
// import Race from "./racingSimulator/race/Race";
// import Navigation from "./racingSimulator/race/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Row,
  Col,
  Container,
  Toast,
  Form,
  Badge,
} from "react-bootstrap";
import "./App.scss";
import config from "./config.json";
import CreateTransport from "./racingSimulator/transport/CreateTransport";
import ListMembers from "./racingSimulator/race/ListMembers";
import Start from "./racingSimulator/race/Race";

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
 const Update = (_members, _time) =>{
  console.log("Update");
  setMembers(_members);
  setTime(_time);
  return members;
 }
  const HandlerStart = () => {
    setRace(true);
    Start([...members], Finished, { distance: 300, time: 0, update: Update });
  };
  const DeleteMember = (member) =>{
    let _members = [...members]
    _members.splice(_members.indexOf(member), 1);
    setMembers(_members)
  }
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
            <Form>
              <br />
              <Form.Control type="text" placeholder="Name" />
              <br />
              <Form.Control as="select">
                <option>Default select</option>
              </Form.Control>
              <br />
              <Form.Check
                type="switch"
                id="custom-switch"
                label="Check this switch"
              />
              <br />
              <Form.Control type="text" placeholder="people" />
              <br />
              <Form.Control type="text" placeholder="cargo" />
              <br />
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }, [members, race, time]);
}
export default App;

// function App() {
//   return (
//     <div className="wrapperApp">
//       <div className="innerApp">
//         <Navigation/>
//       </div>
//     </div>
//   );
// }

// export default App;

// {members.map((variant, idx) => (
//       <Toast>
//         <Toast.Header>
//           <img
//             src="holder.js/20x20?text=%20"
//             className="rounded mr-2"
//             alt=""
//           />
//           <strong className="mr-auto">{variant}</strong>
//           <small>11 mins ago</small>
//         </Toast.Header>
//         <Toast.Body>
//           Hello, world! This is a toast message.
//         </Toast.Body>
//       </Toast>
//     ))}
