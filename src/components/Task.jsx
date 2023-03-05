import React from 'react'
import { MdDelete, MdDownloadDone } from 'react-icons/md';
import { StyledTask } from '../styles/Task.style'



const Task = ({ tarefa, functiondelete, togglefunction, id, checked }) => {
  return (
    <StyledTask id={id} checked={checked}>
      <span>{tarefa}</span>
      <div className="icons">
        <MdDownloadDone className='actions' id={id} size={26} color="#19cf4f" onClick={() => togglefunction(id, checked)} />
        <MdDelete className='actions' size={26} color="red" onClick={() => functiondelete(id)} />
      </div>
    </StyledTask>
  )
}

export default Task;