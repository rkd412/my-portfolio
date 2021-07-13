import "./NavBar.css";

const NavBar = () => {

  
  return (
    <nav className="nav-bar">
      <ul>
        <li className="nav-item">About</li>
        <li className="nav-item">Portfolio</li>
        <li className="nav-item">Contact</li>
        <li className="nav-mode-toggle">day/night</li>
      </ul>
    </nav>
  );
};

export default NavBar;
