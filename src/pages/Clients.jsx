import "../styles/Clients.css";

export default function Clients() {
  return (
    <>
      <div className="clientsContainer">
        <header>
          <h1>Our Clients </h1>
        </header>
        <section>
          {brands.map((e, index) => (
            <img
              src={e.brandImage}
              alt=""
              key={index}
              width="100px"
              height="100px"
            />
          ))}
        </section>
      </div>
    </>
  );
}
