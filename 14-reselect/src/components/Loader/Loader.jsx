import sharedCSS from 'shared/sharedStyles.module.css';

import s from './Loader.module.css';

const Loader = () => {
  return (
    <div
      className={
        s.loaderWrapper + ' ' + sharedCSS.centeredContent
      }>
      <div className={s.loader}>
        <img
          src={require('assets/cat.gif')}
          width='350'
          alt='loader...'
          style={{ borderRadius: '50%' }}
        />
      </div>
    </div>
  );
};

export default Loader;
