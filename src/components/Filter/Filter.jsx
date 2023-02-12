import PropTypes from 'prop-types';

// ========== styles ==========

import { FilterWrap, FilterInput } from './Filter.styled';

const Filter = ({ handleChange }) => (
  <FilterWrap>
    <label>Find contacts by name</label>
    <FilterInput type="text" name="filter" onChange={handleChange} />
  </FilterWrap>
);

export default Filter;

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
