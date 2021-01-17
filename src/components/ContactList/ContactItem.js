import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import { useDispatch } from 'react-redux';
import actions from '../../redux/actions';

export default function ContactListItem({
  name = 'anonymous',
  number = 'unknown',
  id,
}) {
  const dispatch = useDispatch();

  return (
    <li className={s.item}>
      <p className={s.contact}>
        {name}: {number}
      </p>
      <button
        onClick={() => dispatch(actions.deleteContact(id))}
        className={s.button}
      >
        Remove
      </button>
    </li>
  );
}

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
