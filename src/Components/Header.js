// Title component for display logo
const Title = () => (
    <div className="logo-heading">
      {/* <img className="logo" src={FoodFireLogo} alt="Food Fire Logo" /> */}
      Food Cart
    </div>
  );

const Header = () => {
    return (
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>Offer</li>
             <li>About</li>
              <li>Contact</li>
            <li><i className="fa-solid fa-cart-shopping"></i></li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;