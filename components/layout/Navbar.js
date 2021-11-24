function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__logo">Games.</div>
        <div className="navbar__search">
          <input type="text" />
        </div>
        <ul className="navbar__list">
          <li className="navbar__list-item">1</li>
          <li className="navbar__list-item">2</li>
          <li className="navbar__list-item">3</li>
          <li className="navbar__list-item">4</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
