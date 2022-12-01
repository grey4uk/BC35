import './Title.styles.css';

const Title = ({
  text,
  type = 'h2',
  fontWeight,
  extendedStyle = {},
}) => {
  switch (true) {
    case type === 'h1':
      return (
        <h1
          className='mainTitle'
          style={{
            fontWeight: fontWeight,
            ...extendedStyle,
          }}>
          {text}
        </h1>
      );
    case type === 'h2':
      return (
        <h2
          className='mediumTitle'
          style={{
            fontWeight: fontWeight,
            ...extendedStyle,
          }}>
          {text}
        </h2>
      );
    case type === 'h3':
      return (
        <h3
          className='smallTitle'
          style={{
            fontWeight: fontWeight,
            ...extendedStyle,
          }}>
          {text}
        </h3>
      );

    default:
      return null;
  }
  //   if (type === 'h1')
  //     return (
  //       <h1
  //         className=''
  //         style={{ color: 'red', fontWeight: fontWeight }}>
  //         {text}
  //       </h1>
  //     );
  //   if (type === 'h2')
  //     return (
  //       <h2 style={{ color: 'blue', fontWeight: fontWeight }}>
  //         {text}
  //       </h2>
  //     );
  //   if (type === 'h3')
  //     return (
  //       <h3
  //         style={{ color: 'green', fontWeight: fontWeight }}>
  //         {text}
  //       </h3>
  //     );
};

export default Title;
