import React, { useState } from "react";

const Tickets = () => {
  const [tickets, setTickets] = useState(["s", "d", 3, 'tyt']);
  const uniqueCategories = [
    ...new Set(tickets?.map(( category ) => category)),
  ];

  const chunk = (arr, size) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
    );
  };
  console.log(chunk([1,2,3,4,5], 2));

  return (
    <>
    <div style={{display: 'flex'}}>
      {tickets && uniqueCategories.map((uniqueCategory, categoryIndex) => (
        <div key={categoryIndex}>
        <h3>{uniqueCategory}</h3></div>
      ))}
    </div>
    </>
  );
};

export default Tickets;
