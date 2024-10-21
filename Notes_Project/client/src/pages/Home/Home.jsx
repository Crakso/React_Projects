import React, { useState } from "react";
import NoteCards from "../../components/Cards/NoteCards";
import { MdAdd } from "react-icons/md";
import Modal from "react-modal";
import AddNotes from "../../components/AddNotes/AddNotes";

function Home() {
  const [showAddBtn, setShowAddBtn] = useState({
    isShown: false,
    type: "add",
    data: null,
  });

  return (
    <>
      <div className="container mx-auto my-12 flex items-center justify-center">
        <div className="grid grid-cols-1 w-11/12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <NoteCards
            title={"Wake Up 6 A.M."}
            date={"3 July 2024"}
            content={"Want to wake up early for some reason"}
            tags={"Important meeting."}
            HandleDelete={() => {
              alert("Note Deleted!");
            }}
            HandleEdit={() => {
              alert("Note Edited.");
            }}
            isPinned={true}
          />

          <NoteCards
            title={"Wake Up 6 A.M."}
            date={"3 July 2024"}
            content={"Want to wake up early for some reason"}
            tags={"Important meeting."}
            HandleDelete={() => {
              alert("Note Deleted!");
            }}
            HandleEdit={() => {
              alert("Note Edited.");
            }}
            isPinned={true}
          />
          <NoteCards
            title={"Wake Up 6 A.M."}
            date={"3 July 2024"}
            content={"Want to wake up early for some reason"}
            tags={"Important meeting."}
            HandleDelete={() => {
              alert("Note Deleted!");
            }}
            HandleEdit={() => {
              alert("Note Edited.");
            }}
            isPinned={true}
          />
          <NoteCards
            title={"Wake Up 6 A.M."}
            date={"3 July 2024"}
            content={"Want to wake up early for some reason"}
            tags={"Important meeting."}
            HandleDelete={() => {
              alert("Note Deleted!");
            }}
            HandleEdit={() => {
              alert("Note Edited.");
            }}
            isPinned={true}
          />
          <NoteCards
            title={"Wake Up 6 A.M."}
            date={"3 July 2024"}
            content={"Want to wake up early for some reason"}
            tags={"Important meeting."}
            HandleDelete={() => {
              alert("Note Deleted!");
            }}
            HandleEdit={() => {
              alert("Note Edited.");
            }}
            isPinned={true}
          />
          <NoteCards
            title={"Wake Up 6 A.M."}
            date={"3 July 2024"}
            content={"Want to wake up early for some reason"}
            tags={"Important meeting."}
            HandleDelete={() => {
              alert("Note Deleted!");
            }}
            HandleEdit={() => {
              alert("Note Edited.");
            }}
            isPinned={true}
          />
          <NoteCards
            title={"Wake Up 6 A.M."}
            date={"3 July 2024"}
            content={"Want to wake up early for some reason"}
            tags={"Important meeting."}
            HandleDelete={() => {
              alert("Note Deleted!");
            }}
            HandleEdit={() => {
              alert("Note Edited.");
            }}
            isPinned={true}
          />
        </div>
      </div>
      <button
        className="bg-green-400 w-14 h-14 rounded-full flex justify-center items-center fixed right-10 bottom-10"
        onClick={() => {
          setShowAddBtn({ isShown: true, type: "add", data: null });
        }}
      >
        <MdAdd className="text-white" />
      </button>

      <Modal
        isOpen={showAddBtn.isShown}
        onRequestClose={() => {}}
        ariaHideApp={false}
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0.2)",
          },
        }}
        contentLabel=""
        className="w-[40%] max-md:w-[60%] max-sm:w-[70%] max-h-3/4 bg-white rounded-lg 
        mx-auto mt-14 p-5 overflow-scroll"
      >
        <AddNotes onClose={() => setShowAddBtn({ isShown: false })} />
      </Modal>
    </>
  );
}
export default Home;
