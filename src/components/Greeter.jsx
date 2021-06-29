import React from "react";

let Greeter = (props) => {
  return (
    <>
      <h2>{props.phrase}, {props.FirstName} {props.LastName}!</h2>
    </>
  );
};

//destructuring the props

// let Doorgreeter = ({ name, phrase }) => {
//   return (
//     <>
//       <h2>Welcome to the jungle, baby!</h2>
//       <h3>Name: {name}</h3>
//       <h3>Phrase: {phrase}</h3>
//     </>
//   );
// };

export default Greeter;
