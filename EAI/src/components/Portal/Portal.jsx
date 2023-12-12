import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

import ReactDOM from "react-dom";

export default function Portal({showPortal}) {
  const [open, setOpen] = useState(true);

  const cancelButtonRef = useRef(null);

  return ReactDOM.createPortal(
    
    <div>
      HELLO
    </div> ,
    document.getElementById("#portal-root")
  );
}
