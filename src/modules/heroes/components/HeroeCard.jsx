import  { Link } from "react-router-dom";

export const HeroeCard = ({
  id,
  superhero,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const heroImageUrn = `/heroes/${id}.jpg`;

  return (
    <div className="col animate__animated animate__fadeIn">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4">
            <img className="card-img" src={heroImageUrn} alt={superhero} />
          </div>
          <div className="col-8">
            <div className="card-body">
              <div className="card-title">{superhero}</div>

              <p className="card-text">{alter_ego}</p>

              {alter_ego !== characters && <p>{characters}</p>}

              <p className="card-text">
                <small className="text-muted">{first_appearance}</small>
              </p>

              <Link to={`/hero/${id}`}>More...</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
