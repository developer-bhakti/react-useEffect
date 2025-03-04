import { useEffect } from "react";
import "./App.css";
import Example from "./component/Example";

function App() {
  // first thing to ye hai ki apne ka useeffect ki need kay hai
  // effect side effet manage karne ke liye use karte apan

  // no i will take one exmple fir samjega tujhe o

  // syntact dekh

  // useeffect take two arguments
  // first is callbackfuntion second is
  // dependancy array

  //  in the initial render it will rendewr two times
  // it use cases are Data fetching , DOM manipulation etc
  // 
  useEffect(() => {
    console.log("component mounted");
  }, []);

  return (
    <>
     <Example />
    </>
  );
}

export default App;
