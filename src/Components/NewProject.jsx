import React from "react";
import Input from "./Input";
import { useRef } from "react";
import Modal from "./Modal";

function NewProject({ onAdd, onCancel}) {
  const modal = useRef();
  const tittle = useRef();
  const discription = useRef();
  const dueDate = useRef();
  const handleSave = () => {
    const enteredTitle = tittle.current.value;
    const enteredDiscription = discription.current.value;
    const enteredDueDate = dueDate.current.value;
    // console.log(project);
    if (
      enteredTitle.trim()=== '' ||
      enteredDiscription.trim()=== '' ||
      enteredDueDate.trim() === ''
    ){
      modal.current.open();
      return;
    }
      onAdd({
        title: enteredTitle,
        discription: enteredDiscription,
        dueDate: enteredDueDate,
      });
  };
  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
<h2 className='text-xl font-bold text-stone-700 my-4'>invalid input</h2>
<p className='text-stone-600 mb-4'> oops .... loke like you forget to input</p>
<p className='text-stone-600 mb-4'>Please make sure you provide a valid value for every input filed.</p>

      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button onClick={onCancel} className="text-stone-800 hover:text-stone-950">
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className=" bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input ref={tittle} label="Title" />
          <Input ref={discription} label="Discription" textarea />
          <Input ref={dueDate} type="date" label="Due Date" />
        </div>
      </div>
    </>
  );
}

export default NewProject;
