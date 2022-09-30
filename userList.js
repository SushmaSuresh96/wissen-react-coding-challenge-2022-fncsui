// import { Input } from 'antd';
import React, { useState, useSelector } from 'react';
import './form.css';
import axios from 'axios';
const UserList = ({ usersList }) => {
  const [email, setEmail] = useState('');

  return (
    <div className="formWrapper">
      {usersList.map((user) => {
        return (
          <div>
            <div>
              <img src={user.avatar} />
            </div>
            <div>{user.first_name}</div>
            <div>{user.last_name}</div>
            {/* <div>{user.email_name}</div> */}
          </div>
        );
      })}
    </div>
  );
};

export default UserList;
