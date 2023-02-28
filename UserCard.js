import React from 'react';

function UserCard(props) {
  return (
    <div className="user-card">
      <img src={props.avatar} alt={props.first_name} />
      <div className="user-details">
        <div className="user-name">{`${props.first_name} ${props.last_name}`}</div>
        <div className="user-email">{props.email}</div>
      </div>
    </div>
  );
}

export default UserCard;
