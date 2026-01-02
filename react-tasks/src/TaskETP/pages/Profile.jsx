import React from "react";
import { useParams } from "react-router-dom";

function Profile() {
  const { name } = useParams();

  return (
    <div>
      <h2> Student Profile</h2>
      <p>Name: {name}</p>
    </div>
  );
}

export default Profile;