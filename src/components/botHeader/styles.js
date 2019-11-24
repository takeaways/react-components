import React from "react";
import styled from "styled-components";

export const BotSearchInput = styled.input`
  /* padding: 10px; */
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  padding: 12px;
  border: 1px solid #dee2e6;
  outline: none;
  font-size: 1rem;
`;
export const BotSearchLabelDiv = styled.div`
  border: 1px solid red;
  background: yellow;
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;

export const BotSearchInputDiv = styled.div`
  border: 1px solid red;
  background: orange;
  width: 75%;
  margin: 0;
  padding: 12px;
  display: flex;
`;

export const BotSearchButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #38d9a9;
  height: 27px;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }
  cursor: pointer;
  color: white;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
`;
export const BotSeachBlock = styled.div`
  border: 1px solid blue;
  display: flex;
  background: #f8f9fa;
  height: 3rem;
`;
