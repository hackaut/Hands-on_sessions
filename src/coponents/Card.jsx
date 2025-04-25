const Card = ({ name, dept, gender }) => {
  return (
    <div className="bg-white text-black rounded-xl shadow-lg p-6 m-4 w-80">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p>{dept}</p>
      <p>{gender}</p>
    </div>
  );
};

export default Card;
