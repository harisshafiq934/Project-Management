import React from "react";
import Button from "./Button";

function SideBar({ startProject, projects, onSelectProject, selectedProjectId }) {
  return (
    <>
      <aside className="w-1/3 px-8 py-16 bg-stone-900 text-slate-50 md:w-72 rounded-r-xl">
        <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
          Your Project
        </h2>
        <div>
          {/* <button className='px-4 py-2 text-xs md:text-base rounded-md border-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100'>
                + Add Project
            </button> */}
          <Button onClick={startProject}>+ Add Project</Button>
        </div>
        <ul className="mt-8">
          {projects.map((project) => {
let cssClass= "w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800"
if(project.id === selectedProjectId){
    cssClass += " bg-stone-800 text-stone-200"
}else{
    cssClass += " text-stone-400"

}
            return(
            <li key={project.id} className="mb-4">
              <button
                onClick={()=>onSelectProject(project.id)}
                className={cssClass}
              >
                {project.title}
              </button>
            </li>
            )
          }
          )}
        </ul>
      </aside>
    </>
  );
}

export default SideBar;
