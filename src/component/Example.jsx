import React, { useState } from "react";

const Example = () => {
  // besicly we are creating a counter app
//    yahatak samja kay are thoda vela ni karuya te plug kadaya aaley mecanic ya room mdhe srv garda thike hai me left karu kay toha kar  ?
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Incress</button>
    </div>
  );
};
export default Example;
