
import { useState } from "react";
import NewProject from "./Components/NewProject";
import NoProjectSelected from "./Components/NoProjectSelected";
import SideBar from "./Components/SideBar";
import SelectedProject from "./Components/SelectedProject";

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
const handleDeleteProject=(()=>{
  setSelectedProject(prev => {
    return{
      ...prev,
      ProjectId:undefined,
      projects:prev.projects.filter(project => project.id !== prev.ProjectId)
    }
  })
  })
const handleSelectProject=((id)=>{
setSelectedProject(prev => {
  return{
    ...prev,
    ProjectId:id
  }})
})


const handleCancleProject=(()=>{
setSelectedProject(prev => {
  return{
    ...prev,
    ProjectId:undefined
  }
})
})


const handleAddProject =(projectData) =>{
  setSelectedProject(prevState => {
    const newProject = {
      ...projectData,
      id: Math.random(),
    };
    return{
      ...prevState,
      ProjectId:undefined,
      projects:[...prevState.projects, newProject]
    }
  })
}
console.log(selectedProject);
const selectedProjectState = selectedProject.projects.find(project => project.id === selectedProject.ProjectId)
let content = <SelectedProject project={selectedProjectState} deleteProject={handleDeleteProject}/>;
if(selectedProject.ProjectId === null){
  content = <NewProject onAdd={handleAddProject} onCancel={handleCancleProject}
  
  />
}else if(selectedProject.ProjectId === undefined){
  content = <NoProjectSelected startProject={handleSelecProject}/>
}
  return (
    <>
    <main className="h-screen my-8 flex gap-8">
      <SideBar startProject={handleSelecProject}
      projects={selectedProject.projects}
      onSelectProject={handleSelectProject}
      />
      {/* <NoProjectSelected startProject={handleSelecProject}/> */}
      {content}
    </main>
    </>
  );
}

export default App;
