import { Button } from "components/Button/Button";
import { statusFilters } from "../../redux/constants";
import { useDispatch, useSelector } from 'react-redux';
import { getStatusFilter } from "redux/selectors";
import { setStatusFilter } from "redux/actions";

export const StatusFilter = () => {
  // Получаем значение фильтра из состояния Redux

  const dispatch = useDispatch();
  const filter = useSelector(getStatusFilter);

  const handleChange = value => dispatch(setStatusFilter(value))

  return (
    <div>
      <Button 
        selected={filter === statusFilters.all}
        onClick={() => handleChange(statusFilters.all)}
      >
        All
      </Button>
      <Button 
        selected={filter === statusFilters.active}
        onClick={() => handleChange(statusFilters.active)}
      >
        Active
      </Button>
      <Button 
        selected={filter === statusFilters.completed}
        onClick={() => handleChange(statusFilters.completed)}
      >
          Completed
      </Button>
    </div>
  );
};