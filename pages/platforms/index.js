function Platforms({ data }) {
  console.log(data);
  return (
    <section>
      <div className="container">
        <h1>Platforms</h1>
      </div>
    </section>
  );
}

export default Platforms;

export async function getServerSideProps() {
  const res = await fetch(
    `https://api.rawg.io/api/platforms?key=${process.env.API_KEY}`,
    {
      method: "GET",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
    }
  );

  const data = await res.json();
  return { props: { data } };
}
