import React from "react";

//funkcja jakie wartości chce otrzymać moj obiekt
function HeroCard({ isDark, name, age, image, weapons }) {
  //zwrot
  return (
    <article className={isDark ? "hero-dark" : "hero-light"}>
      <h3>{name}</h3>
      <p>
        {name} is {age} years old
      </p>
      <img src={image} alt="" />
      <p>
        Hero weapons{weapons.map((weapon, index) => (
          <span className="weapon" key={index}>|{weapon}</span>
        ))}
      </p>
    </article>
  );
}
export default HeroCard;
