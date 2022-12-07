import { Component } from 'react';

class Modal extends Component {
  handleClose = (e) => {
    console.log('<<<<<<<<<click>>>>>>');
    if (e.keyCode === 27) this.props.toogleModal();
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleClose);
  }

  componentWillUnmount() {
    document.removeEventListener(
      'keydown',
      this.handleClose
    );
  }

  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'fixed',
          inset: '0',
          background: 'rgba(0,0,0,.5)',
        }}>
        <img
          src={
            this.props.src ||
            'https://img.freepik.com/free-photo/high-angle-shot-foggy-hills_181624-39614.jpg?size=626&ext=jpg'
          }
          alt='alt'
          width='500'
        />
      </div>
    );
  }
}

export default Modal;
