import React from "react";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slide from "../../components/slider/Slide";
import CatCard from "../../components/catCard/CatCard";
import { cards } from "../../data";
const Home = () => {
  return (
    <div>
      <Featured />
      <TrustedBy />
      <Slide arrowsScroll={5} slidesToShow={5}>
      {cards.map((card)=>{
            return(<CatCard key={card.id} item={card}/>)
            })}
      </Slide>
    </div>
  );
};

export default Home;
