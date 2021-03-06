import React, { PropTypes } from 'react';

const categoryOption = (props) => {
  const { categoryId, title } = props;
  return (
    <option
      value={categoryId}
      className="CategoryOption"
    >
      {title}
    </option>
  );
};

categoryOption.propTypes = {
  categoryId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default categoryOption;
