import React from "react";
import { signOut } from "../api/auth";

interface HomeProps {
  setPageLanding: () => void;
}

const Home: React.FC<HomeProps> = ({ setPageLanding }) => {
  const handleClickSignOut = async () => {
    await signOut();
    setPageLanding();
  };

  return (
    <>
      <header>
        <h1>Glimmr</h1>
      </header>
      <main>
        <button onClick={handleClickSignOut} type="button">
          Sign Out
        </button>
      </main>
    </>
  );
};

export default Home;
