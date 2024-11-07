import React from "react";
import HeroCard from "./HeroCard";

function HeroGallery({ heroes }) {
  return (
    <section className="grid-container">
      {heroes.map((hero) => (
        <HeroCard
          key={hero.id}
          name={hero.name}
          image={hero.image}
          weapons={hero.weapons}
        />
      ))}
    </section>
  );
}

export default HeroGallery;
