import css from 'components/FilterSearch/filtersearch.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';
import { getFilterSelector } from 'redux/selectors';

const FilterSearch = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilterSelector);
  const onChange = evt => {
    dispatch(changeFilter(evt.target.value));
  };
  return (
    <div className={css.find}>
      <label>Find contacts by name</label>
      <input
        type="text"
        value={filter}
        onChange={onChange}
        className={css.search}
      />
    </div>
  );
};
export default FilterSearch;
