import React from "react";
import { Link } from "react-router-dom";

function Students() {
  return (
    <div>
      <h2>👩‍🎓 Students Page</h2>

      <ul>
        <li><Link to="/profile/Aman">Aman</Link></li>
        <li><Link to="/profile/Riya">Riya</Link></li>
        <li><Link to="/profile/Dolly">Dolly</Link></li>
      </ul>
    </div>
  );
}

export default Students;