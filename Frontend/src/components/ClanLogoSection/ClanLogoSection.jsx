import "./ClanLogoSection.css";
import WildCatLogo from "../../assets/WildCat.jpg"
import ForestRhinoLogo from "../../assets/Rhino.jpg"
import AirFalconLogo from "../../assets/AirFal.jpg"
import WaterSharksLogo from "../../assets/WaterShark.jpg"
import { Link } from "react-router-dom";
const clans = [
  {
    name: "Wild Cats",
    description: "Rise from the ashes",
    img: WildCatLogo,
    btn: "/wild-cats-page"
  },
  {
    name: "Forest Rhinos",
    description: "Strength and wisdom",
    img: ForestRhinoLogo,
    btn: "/forest-rhinos-page"
  },
  {
    name: "Air Falcons",
    description: "Unity and loyalty",
    img: AirFalconLogo,
    btn: "/air-falcons-page"
  },
  {
    name: "Water Sharks",
    description: "Vision and freedom",
    img: WaterSharksLogo,
    btn: "/water-sharks-page"
  },
];

const ClanLogoSection = () => {
  return (
    <section className="clans-section">
      <h2>Know Your Clan</h2>
      <div className="clan-grid">
        {clans.map((clan) => (
          <div key={clan.name} className="clan-card">
            
              <img src={clan.img} alt="" className="clan-icon" />
            <h3>{clan.name}</h3>
            <p className="clan-desc">{clan.description}</p>
            <div className="clan-members">
              <Link className="know-clan" to={clan.btn} >Know More</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClanLogoSection;
