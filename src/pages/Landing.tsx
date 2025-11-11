import Auth from "../components/Auth.tsx";

const Landing = ({ setPageHome }) => (
  <>
    <header>
      <h1>Glimmr</h1>
    </header>
    <main>
      <Auth setPageHome={setPageHome} />
    </main>
  </>
);

export default Landing;
