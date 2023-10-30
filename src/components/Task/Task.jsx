import { MdClose } from 'react-icons/md';
import { TaskContainer } from './Task.styled';

export const Task = ({ task }) => {
      
    

    return (
      <TaskContainer>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleToggle}
        />
        <p>{task.text}</p>
        <button onClick={handleDelete}>
          <MdClose size={24} />
        </button>
      </TaskContainer>
    );
  };