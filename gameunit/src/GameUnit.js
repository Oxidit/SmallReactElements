import React, { useEffect, useState } from "react";
import styled from "styled-components";

const StyledGameUnit = styled.section`
  background-color: #ffffff;
  width: 16rem;
  height: 16rem;
  position: relative;
`;
const Square = styled.div`
  background-color: #000000;
  width: 10rem;
  height: 10rem;
  left: ${({ x }) => x + "rem"};
  top: ${({ y }) => y + "rem"};
  position: absolute;
`;
function increment(x) {
  return x + 1;
}
function decrement(x) {
  return x - 1;
}
const actionXMap = {
  ArrowLeft: decrement,
  ArrowRight: increment
};
const actionYMap = {
  ArrowDown: increment,
  ArrowUp: decrement
};
//почему выдает ошибку? initialValue если у нас 0?(левый верхний угол)
export default function GameUnit({}) {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  function handleKeyPress(e) {
    const actionX = actionXMap[e.key];
    const actionY = actionYMap[e.key];
    actionX && setX(actionX);
    actionY && setY(actionY);
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <StyledGameUnit onKeyPress={handleKeyPress}>
      <Square x={x} y={y}></Square>
    </StyledGameUnit>
  );
}
