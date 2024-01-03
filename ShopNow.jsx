import React, { useEffect, useState } from "react";
import getShopNowData from '../components/services/useShopNow' ;

const ShopNow = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await getShopNowData();
        setUsers(userData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  console.log(users);

  return (
    <div className="m-5 d-flex justify-content-between">
      {users.map((user) => (
        <div className="use-card border hover-shadow p-2" key={user.id}>
          <div>
            {user.first_name} {user.last_name}
          </div>
          <img src={user.avatar} alt={`${user.first_name}'s avatar`} />
          <div>
            {user.email}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShopNow;
