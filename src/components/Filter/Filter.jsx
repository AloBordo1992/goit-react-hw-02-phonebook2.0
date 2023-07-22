import PropTypes from 'prop-types';
import css from './Filter.module.css';

export function Filter(props) {
  return (
    <div className={css.filter}>
      <label>
        Find contacts by name <br />
        <input
          type="text"
          name="name"
          value={props.value}
          onChange={event => props.onFilterChange(event.currentTarget.value)}
        />
      </label>
    </div>
  );
}

Filter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
