import React from "react";
import "../../App.scss";

const RaceView = (props) => {
  const { members, distance } = props;
  let Position = (member, distance) => {
    return (member.distance / distance) * 360;
  };
  return members.map((member, i) => (
    <div className="loader">
      <div
        className={`face ${member.GetFace()}`}
        style={{ transform: `rotate(${Position(member, distance)}deg)` }}
      >
        <div className="circle"></div>
      </div>
    </div>
  ));
};

export default RaceView;
