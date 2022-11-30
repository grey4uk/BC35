import PropTypes from 'prop-types';
import ListItem from './ListItem';

const List = ({ db }) => {
  return (
    <ol>
      {db.map((item) => {
        const { name, id } = item;
        return <ListItem key={id} item={item} />;
      })}
    </ol>
  );
};

export default List;

List.propTypes = {
  db: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
