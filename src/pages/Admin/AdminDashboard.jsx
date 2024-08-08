import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { DollarSign, ShoppingBag, User, Users } from 'lucide-react'
const AdminDashboard = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(' http://localhost:8080/api/contact/getContactinfo');
          const jsonData = await response.json();
          setData(jsonData);
        } catch (error) {
          setError(error);
        } finally {
          setIsLoading(false);
        }
      };
  
      fetchData();
    }, []);
  
    if (isLoading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error.message}</div>;
    }
  
    return (
        <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>EMAIL</th>
            <th>Name</th>
            <th>EventName</th>
            <th>EventDetail</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.email}</td>
              <td>{item.username}</td>
              <td>{item.eventName}</td>
              <td>{item.eventDetails}</td>
            </tr>
          ))}
        </tbody>
      </table>
  
    )
}

export default AdminDashboard