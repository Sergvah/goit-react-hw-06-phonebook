import css from 'components/ContactItem/contactitem.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteObj } from '../../redux/contactsSlice';

const ContactItem = ({ item }) => {
  const dispatch = useDispatch();
  const onDeleteCard = id => dispatch(deleteObj(id));
  return (
    <li className={css.item}>
      <p className={css.text}>{item.name}:</p>
      <p className={css.numb}>{item.number}</p>
      <button
        type="button"
        className={css.btn}
        onClick={() => onDeleteCard(item.id)}
      >
        Delete
      </button>
    </li>
  );
};
export default ContactItem;

ContactItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
