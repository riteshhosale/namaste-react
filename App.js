import React from "react";
import { createRoot } from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div>
        <img
          className="logo"
          src="https://t4.ftcdn.net/jpg/01/42/48/37/360_F_142483738_Gn4hlsoMpZ5CC0KqJ0gahTklyHyeu1h1.jpg"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact</li>
          <li>Help</li>
        </ul>
      </div>
    </div>
  );
};

const ResturantCard = () => {
  return (
    <div className="resturant-card">
      <img
        className="res-logo"
        alt="res-logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLJ2J1aC4U1wzKSeEJfihOaly5m1I-Hr2gUw&s"
      />
      <h3 className="h34">Ritesh food</h3>
      <h4 className="h34">Punjabi, North Indian</h4>
      <h4 className="h34">45 mins</h4>
      <h4 className="h34">4.2 stars</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="Search">Search</div>
      <div className="Resturant-container">
        <ResturantCard />
        <ResturantCard />
        <ResturantCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));

root.render(<AppLayout />);
