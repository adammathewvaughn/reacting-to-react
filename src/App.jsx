import React from "react";
import Greeter from "./components/Greeter.jsx";

let App = () => {
  //another method for passing props
  let FirstName = "Adam";
  let LastName = "Vaughn";

  return (
    <>
      <Greeter
        phrase={"Welcome Home"}
        FirstName={FirstName}
        LastName={LastName}
      />
      <Greeter
        phrase={"Welcome Home"}
        FirstName={FirstName}
        LastName={LastName}
      />
      <Greeter
        phrase={"Welcome Home"}
        FirstName={FirstName}
        LastName={LastName}
      />
    </>
  );

  //this is how to pass props (creating them inline)
  //    return(<Doorgreeter name="Tommy the Cat" phrase="Say, baby..." />)
};

export default App;
