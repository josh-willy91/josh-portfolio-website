import './about.css'



function AboutMe() {

  return (
    <div className='about-wrapper'>
      <div className='about-content'>
        <h2>My Journey</h2>
        <p>
          As I sat on a plane heading to Vienna, Austria to meet with Peter, the owner of Traiskirchen's
          baseball club, I would not have guessed my journey would lead me to become a software developer.
          <br/>
          <br/>
          What I enjoy about software development is the process of creating something new. I find it
          so amazing to take an idea for a business or feature and turn that into a reality.
          <br/>
          <br/>
          In my spare time, I like to work on personal projects. Some areas of interest are finance,
          machine learning, and statistical analysis in the area of sports.  My next personal project
          will be either a financial market or fantasy baseball machine learning algo to make
          optimal decisions based on criteria.
        </p>
        <h2>Contact Me</h2>
        <p>
          Contact me via email or linkedIn message for project collabs or anything else
          <br/>
          <br/>
          Email: jwilly91812@yahoo.com
        </p>
      </div>
      <div className='diamond-content'>
        <img className='diamond-image' src='images/about-images.JPG'></img>
      </div>
    </div>
  );
}

  export default AboutMe;
