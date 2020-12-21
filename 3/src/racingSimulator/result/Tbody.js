import React from "react";

const Tbody = (props) => {
  const { members } = props;
  let _members = [...members];
  let arr = [];
  _members.map((value, i) => {
    arr.push(
      <tbody>
        <tr>
          <td>{i + 1}</td>
          <td>{value.name}</td>
          <td>{value.type}</td>
          <td>{value.time}</td>
        </tr>
      </tbody>
    );
  });
  return arr;
};
export default Tbody;
