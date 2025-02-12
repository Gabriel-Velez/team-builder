import React from "react";

export default function Member(props) {
  const { details } = props;

  if (!details) {
    return <h3>Getting Team Members</h3>;
  }

  return (
    <div className='member'>
      <h2>{details.name}</h2>
      <p>Email: {details.email}</p>
      <p>Role: {details.role}</p>
    </div>
  );
}
