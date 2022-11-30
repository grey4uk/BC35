const ListItem = (props) => {
  //   console.log('props :>> ', props.key);
  const {
    item: { id, name },
  } = props;
  return <li>{name}</li>;
};

export default ListItem;
