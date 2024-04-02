import React from "react";

export default function Spinner() {
  return (
    <div className="text-center my-4">
      <div className="spinner-grow" role="status" />
      <h5>Loading Data Please wait...</h5>
    </div>
  );
}
