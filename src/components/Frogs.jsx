import React from "react";

export default function Frogs({ title, imageUrl, description }) {
  return (
    <div className="Frogs">
      <h2>{title}</h2>
      <img src={imageUrl} alt={title} title={title} />
      <p>{description}</p>
    </div>
  );
}
