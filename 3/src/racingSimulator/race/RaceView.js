import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import img from "../../image/transport.svg";
import testA from "../transport/transportView/Test";
import "../../App.scss";

const RaceView = (props) => {
  const { members, distance } = props;
  let outerRadius = 150;
  let innerRadius = 100;
  let widthSvg = 310;
  let heightSvg = 310;
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
    let angle = (member.distance * 2 * Math.PI) / distance + angle0;
    if (angle === Infinity) {
      angle = 0;
    }
    return angle;
  };
  const PositionX = (
    member,
    distance,
    outerRadius,
    innerRadius,
    widthSvg,
    angle0
  ) => {
    let cos = Math.cos(GetAngle(member, distance, angle0));
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
    let sin = Math.sin(GetAngle(member, distance, angle0));
    let y = CenterCoordinateY(heightSvg);
    let radius = Radius(outerRadius, innerRadius);
    return y + radius * sin;
  };

  // transportSvg

  const MemberView = (member) => {
    switch (member.type) {
      case "Bike":
        return (
          <svg
            width="32px"
            height="32px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-labelledby="bikeIconTitle"
            stroke="#2329D6"
            stroke-width="0.75"
            stroke-linecap="round"
            stroke-linejoin="round"
            color="#2329D6"
          >
            <title id="bikeIconTitle">Bike</title>
            <circle cx="14" cy="6" r="1" />
            <path d="M12 18V14L9 12L12 9L14 11L16 12" />
            <circle cx="6" cy="17" r="3" /> <circle cx="18" cy="17" r="3" />
          </svg>
        );
      case "Car":
        return (
          <svg
            width="32px"
            height="32px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-labelledby="carAltIconTitle"
            stroke="#2329D6"
            stroke-width="0.75"
            stroke-linecap="round"
            stroke-linejoin="round"
            color="#2329D6"
          >
            <title id="carAltIconTitle">Car</title>
            <path d="M3 12L5 7H7M3 12H2V17H3M3 12H7M18 12L16 7H12M18 12H20C21.1046 12 22 12.8954 22 14V17H20M18 12H12M7 17H16M7 7V12M7 7H12M7 12H12M12 12V7" />
            <circle cx="5" cy="17" r="2" /> <circle cx="18" cy="17" r="2" />
          </svg>
        );
      case "Truck":
        return (
          <svg
            width="32px"
            height="32px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-labelledby="transportIconTitle"
            stroke="#2329D6"
            stroke-width="0.75"
            stroke-linecap="round"
            stroke-linejoin="round"
            color="#2329D6"
          >
            <title id="transportIconTitle">Transport</title>
            <path d="M4 17H2V7H15V17H8" />
            <path d="M20 17H22V12.5556L20 9H15V17H16" />
            <circle cx="6" cy="17" r="2" /> <circle cx="18" cy="17" r="2" />
          </svg>
        );
      default:
        return "Error";
    }
  };
  let test = (
    <svg
      height="20px"
      id="svg_2"
      viewBox="0 0 24 24"
      width="20px"
      x="2"
      y="0"
      fill="#ffffff"
      stroke="#2329D6"
      stroke-width="0.75"
      stroke-linecap="round"
      stroke-linejoin="round"
      color="#2329D6"
    >
      <path d="M3 12L5 7H7M3 12H2V17H3M3 12H7M18 12L16 7H12M18 12H20C21.1046 12 22 12.8954 22 14V17H20M18 12H12M7 17H16M7 7V12M7 7H12M7 12H12M12 12V7" />
      <circle cx="5" cy="17" r="2" /> <circle cx="17" cy="17" r="2" />
    </svg>
  );

  const View = (
    members,
    distance,
    outerRadius,
    innerRadius,
    widthSvg,
    heightSvg,
    angle0
  ) => {
    return (
      <Container className="d-flex justify-content-center ">
        <Row>
          <Col>
            <svg width={`${widthSvg}`} height={`${heightSvg}`}>
              <g class="layer">
                <circle
                  cx={`${CenterCoordinateX(widthSvg)}`}
                  cy={`${CenterCoordinateY(heightSvg)}`}
                  fill="#fff"
                  id="svg_1"
                  r={`${outerRadius}`}
                  stroke="#000000"
                  stroke-width="1"
                />
                <circle
                  cx={`${CenterCoordinateX(widthSvg)}`}
                  cy={`${CenterCoordinateY(heightSvg)}`}
                  fill="#fff"
                  id="svg_2"
                  r={`${innerRadius}`}
                  stroke="#000000"
                  stroke-width="1"
                />
                {members.map((member) => (
                  <circle
                    cx={PositionX(
                      member,
                      distance,
                      outerRadius,
                      innerRadius,
                      widthSvg,
                      angle0
                    )}
                    cy={PositionY(
                      member,
                      distance,
                      outerRadius,
                      innerRadius,
                      heightSvg,
                      angle0
                    )}
                    fill={member.GetFace()}
                    id="svg_5"
                    r="10"
                    stroke="null"
                    stroke-dasharray="null"
                    stroke-linecap="null"
                    stroke-linejoin="null"
                    stroke-width="null"
                  />
                ))}
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
    angle0
  );
};

export default RaceView;
