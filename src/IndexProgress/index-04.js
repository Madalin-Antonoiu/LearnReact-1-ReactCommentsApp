import React from "react";
import ReactDOM from "react-dom";
import Faker from "faker";

import Comment from "./Comment";
import ApprovalCard from "./ApprovalCard";

// Refactored, much cleaner
const Component = () => {
  const data = [
    {
      author: "Sam",
      text: "What a nice blog!",
      time: "5:00PM",
      avatar: Faker.image.image()
    },
    {
      author: "Errika",
      text: "I`m loving it!",
      time: "4:32PM",
      avatar: Faker.image.image()
    },
    {
      author: "Dan",
      text: "So so...",
      time: "6:00PM",
      avatar: Faker.image.image()
    }
  ];
  const comments = [];

  for (let i = 0; i < data.length; i++) {
    comments.push(
      <ApprovalCard>
        <Comment
          author={data[i].author}
          text={data[i].text}
          time={data[i].time}
          avatar={data[i].avatar}
        />
      </ApprovalCard>
    );
  }

  return <div className="ui container comments">{comments}</div>;
};

ReactDOM.render(<Component />, document.getElementById("root"));
