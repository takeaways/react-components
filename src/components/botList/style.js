import React from "react";
import styled from "styled-components";

const BotListBlock = styled.div`
  width: 80%;
  height: 80%;

  position: relative;
  background: white;

  margin: 0 auto;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const BotTemplate = ({ children }) => {
  return <BotListBlock>{children}</BotListBlock>;
};

export default BotTemplate;
