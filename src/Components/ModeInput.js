import React from "react";

export default function ModeInput({ onModeChange }) {
  return (
    <div className="form-check form-switch my-2 float-end">
      <input
        className="form-check-input"
        type="checkbox"
        role="switch"
        id="flexSwitchCheckDefault"
        onChange={onModeChange}
      />
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
        Toggle Dark/Light Mode
      </label>
    </div>
  );
}
