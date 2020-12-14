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
      time: "Today at 4:32PM",
      avatar: Faker.image.image()
    },
    {
      author: "Errika",
      text: "I`m loving it!",
      time: "Today at 5:00PM",
      avatar: Faker.image.image()
    },
    {
      author: "Dan",
      text: "So so...",
      time: "Today at 6:00PM",
      avatar: Faker.image.image()
    }
  ];
  const comments = [];

  for (let i = 0, len = data.length; i < len; i++) {
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

  return (
    <div className="ui container comments">
      {/* Reusable Approval Card! */}
      <ApprovalCard>
        <h4>Warning!</h4>
        <div>Are you sure you want to do this?</div>
      </ApprovalCard>

      {/* For loop Approval Cards with Comment Components within */}
      {comments}
    </div>
  );
};

ReactDOM.render(<Component />, document.getElementById("root"));
