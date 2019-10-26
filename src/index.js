import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import Faker from "faker";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>This is an ApprovalCard! </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timePosted="Today at 15:00PM"
          comment="Hello, I am a comment!"
          image={Faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
