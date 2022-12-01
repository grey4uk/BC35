import React from 'react';
import { GiArrest } from 'react-icons/gi';

import './App.css';
import Title from 'components/Title/Title';
import Container from 'components/Container/Container';
import TraficLights from 'components/TraficLights/TraficLights';
import Button from 'components/Button/Button';
import { ReactComponent as Delete } from 'assets/delete.svg';
import MaterialSelect from 'components/MaterialSelect/MaterialSelect';

function App() {
  const style = { fontStyle: 'italic', fontSize: '24px' };
  const svgStyle = { width: '32px', height: '32px' };
  return (
    <React.Fragment>
      <Container>
        <Title
          type='h1'
          text='Hello World'
          fontWeight='bold'
        />
        <Title
          type='h2'
          text="I'm H2 title"
          fontWeight='bold'
        />
        <Title
          type='h3'
          text="I'm H3 description"
          fontWeight='normal'
          extendedStyle={style}
        />
      </Container>
      <TraficLights />
      <Container>
        <Button flag={true}>
          Hands up <GiArrest style={svgStyle} />
        </Button>
        <Button flag={false}>
          <Delete style={svgStyle} />
        </Button>
        <MaterialSelect />
      </Container>
    </React.Fragment>
  );
}

export default App;
