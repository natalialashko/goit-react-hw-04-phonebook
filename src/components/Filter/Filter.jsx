import React from 'react';
import PropTypes from 'prop-types';
import { FilterInput } from './Filter.styled';

export const Filter = ({value, onChange}) => {
 
  return (
    <FilterInput>
          Find contacts by name <input type='text' value={value}
          onChange={(onChange)}/>
    </FilterInput>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
}