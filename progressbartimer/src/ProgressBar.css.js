import styled from "styled-components";

export const ProgressBarContainer = styled.div`
  width: 100%;
  height: 50px;
  background: #f7f0e1dc;
  border-radius: 10px;
  border: 2px solid rgb(209, 207, 204);
`;

export const ProgressBar = styled.div`
  width: ${({ progress }) => `${progress}%`};
  height: 50px;
  background: #48fed7f8;
  border-radius: 10px;
`;
