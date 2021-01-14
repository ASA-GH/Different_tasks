import React from "react";

const GetUsePlanet = (props) => {
  const { innerRadius, x0, y0 } = props;
  return (
    <g
      transform={`translate(${x0},
       ${y0})`}
    >
      <use
        xlinkHref="#Planet"
        stroke="none"
        stroke-width="0.75"
        fill="#000"
        height={innerRadius * 2}
        width={innerRadius * 2}
        x={-innerRadius}
        y={-innerRadius}
      />
    </g>
  );
};
export default GetUsePlanet;
