import React from "react";
import * as Styles from "./styles";
import { useDispatch } from "react-redux";
import { MAIN_POST } from "../../reducers/post";
import axios from "axios";

const BotHeader = () => {
  const dispatch = useDispatch();

  const onClick = async () => {
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    dispatch({
      type: MAIN_POST,
      data: result.data
    });
  };

  return (
    <Styles.BotSeachBlock>
      <Styles.BotSearchLabelDiv>
        <span>검색</span>
      </Styles.BotSearchLabelDiv>
      <Styles.BotSearchInputDiv>
        <Styles.BotSearchSelect>
          <Styles.BotSearchSelectOption>ㄴㅇㅁ</Styles.BotSearchSelectOption>
          <Styles.BotSearchSelectOption>안녀녕</Styles.BotSearchSelectOption>
          <Styles.BotSearchSelectOption>
            안녀녕ㄴㅇㅁ
          </Styles.BotSearchSelectOption>
        </Styles.BotSearchSelect>
        <Styles.BotSearchInput />
        <Styles.BotSearchButton onClick={onClick}>검색</Styles.BotSearchButton>
      </Styles.BotSearchInputDiv>
    </Styles.BotSeachBlock>
  );
};

export default BotHeader;
