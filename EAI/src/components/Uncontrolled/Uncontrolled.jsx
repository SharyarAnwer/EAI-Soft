import React, { useRef , useState } from "react";
import Portal from "../Portal/portal";



export default function Uncontrolled() {
  const one = useRef(null);
  const two = useRef(null);

  const submitForm = (e) => {
    e.preventDefault();

    console.log(one.current.value);
    console.log(two.current.value);
  };

  const [showPortal, setShowPortal] = useState(false);

  return (
    <div>
      {/* <form onSubmit={submitForm}>
        <input ref={one} type="text" />
        <input ref={two} type="text" />

        <button type="submit">Submit</button>
      </form> */}
      <button onClick={() => {setShowPortal(!showPortal)}}>OPEN PORTAL</button>

      {showPortal && (
        <div>
          <Portal />
        </div>
      )}
    </div>
  );
}
