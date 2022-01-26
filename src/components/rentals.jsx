import { useState, useEffect } from "react";

const Rentals = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/").then((result) => {
      result.json().then((data) => {
        setData(data);
      });
    });
  }, []);
  const { name } = data.results[0];
  return `first name is ${name.first} and last name is ${name.last}`;
};

export default Rentals;
