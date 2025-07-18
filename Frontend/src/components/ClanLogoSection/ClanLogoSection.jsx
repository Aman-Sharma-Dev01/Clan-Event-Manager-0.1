import "./ClanLogoSection.css";
import WildCatLogo from "../../assets/WildCat.jpg"
import ForestRhinoLogo from "../../assets/Rhino.jpg"
import AirFalconLogo from "../../assets/AirFal.jpg"
import WaterSharksLogo from "../../assets/WaterShark.jpg"
const clans = [
  {
    name: "Wild Cats",
    description: "Rise from the ashes",
    members: 45,
    img: WildCatLogo,
  },
  {
    name: "Forest Rhinos",
    description: "Strength and wisdom",
    members: 52,
    img: ForestRhinoLogo,
  },
  {
    name: "Air Falcons",
    description: "Unity and loyalty",
    members: 38,
    img: AirFalconLogo,
  },
  {
    name: "Water Sharks",
    description: "Vision and freedom",
    members: 41,
    img: WaterSharksLogo,
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
              <span>{clan.members} members</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClanLogoSection;
