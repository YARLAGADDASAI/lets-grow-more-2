import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import UserCardGrid from './UserCardGrid';

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getUsers = async () => {
      setIsLoading(true);
      const response = await fetch('https://reqres.in/api/users?page=1');
      const data = await response.json();
      setUsers(data.data);
      setIsLoading(false);
    };
    getUsers();
  }, []);

  return (
    <div className="app">
      <Navbar />
      {isLoading ? (
        <div className="loader">Loading...</div>
      ) : (
        <UserCardGrid users
