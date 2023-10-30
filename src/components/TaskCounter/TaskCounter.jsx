import { CounterContainer } from "./TaskCounter.styled"
import { useTaskCount } from "redux/hooks/useTaskCount"

export const TaskCounter = () => {

    const {active, completed } = useTaskCount();

    return (
        <CounterContainer>
            <p>Active: {active} </p>
            <p>Completed: {completed} </p>
        </CounterContainer>
    )
}