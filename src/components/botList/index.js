import React from "react";

const BotList = ({ mainPost }) => {
  return (
    <ul>
      {mainPost &&
        mainPost.map((post, i) => {
          return (
            <li key={i}>
              <div>{post.title}</div>
              <div>{post.id}</div>
              <div>{post.userId}</div>
            </li>
          );
        })}
    </ul>
  );
};

export default BotList;
