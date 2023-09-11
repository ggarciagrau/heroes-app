import { useMemo } from "react";
import { HeroeCard } from "./HeroeCard";
import { getHeroesByPublisher } from "../helpers";

export const HeroesList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), []);

  return (
    <div className="row row-cols-1 row-cols-md-3 g-3">
      {heroes.map((hero) => (
        <HeroeCard key={hero.id} {...hero} />
      ))}
    </div>
  );
};
