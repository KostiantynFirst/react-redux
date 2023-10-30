import { StyledUl, TaskListItem } from "./TaskLists.styled"
import { useVisibleTasks } from "redux/hooks/hooks";
import { Task } from "components/Task/Task";

export const TaskList = () => {

    const visibleTasks = useVisibleTasks();

    return (
        <StyledUl>
            {visibleTasks.map(task => (
                <TaskListItem key={task.id}>
                    <Task task={task} />
                </TaskListItem>
            ))}
        </StyledUl>
    )
}