import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import GetDefs from "./GetDefs";
import GetUsePlanet from "./GetUsePlanet";
import GetUseTransport from "./GetUseTransport";
import "../../../App.scss";

const RaceView = (props) => {
  const {
    members,
    distance,
    outerRadius,
    innerRadius,
    widthSvg,
    heightSvg,
    widthUse,
    heightUse,
    radius,
    x0,
    y0,
    GetPosition,
    GetRotate,
    angle0,
  } = props;
  return (
    <Container className="d-flex justify-content-center ">
      <Row>
        <Col>
          <svg width={`${widthSvg}`} height={`${heightSvg}`}>
            <GetDefs />
            <g class="layer">
              <circle
                cx={`${x0}`}
                cy={`${y0}`}
                fill="#fff"
                id="svg_1"
                r={`${outerRadius}`}
                stroke="#fff"
                stroke-width="1"
              />
              <circle
                cx={`${x0}`}
                cy={`${y0}`}
                fill="#fff"
                id="svg_2"
                r={`${innerRadius}`}
                stroke="#000"
                stroke-width="1"
              />
              <GetUsePlanet innerRadius={innerRadius} x0={x0} y0={y0} />
              {members.map((member) => (
                <GetUseTransport
                  member={member}
                  distance={distance}
                  widthUse={widthUse}
                  heightUse={heightUse}
                  radius={radius}
                  x0={x0}
                  y0={y0}
                  GetRotate={GetRotate}
                  GetPosition={GetPosition}
                  angle0={angle0}
                />
              ))}
            </g>
          </svg>
        </Col>
      </Row>
    </Container>
  );
};

export default RaceView;
