import './errors.scss';

const DefaultError = () => {
  return (
    <div className='error-container'>
      <div className='error-smaller_container'>
        <h1 className='error-title'>Sorry, something went wrong</h1>
        <div className='donate-text_decoration'></div>
      </div>
    </div>
  );
};

export default DefaultError;
