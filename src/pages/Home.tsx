const Home = ({ setPageLanding }) => {
  const handleClickSignOut = () => setPageLanding();

  return (
    <>
      <header>
        <h1>Glimmr</h1>
      </header>
      <main>
        <button onClick={handleClickSignOut}>Sign Out</button>
      </main>
    </>
  );
};

export default Home;
