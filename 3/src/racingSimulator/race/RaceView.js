import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import SymbolPlanet from "./SymbolPlanet";
import SymbolBike from "../transport/transportView/SymbolBike";
import SymbolCar from "../transport/transportView/SymbolCar";
import SymbolTruck from "../transport/transportView/SymbolTruck";

import "../../App.scss";

const RaceView = (props) => {
  const { members, distance } = props;
  let outerRadius = 150;
  let innerRadius = 120;
  let widthSvg = 310;
  let heightSvg = 310;

  let widthUse = 46;
  let heightUse = 46;
  let angle0 = 0;

  const CenterCoordinateX = (widthSvg) => {
    return widthSvg / 2;
  };
  const CenterCoordinateY = (heightSvg) => {
    return heightSvg / 2;
  };

  const Radius = (outerRadius, innerRadius) => {
    return (outerRadius - innerRadius) / 2 + innerRadius;
  };
  const GetAngle = (member, distance, angle0) => {
    let angle = (member.distance * 360) / distance + angle0;
    if (angle === Infinity || !angle) {
      angle = 0;
    }
    let obj = {};
    let deg = angle;
    let rad = (angle * Math.PI) / 180;
    obj.deg = deg;
    obj.rad = rad;
    return obj;
  };
  const PositionX = (
    member,
    distance,
    outerRadius,
    innerRadius,
    widthSvg,
    angle0
  ) => {
    let cos = Math.cos(GetAngle(member, distance, angle0).rad);
    let x = CenterCoordinateX(widthSvg);
    let radius = Radius(outerRadius, innerRadius);
    return x + radius * cos;
  };
  const PositionY = (
    member,
    distance,
    outerRadius,
    innerRadius,
    heightSvg,
    angle0
  ) => {
    let sin = Math.sin(GetAngle(member, distance, angle0).rad);
    let y = CenterCoordinateY(heightSvg);
    let radius = Radius(outerRadius, innerRadius);
    return y + radius * sin;
  };
  let GetDefs = () => {
    return (
      <defs>
        <SymbolBike/>
        <SymbolCar/>
        <SymbolTruck/>
        <SymbolPlanet/>
      </defs>
    );
  };
  const GetUseTransport = (
    member,
    distance,
    outerRadius,
    innerRadius,
    widthSvg,
    widthUse,
    heightSvg,
    heightUse,
    angle0
  ) => {
    return (
      <g
        transform={`translate(${PositionX(
          member,
          distance,
          outerRadius,
          innerRadius,
          widthSvg,
          angle0
        )}, ${PositionY(
          member,
          distance,
          outerRadius,
          innerRadius,
          heightSvg,
          angle0
        )})`}
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
          transform={`rotate(${GetAngle(member, distance, angle0).deg + 90})`}
        />
      </g>
    );
  };

  const GetUsePlanet = (innerRadius, widthSvg, heightSvg) => {
    return (
      <g
        transform={`translate(${CenterCoordinateX(widthSvg)},
         ${CenterCoordinateY(heightSvg)})`}
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

  const View = (
    members,
    distance,
    outerRadius,
    innerRadius,
    widthSvg,
    heightSvg,
    widthUse,
    heightUse,
    angle0
  ) => {
    return (
      <Container className="d-flex justify-content-center ">
        <Row>
          <Col>
            <svg width={`${widthSvg}`} height={`${heightSvg}`}>
              {GetDefs()}
              <g class="layer">
                <circle
                  cx={`${CenterCoordinateX(widthSvg)}`}
                  cy={`${CenterCoordinateY(heightSvg)}`}
                  fill="#fff"
                  id="svg_1"
                  r={`${outerRadius}`}
                  stroke="#fff"
                  stroke-width="1"
                />
                <circle
                  cx={`${CenterCoordinateX(widthSvg)}`}
                  cy={`${CenterCoordinateY(heightSvg)}`}
                  fill="#fff"
                  id="svg_2"
                  r={`${innerRadius}`}
                  stroke="#000"
                  stroke-width="1"
                />
                {GetUsePlanet(innerRadius, widthSvg, heightSvg)}
                {members.map((member) =>
                  GetUseTransport(
                    member,
                    distance,
                    outerRadius,
                    innerRadius,
                    widthSvg,
                    widthUse,
                    heightSvg,
                    heightUse,
                    angle0
                  )
                )}
              </g>
            </svg>
          </Col>
        </Row>
      </Container>
    );
  };
  return View(
    members,
    distance,
    outerRadius,
    innerRadius,
    widthSvg,
    heightSvg,
    widthUse,
    heightUse,
    angle0
  );
};

export default RaceView;
