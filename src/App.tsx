import { useState } from "react";

import Home from "./pages/Home.tsx";
import Landing from "./pages/Landing.tsx";

const App = () => {
  const Pages = {
    Home: "Home",
    Landing: "Landing"
  };

  const [page, setPage] = useState(Pages.Landing);

  const setPageHome = () => setPage(Pages.Home);
  const setPageLanding = () => setPage(Pages.Landing);

  switch (page) {
    case "Home":
      return <Home setPageLanding={setPageLanding} />;
    case "Landing":
      return <Landing setPageHome={setPageHome} />;
  }
};

export default App;
