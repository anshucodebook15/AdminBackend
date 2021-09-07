import React from "react";

export const Textfield = (props) => {
  return (
    <>
      <div className="input-group mb-3">
        <input
          type={props.type}
          className={`form-control ${props.error && "is-invalid"}`}
          placeholder={props.placeholder}
          name={props.name}
          value={props.value ? props.value : null}
          onChange={props.handler}
        />
        <div className="input-group-append">
          <div className="input-group-text">
            <span className={props.icon ? `fas fa-user ${props.icon}` : ""} />
          </div>
        </div>
        <span class="error invalid-feedback">{props.error}</span>
      </div>
    </>
  );
};
