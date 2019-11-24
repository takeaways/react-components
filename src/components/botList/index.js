import React, { memo } from "react";
import { useSelector } from "react-redux";
import * as Styles from "./style";
import { cursor } from "sisteransi";

const BotListItem = memo(({ post, children }) => {
  return (
    <div
      style={{
        float: "left",
        width: "18%",
        height: "180px",
        margin: "1%",
        borderRadius: "5px",
        border: "1px soild red",
        background: "#dee2e6"
      }}
    >
      {post ? (
        <>
          <div>{post.title}</div>
          <div>{post.id}</div>
          <div>{post.userId}</div>
        </>
      ) : (
        <div
          style={{
            padding: 0,
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: "3rem",
            cursor: "pointer"
          }}
        >
          <span>+</span>
        </div>
      )}
    </div>
  );
});

const BotList = () => {
  const { mainPost } = useSelector(state => state.post);
  const postRows = [];
  return (
    <Styles.BotListBlock>
      <BotListItem />
      {mainPost &&
        mainPost.map((post, i) => {
          return (
            <BotListItem post={post} key={i}>
              <div>{post.title}</div>
              <div>{post.id}</div>
              <div>{post.userId}</div>
            </BotListItem>
          );
        })}
    </Styles.BotListBlock>
  );
};

export default BotList;
