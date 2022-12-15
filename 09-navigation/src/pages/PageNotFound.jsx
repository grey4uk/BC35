import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <h2>
      Page not Found
      <button
        type='button'
        onClick={() => {
          navigate('/');
        }}>
        Go home Yankee
      </button>
    </h2>
  );
};

export default PageNotFound;
