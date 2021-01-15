import React from "react";
import RaceView from "./RaceView";
import "../../../App.scss";

const ContainerRaceView = (props) => {
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
  const GetPosition = (member, distance, radius, x0, y0, angle0) => {
    let cos = Math.cos(GetAngle(member, distance, angle0).rad);
    let sin = Math.sin(GetAngle(member, distance, angle0).rad);
    let obj = {};
    obj.x = x0 + radius * cos;
    obj.y = y0 + radius * sin;
    return obj;
  };
  const GetRotate = (member, distance, angle0) => {
    return GetAngle(member, distance, angle0).deg + 90;
  };
  let radius = Radius(outerRadius, innerRadius);
  let x0 = CenterCoordinateX(widthSvg);
  let y0 = CenterCoordinateY(heightSvg);
  return (
    <RaceView
      members={members}
      distance={distance}
      outerRadius={outerRadius}
      innerRadius={innerRadius}
      widthSvg={widthSvg}
      heightSvg={heightSvg}
      widthUse={widthUse}
      heightUse={heightUse}
      radius={radius}
      x0={x0}
      y0={y0}
      GetAngle={GetAngle}
      GetPosition={GetPosition}
      GetRotate={GetRotate}
      angle0={angle0}
    />
  );
};

export default ContainerRaceView;
