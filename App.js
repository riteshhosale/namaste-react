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

const ResturantCard = ({ resName, cuising, time, rating, image }) => {
  return (
    <div className="resturant-card">
      <img className="res-logo" alt="res-logo" src={image} />
      <h3 className="h34">{resName}</h3>
      <h4 className="h34">{cuising}</h4>
      <h4 className="h34">{time}</h4>
      <h4 className="h34">{rating}</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="Search">Search</div>
      <div className="Resturant-container">
        <ResturantCard
          resName="Ritesh food"
          cuising="Punjabi, North Indian"
          time="45 mins"
          rating="4.2 stars"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLJ2J1aC4U1wzKSeEJfihOaly5m1I-Hr2gUw&s"
        />
        <ResturantCard
          resName="Another food"
          cuising="Italian, east indian"
          time="30 mins"
          rating="4.5 stars"
          image="https://t4.ftcdn.net/jpg/03/98/41/27/360_F_398412764_DNjsCMkuxaA3GzownXKrvOM1xDd1TcaX.jpg"
        />
        <ResturantCard
          resName="Yummy Treats"
          cuising="Desserts, wast indian"
          time="25 mins"
          rating="4.0 stars"
          image="https://www.shutterstock.com/image-photo/dishes-indian-cuisine-bowls-plates-600w-2449213733.jpg"
        />
        <ResturantCard
          resName="Spice Hub"
          cuising="spice, south indian"
          time="40 mins"
          rating="4.3 stars"
          image="https://mir-s3-cdn-cf.behance.net/projects/404/fd020b202378423.Y3JvcCwxODc1LDE0NjcsMTYyLDA.jpg"
        />
        <ResturantCard
          resName="Green Delight"
          cuising="Vegan, Healthy Food"
          time="35 mins"
          rating="4.6 stars"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ8Nw_IHsnqN1I0hju49GzBaeP0MLIlLnxgQ&s"
        />
        <ResturantCard
          resName="Burger Barn"
          cuising="Burgers, Fast Food"
          time="20 mins"
          rating="4.1 stars"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH_hHx1QivmeTLp4H2cmgkSZ2o_j8rkj-O3Q&s"
        />
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

