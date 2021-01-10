import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "../../App.scss";

const RaceView = (props) => {
  const { members, distance } = props;
  let outerRadius = 150;
  let innerRadius = 100;
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
    widthUse,
    angle0
  ) => {
    let cos = Math.cos(GetAngle(member, distance, angle0));
    let x = CenterCoordinateX(widthSvg);
    let radius = Radius(outerRadius, innerRadius);
    let xUse = widthUse / 2;
    return x + radius * cos - xUse;
  };
  const PositionY = (
    member,
    distance,
    outerRadius,
    innerRadius,
    heightSvg,
    heightUse,
    angle0
  ) => {
    let sin = Math.sin(GetAngle(member, distance, angle0));
    let y = CenterCoordinateY(heightSvg);
    let radius = Radius(outerRadius, innerRadius);
    let yUse = heightUse / 2;
    return y + radius * sin - yUse;
  };
  let GetDefs = () => {
    return (
      <defs>
        <symbol id="Car" viewBox="0 0 24 24" height="40px" width="40px">
          <path d="M3 12L5 7H7M3 12H2V17H3M3 12H7M18 12L16 7H12M18 12H20C21.1046 12 22 12.8954 22 14V17H20M18 12H12M7 17H16M7 7V12M7 7H12M7 12H12M12 12V7" />
          <circle cx="5" cy="17" r="2" />
          <circle cx="17" cy="17" r="2" />
        </symbol>
        <symbol id="Bike" viewBox="0 0 24 24">
          <g>
            <circle cx="14" cy="6" r="1" />
            <path d="M12 18V14L9 12L12 9L14 11L16 12" />
            <circle cx="6" cy="17" r="3" />
            <circle cx="18" cy="17" r="3" />
          </g>
        </symbol>
        <symbol id="Truck" viewBox="0 0 24 24" height="40px" width="40px">
          <path d="M4 17H2V7H15V17H8" />
          <path d="M20 17H22V12.5556L20 9H15V17H16" />
          <circle cx="6" cy="17" r="2" />
          <circle cx="18" cy="17" r="2" />
        </symbol>
      </defs>
    );
  };
  let GetUse = (
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
      <use
        xlinkHref={`#${member.type}`}
        stroke={member.GetFace()}
        stroke-width="0.75"
        fill="none"
        height={heightUse}
        width={widthUse}
        stroke-linecap="round"
        stroke-linejoin="round"
        x={PositionX(
          member,
          distance,
          outerRadius,
          innerRadius,
          widthSvg,
          widthUse,
          angle0
        )}
        y={PositionY(
          member,
          distance,
          outerRadius,
          innerRadius,
          heightSvg,
          heightUse,
          angle0
        )}
      />
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
                {members.map((member) =>
                  GetUse(
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
