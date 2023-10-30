// Импортируем хук
import { Button } from "Button/Button";
import { useSelector } from "react-redux";
// Импортируем объект значений фильтра
import { statusFilters } from "../../redux/constants";
export const StatusFilter = () => {
  // Получаем значение фильтра из состояния Redux
  const filter = useSelector(state => state.filters.status);
  return (
    <div>
      <Button selected={filter === statusFilters.all}>All</Button>
      <Button selected={filter === statusFilters.active}>Active</Button>
      <Button selected={filter === statusFilters.completed}>Completed</Button>
    </div>
  );
};