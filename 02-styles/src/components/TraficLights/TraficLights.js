// import clsx from 'clsx';
import { getRandomInt } from 'helpers';
import css from './TraficLights.module.scss';

const lights = ['red', 'green', 'yellow'];

const TraficLights = () => {
  //   console.log('css :>> ', css);

  const getStyleForLight = () =>
    `${css.circle} ${css[lights[getRandomInt(3)]]}`;

  return (
    <ul className='container'>
      {lights.map((light) => (
        <li key={light} className={getStyleForLight()}>
          {/* className={clsx(
            css.circle,
            css[lights[getRandomInt(3)]]
          )}> */}
          {/* className={css[lights[getRandomInt(3)]]}> */}
          {light.charAt(0)}
        </li>
      ))}
    </ul>
  );
};

export default TraficLights;
