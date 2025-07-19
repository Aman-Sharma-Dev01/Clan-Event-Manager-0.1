import React from 'react'
import "./WildCatsPage.css"

const WildCats = [
  {
    name: "Wild Cats",
  }
];
const WildcatsPage = () => {
  return (
    <div>
    {WildCats.map((props) => (
          <h1>{props.name}</h1>
        ))}
        </div>
  )
}

export default WildcatsPage;