import Modal from 'components/Modal/Modal';
import { Component } from 'react';

class Gallery extends Component {
  //   state = { images: this.props.db || [] };
  //   static getDerivedStateFromProps(nextProps, prevState) {
  //     if (
  //       nextProps.db &&
  //       nextProps.db.length !== prevState.images.length
  //     ) {
  //       console.log('getDerivedStateFromProps');
  //       return { ...prevState, images: nextProps.db };
  //     } else return prevState;
  //   }

  state = { images: [], isShow: '' };

  //   componentDidMount() {
  //     const { db, title } = this.props;
  //     console.log(
  //       `componentDidMount in ${title}--------------`
  //     );
  //     //     db && this.setState({ images: db });
  //     if (db) this.setState({ images: db });
  //   }

  loadPictures = () => {
    const { db } = this.props;
    this.setState({ images: db });
  };

  uploadPictures(value) {
    fetch(
      `https://dog.ceo/api/breeds/image/random/${value}`
    )
      .then((r) => {
        if (!r.ok) {
          throw new Error('error');
        }
        return r.json();
      })
      .then((r) =>
        this.setState((prev) => ({
          images: [...prev.images, ...r.message],
        }))
      )
      .catch((err) => console.log('err :>> ', err));
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate)))))))))))))');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    return {
      prevImagesLength: prevState.images.length,
      nextImagesLength: this.state.images.length,
      scroll: this.state.images.length * 300,
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const prevAmount = prevProps.amount;
    const nextAmount = this.props.amount;
    const { nextImagesLength, prevImagesLength, scroll } =
      snapshot;
    console.log('componentDidUpdate outside', snapshot);
    if (prevAmount !== nextAmount) {
      console.log('componentDidUpdate inside');
      this.uploadPictures(nextAmount);
    }
    if (prevImagesLength !== nextImagesLength) {
      setTimeout(() => {
        window.scrollTo({
          top: scroll,
          behavior: 'smooth',
        });
      }, 500);
    }
  }

  toogleModal = (src) => {
    this.setState({ isShow: src ? src : '' });
  };

  render() {
    const { loadPictures, toogleModal } = this;
    const { images, isShow } = this.state;
    const { title } = this.props;
    console.log(` render in ${title} _________________`);
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}>
        <h2>Gallery {title}</h2>
        <button type='button' onClick={loadPictures}>
          Load pictures
        </button>
        {images.map((image) => (
          <img
            key={image}
            src={image}
            alt={image}
            width='400'
            onClick={() => this.toogleModal(image)}
          />
        ))}
        {isShow && (
          <Modal src={isShow} toogleModal={toogleModal} />
        )}
      </div>
    );
  }
}

export default Gallery;
