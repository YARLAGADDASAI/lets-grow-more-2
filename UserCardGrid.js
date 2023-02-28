import React from 'react';
import UserCard from './UserCard';

function UserCardGrid(props) {
  return (
    <div className="user-card-grid">
      {props.users.map(user => (
        <UserCard
          key={user.id}
          first_name={user.first_name}
          last_name={user.last_name}
          email={user.email}
          avatar={user.avatar}
        />
      ))}
    </div>
  );
}

export default UserCardGrid;
