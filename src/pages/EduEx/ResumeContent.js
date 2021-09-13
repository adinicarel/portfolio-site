import React from "react";

function ResumeContent(props) {
  return (
    <div className="resume-item">
      <h4 className={props.title ? "resume-title" : "resume-no-title"}>
        {props.title}
      </h4>
      <span className="date">
        <em>{props.date}</em>
      </span>
      <h5 className={props.title ? "resume-subtitle" : "resume-no-title"}>
        {props.subtitle}
      </h5>
      <ul>
        {props.content.map((value, index) => (
          <li key={index}> ‣ {value}</li>
        ))}
      </ul>
    </div>
  );
}

export default ResumeContent;
