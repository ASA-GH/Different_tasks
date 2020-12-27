import React from "react";
import "../../App.scss";
import testImg from "../../image/icon.svg";

const RaceView1 = (props) => {
  const { members, distance } = props;
  let radius = 100;

  let Position = (member, distance) => {
    let a = ((member.distance) * 180) / (radius * Math.PI);
    let b = (member.distance / distance) * 360;
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
    console.log(a)
    console.log(b)
    console.log(radius * Math.cos(a))

    return a
  };
  let test = (members, distance, radius) => {
    return (
      <div>
        <svg width="300" height="300">
          <g class="layer">
            <circle
              cx="150"
              cy="150"
              fill="#ff0000"
              id="svg_2"
              r={`${radius}`}
              stroke="#000000"
              stroke-width="5"
            />
            {members.map((member, i) => (
              <circle
                cx={radius * Math.cos(Position(member, distance)) + 150}
                cy={radius * Math.sin(Position(member, distance)) + 150}
                fill="#7fff00"
                id="svg_5"
                r="10"
                stroke="#000000"
                stroke-dasharray="null"
                stroke-linecap="null"
                stroke-linejoin="null"
                stroke-width="5"
              />
            ))}
          </g>
        </svg>
      </div>
    );
  };

  // x = radius*cos(Position(member, distance))
  // y = radius*sin(Position(member, distance))

  return test(members, distance, radius);
};

export default RaceView1;
