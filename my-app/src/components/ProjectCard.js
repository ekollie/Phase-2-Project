import React, { useState } from "react";

function ProjectCard({ name, id, handleDelete, handleSelect }) {
  const handleRoute = (e) => {
    // handler that checks for a click - nav link
  };

  return (
    <div>
      <p>{name}</p>
      <button value={id} id="delete" onClick={handleDelete}>
        Delete Project
      </button>
      <button value={id} onClick={handleSelect}>
        Stats
      </button>
    </div>
  );
}

export default ProjectCard;
