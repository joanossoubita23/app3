

const Character = ({ name, img_url, origin }) => {
  console.log(name);
  return (
    <div className='character-container'>
      <h2>{name}</h2>
      <img src={img_url} alt={name} className="img" />
      <h3>Origin: {origin.name}</h3>
    </div>
  );
}

export default Character;
