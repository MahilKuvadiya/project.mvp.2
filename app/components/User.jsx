import axios from 'axios';
import { useSession } from 'next-auth/react';
import { toast } from 'react-hot-toast';
import { useState, useEffect } from "react";

export default function User() {
  const [user, setUser] = useState([]);
  const { data: session } = useSession();

  useEffect(() => {
    async function fetchData() {
      try {
        const userEmail = session?.user?.email
        // console.log(userEmail);

        const data = {
          email: userEmail,
        };

        // console.log(data);

        const response = await axios.post('/api/getUserInfo', data);
        setUser(response.data);
        console.log("request sent");
        toast.success("Data fetched.");
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [session]);

  JSON.stringify(user);
  const gamingName = user.gamingName
  return (
    <h6>Hey {gamingName}</h6>
  )
}
