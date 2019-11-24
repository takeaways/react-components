import styled from "styled-components";

export const BotSearchLabelDiv = styled.div`
  border: 1px solid #f1f3f5;
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  position: relative;
`;

export const BotSearchInput = styled.input`
  /* padding: 10px; */
  position: relative;
  width:40%
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  padding: 12px;
  border: 1px solid #dee2e6;
  outline: none;
  font-size: 1rem;
`;

export const BotSearchInputDiv = styled.div`
  width: 100%;
  margin: 0;
  padding: 12px;
  padding-right: 30%;
  display: flex;
  box-sizing: border-box;
`;

export const BotSearchButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #339af0;
  border: 0;
  height: 26px;
  width: 70px;

  &:hover {
    background: #4dabf7;
  }
  &:active {
    background: #1971c2;
  }
  cursor: pointer;
  color: white;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
`;

export const BotSearchSelect = styled.select`
  border-radius: 4px;
  height: 26px;
  border: 1px solid #dee2e6;
  width: 90px;

  &::-ms-expand {
    background: red;
  }
`;
export const BotSearchSelectOption = styled.option`
  border: 2px solid red;
`;

export const BotSeachBlock = styled.div`
  border: 1px solid #f1f3f5;
  display: flex;
  height: 3rem;
`;
