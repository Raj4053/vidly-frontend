import React from "react";

const Input = ({ type, name, label, value, error, onChange }) => {
  return (
    <div className="form-group col-4">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        id={name}
        className="form-control"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
