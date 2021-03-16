import React from "react";
import Contact from "./components/Contact.jsx";
import MainPage from "./components/MainPage.jsx";
import SiteBar from "./components/Navbar.jsx";
import Store from "./components/Store.jsx";
function App() {
  return (
    <div>
      <SiteBar />
      <MainPage />
      <Store />
      <Contact />
    </div>
  );
}

export default App;
