import {
  Button,
  Card,
  Form,
  ListGroup,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { allTodosSelector } from 'redux/todos/selectors';
import { ReactComponent as Delete } from 'assets/delete.svg';
import { updateOneTodo } from 'redux/todos/operations';
import {
  useDeleteTodoMutation,
  useGetTodosQuery,
  useLazyGetTodosQuery,
  useUpdateTodoMutation,
} from 'redux/todos/todosApi';
import Loader from 'components/Loader/Loader';

const TodosList = () => {
  const todos = useSelector(allTodosSelector);
  const dispatch = useDispatch();

  const [deleteTodo, { isLoading: deleteLoading }] =
    useDeleteTodoMutation();
  const [updateTodo, { isLoading: updateLoading }] =
    useUpdateTodoMutation();

  const { data: todosApi, isLoading } = useGetTodosQuery();
  console.log(isLoading);
  console.log('todosApi', todosApi);

  const handleIsDone = ({ target: { id } }) => {
    const todo = todos.find((todo) => todo.id === id);
    updateTodo({ ...todo, isDone: !todo.isDone });
    // dispatch(
    //   updateOneTodo({ ...todo, isDone: !todo.isDone })
    // );
  };

  return (
    <>
      {(isLoading || deleteLoading || updateLoading) && (
        <Loader />
      )}
      <ListGroup>
        {todosApi?.map(
          ({ description, title, isDone, id, avatar }) => (
            <ListGroup.Item key={id}>
              <Card style={{ width: '18rem' }}>
                <Card.Img
                  variant='top'
                  src={avatar}
                  style={{
                    borderRadius: '50%',
                    width: '5rem',
                  }}
                />
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>{description}</Card.Text>
                  <Form.Check
                    id={id}
                    type='checkbox'
                    label='Done'
                    onChange={handleIsDone}
                    checked={isDone}
                  />

                  <Button
                    variant='primary'
                    onClick={() => deleteTodo(id)}>
                    <Delete
                      style={{
                        width: '24px',
                        height: '24px',
                      }}
                    />
                  </Button>
                </Card.Body>
              </Card>
            </ListGroup.Item>
          )
        )}
      </ListGroup>
    </>
  );
};

export default TodosList;
