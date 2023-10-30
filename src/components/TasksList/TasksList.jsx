import { StyledUl, TaskListItem } from "./TaskLists.styled"
import { useSelector } from 'react-redux';
import { statusFilters } from "redux/constants";
import { getTasks } from "redux/selectors";

const useVisibleTasks = () => {

    const tasks = useSelector(getTasks);
    const filter = useSelector(getTasks);

    switch (filter) {
        case statusFilters.active:
            return tasks.filter(task => !task.completed);
        case statusFilters.completed:
            return tasks.filter(task => task.completed);
        default:
            return tasks;
    }
};

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