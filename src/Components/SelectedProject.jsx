import React from 'react'

function SelectedProject({project,deleteProject}) {

    const formateDate= new Date(project.dueDate).toLocaleDateString('en-US',{
year:'numeric',
month:'long',
day:'numeric'

    })
  return (
    <div className='w-[35rem] mt-16'>
<header className='pb-4 mb-4 border-b-2 border-stone-300'>
    <div className='flex items-center justify-between'>
    <h1 className='text-3xl font-bold text-stone-600 mb-2'>
    {project.title}
</h1>
<button onClick={deleteProject} className='text-stone-600 mb-4'>Delete</button>
    </div>
    <p className='text-stone-400 mb-4'>{formateDate}</p>
    <p className='text-stone-600 whitespace-pre-wrap'>
        {project.description}
    </p>


</header>
Tasks
    </div>
  )
}

export default SelectedProject