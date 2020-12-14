import React from "react";
import ReactDOM from "react-dom";
import Faker from "faker";

import Comment from "./Comment";
import ApprovalCard from "./ApprovalCard";

// Refactor into a JSON object and loop through it, to avoit duplicating Component
// This still has some duplicated code all around, lets make an API and loop through
const Component = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <Comment
          author="Sam"
          text="What a nice blog!"
          time="5:00PM"
          avatar={Faker.image.image()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <Comment
          author="Errika"
          text="I`m loving it!"
          time="4:32PM"
          avatar={Faker.image.image()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <Comment
          author="Dan"
          text="So so..."
          time="6:00PM"
          avatar={Faker.image.image()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<Component />, document.getElementById("root"));
