import React from 'react'


const WaterShark = [
  {
    name: "Water Sharks",
  }
];
const WaterSharksPage = () => {
  return (
    <div>
    {WaterShark.map((props) => (
          <h1>{props.name}</h1>
        ))}
        </div>
  )
}

export default WaterSharksPage;