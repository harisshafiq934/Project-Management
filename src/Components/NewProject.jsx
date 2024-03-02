import React from "react";
import Input from "./Input";
import { useRef } from "react";

function NewProject({ onAdd }) {
  const tittle = useRef();
  const discription = useRef();
  const dueDate = useRef();
  const handleSave = () => {
    const enteredTitle = tittle.current.value;
    const enteredDiscription = discription.current.value;
    const enteredDueDate = dueDate.current.value;
    // console.log(project);
    onAdd({
      title: enteredTitle,
      discription: enteredDiscription,
      dueDate: enteredDueDate,
    });
  };
  return (
    <div className="w-[35rem] mt-16">
      <menu className="felx items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">
            Cancel
          </button>
        </li>
        <li>
          <button
            onClick={handleSave}
            className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md"
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
  );
}

export default NewProject;
