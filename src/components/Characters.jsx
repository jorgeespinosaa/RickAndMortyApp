function Characters({ characters = [] }) {
  return (
    <div className="row">
      {characters.map((item, index) => (
        <div key={index} className="col mt-3">
          <div className="card" style={{ minWidth: "200px" }}>
            <img src={item.image} alt="" />
            <div>
              <h3>{item.name}</h3>
              <hr />
              <p>{item.species}</p>
              <p>{item.location.name}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Characters;
