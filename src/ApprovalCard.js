import React from "react";

const ApprovalCard = props => {
  return (
    <div className="ui card">
      <div className="content">
        {props.children}
        <div className="extra content">
          Extra test
          <div className="ui two buttons">
            <div className="ui basic green button">Approve</div>
            <div className="ui basic red button">Reject</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;
