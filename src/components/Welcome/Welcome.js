import './welcome.css';

function Welcome() {

  return (
    <div className='welcome-wrapper'>
      <img className='portfolio-image' src='images/portfolio-image.jpg' alt='nature'></img>
      <div className='welcome-content'>
        <h2>Software Engineer</h2>
        <h3>Josh Williams</h3>
        <a href="https://docs.google.com/document/d/1Bk2e_8zqZpqO8VYFDYviTC_qWTCnUgqFI82-8jpf_w8/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >Resume</a>
      </div>
    </div>
  );
}

export default Welcome;
