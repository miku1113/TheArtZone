import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import './css/module.Header.css'
import yoga1 from '../assets/yoga1.jpg'
import Slids from "./Slids";

const Header = ({setSelectedTab ,selectedTab}) => {
  return (
    <div>
      <header className="header header-absolute header-z-index">
        <SearchBar />
        <NavBar setSelectedTab={setSelectedTab} selectedTab={selectedTab} />
      </header>
    </div>
  );
};

export default Header;
