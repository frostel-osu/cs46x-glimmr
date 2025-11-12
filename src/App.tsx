import React from "react";

import Home from "./pages/Home.tsx";
import Landing from "./pages/Landing.tsx";

import { useSession } from "./api/useSession"; 
import assert from "./utils/assert.tsx";

type PageEnum = "Home" | "Landing";

const App = () => {
  const [page, setPage] = React.useState<PageEnum>("Landing");
  
  // Supabase session tracking
  const { session, loading } = useSession();

   React.useEffect(() => {
    if (session && page !== "Home") {
      // If users logged in, go to Home
      setPage("Home");          
    } else if (!session && page !== "Landing") {
      // if users logged out, go to Landing
      setPage("Landing");        
    }
  }, [session, page]);

  if (loading) return <p>Loading...</p>;

  switch (page) {
    case "Home":
      return <Home setPageLanding={() => setPage("Landing")} />;
    case "Landing":
      return <Landing setPageHome={() => setPage("Home")} />;
    default:
      return assert.never(page);
  }
};

export default App;
