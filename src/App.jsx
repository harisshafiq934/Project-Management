
import { useState } from "react";
import NewProject from "./Components/NewProject";
import NoProjectSelected from "./Components/NoProjectSelected";
import SideBar from "./Components/SideBar";

function App() {
  const [selectedProject, setSelectedProject] = useState({
    ProjectId: undefined,
    projects:[]
  })
const handleSelecProject = (() =>{
  console.log("click");
setSelectedProject(prev => {
  return{
    ...prev,
    ProjectId:null
  }
})
// console.log(selectedProject)
})
const handleAddProject =(projectData) =>{
  setSelectedProject(prevState => {
    const newProject = {
      ...projectData,
      id: Math.random() + 1 * 34 ,
    };
    return{
      ...prevState,
      Projects:[...prevState.projects, newProject]
    }
  })
}
console.log(selectedProject);
let content;
if(selectedProject.ProjectId === null){
  content = <NewProject onAdd={handleAddProject}/>
}else if(selectedProject.ProjectId === undefined){
  content = <NoProjectSelected startProject={handleSelecProject}/>
}
  return (
    <>
    <main className="h-screen my-8 flex gap-8">
      <SideBar startProject={handleSelecProject}/>
      {/* <NoProjectSelected startProject={handleSelecProject}/> */}
      {content}
    </main>
    </>
  );
}

export default App;
