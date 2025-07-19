import React from 'react'

const AirFalcon = [
  {
    name: "Air Falcon",
  }
];
const AirFalconsPage = () => {
  return (
    <div>
    {AirFalcon.map((props) => (
          <h1>{props.name}</h1>
        ))}
        </div>
  )
}

export default AirFalconsPage;