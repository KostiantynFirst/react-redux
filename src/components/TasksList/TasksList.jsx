import { StyledUl, TaskListItem } from "./TaskLists.styled"
import { useSelector } from 'react-redux';
import { getTasks } from "redux/selectors";

const getVisibleTasks = (tasks, statusFilter) => {
    switch (statusFilter) {
        case statusFilter.active:
            return tasks.filter(task => !task.completed);
        case statusFilter.completed:
            return tasks.filter(task => task.completed);
        default:
            return tasks;
    }
};

export const TaskList = () => {

    const tasks = useSelector(getTasks);
    const filter = useSelector(getTasks);
    const visibleTasks = getVisibleTasks(tasks, filter);

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