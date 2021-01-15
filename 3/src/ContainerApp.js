import React, { useState, useMemo } from "react";
import config from "./config.json";
import CreateTransport from "./racingSimulator/transport/CreateTransport";
import Start from "./racingSimulator/race/Race";
import App from "./App";
import "./App.scss";

const ContainerApp = () => {
  
  const GetMembers = (config) => {
    if (!config.members) return [];
    let arr = [];
    config.members.map((member) => {
      arr.push(CreateTransport(member.name, member.type, member.context));
    });
    return arr;
  };
  const GetDistance = (config) => {
    if (config.distance && config.distance > 1)
      return config.distance > 100000 ? 100000 : config.distance;
    return 1;
  };

  const [members, setMembers] = useState(GetMembers(config));
  const [distance, setDistance] = useState(GetDistance(config));
  const [show, setShow] = useState(false);
  const [race, setRace] = useState(false);
  const [time, setTime] = useState(0);

  const Finished = (_members) => {
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
      <App
        members={members}
        distance={distance}
        race={race}
        show={show}
        HandlerStart={HandlerStart}
        DeleteMember={DeleteMember}
        HandleClose={HandleClose}
        AddMember={AddMember}
      />
    );
  }, [members, race, time, show, HandleClose]);
};
export default ContainerApp;
