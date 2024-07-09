function ListGroup() {
  const cities = ["Colombo", "Negombo", "Galle", "Kandy", "Jaffna"];

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {cities.map(city => (
          <li className="list-group-item" key={city}>{city}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
