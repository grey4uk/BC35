import React from 'react';
import PropTypes from 'prop-types';

// export default function Title() {
//   return (
//     <div>Title</div>
//   )
// }

export const Title = ({
  label = 'Non title',
  children,
}) => {
  // console.log('props', props);
  // const { label } = props;
  return (
    <div>
      {label ? <h3>{label}</h3> : null}
      <h3>{children}</h3>
    </div>
  );
};

Title.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
