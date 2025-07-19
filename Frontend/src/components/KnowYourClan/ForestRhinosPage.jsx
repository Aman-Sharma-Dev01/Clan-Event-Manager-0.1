import React from 'react'


const ForestRhinos = [
  {
    name: "Forent Rhinos",
  }
];
const ForestRhinosPage = () => {
  return (
    <div>
    {ForestRhinos.map((props) => (
          <h1>{props.name}</h1>
        ))}
        </div>
  )
}

export default ForestRhinosPage;