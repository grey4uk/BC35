import './App.css';
import Container from './components/Container/Container';
import List from './components/List/List';
import { Title } from './components/Title/Title';
import database from './helpers/db.json';
import { getTitle } from './helpers/getTittle';

function App() {
  // console.log('database :>> ', database[0].name);
  // const title = getTitle();
  return (
    <Container>
      <Title label={getTitle()}>
        My surname Wonderful
        <br />
        <span>GoIT</span>
      </Title>
      {/* <h1>Hello</h1>
      {false ? 'show' : 'hide'} */}
      <List db={database} />
    </Container>
  );
}

export default App;
