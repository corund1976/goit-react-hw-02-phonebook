import PropTypes from 'prop-types';
import s from './Filter.module.css';

function Filter({ value, changeFilter }) {
  return (
    <label className={s.label}>
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={changeFilter}
        className={s.input}>
      </input>
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;