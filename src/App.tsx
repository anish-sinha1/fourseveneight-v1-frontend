import React from "react";
import RegistrationForm from "./RegistrationForm/RegistrationForm";
import LoginForm from "./LoginForm/LoginForm";
import Navigation from "./Navigation/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <RegistrationForm></RegistrationForm>
    </div>
  );
}

export default App;
