import React from "react";

const GetUseTransport = (props) => {
  const {
    member,
    distance,
    widthUse,
    heightUse,
    radius,
    x0,
    y0,
    GetRotate,
    GetPosition,
    angle0,
  } = props;
  return (
    <g
      transform={`translate(${
        GetPosition(member, distance, radius, x0, y0, angle0).x
      }, ${GetPosition(member, distance, radius, x0, y0, angle0).y})`}
    >
      <use
        xlinkHref={`#${member.type}`}
        stroke={member.GetFace()}
        stroke-width="1"
        fill="none"
        height={heightUse}
        width={widthUse}
        stroke-linecap="round"
        stroke-linejoin="round"
        x={-(widthUse / 2)}
        y={-(heightUse / 2)}
        transform={`rotate(${GetRotate(member, distance, angle0)})`}
      />
    </g>
  );
};

export default GetUseTransport;
