import React, { useState } from "react";
import "./settings.css";
import Modal from "@/components/modal/modal";
// import List from '@/components/virtual_list/index'
import List from '@/components/virtual_list_/index'

function Settings() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    // <div className="App">
    //   {/* <h1>Hey, click on the button to open the modal.</h1>
    //   <button
    //     className="openModalBtn"
    //     onClick={() => {
    //       setModalOpen(true);
    //     }}
    //   >
    //     Open
    //   </button>

    //   {modalOpen && <Modal setOpenModal={setModalOpen} />} */}


    // </div>

<List/>

  );
}

export default Settings;
