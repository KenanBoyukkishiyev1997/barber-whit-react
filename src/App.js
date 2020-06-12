import React from "react";
import Header from "./component/header";
import Main from "./component/main";
import Footer from "./component/footer";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
