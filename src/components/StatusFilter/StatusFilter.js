import { Button } from "components/Button/Button";
import { statusFilters } from "../../redux/constants";
import { useSelector } from 'react-redux';
import { getStatusFilter } from "redux/selectors";

export const StatusFilter = () => {
  // Получаем значение фильтра из состояния Redux
  const filter = useSelector(getStatusFilter);

  return (
    <div>
      <Button selected={filter === statusFilters.all}>All</Button>
      <Button selected={filter === statusFilters.active}>Active</Button>
      <Button selected={filter === statusFilters.completed}>Completed</Button>
    </div>
  );
};