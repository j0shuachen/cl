import React from 'react';

class About extends React.Component{

  render(){
    return(

      <div className='aboutcontainer'>
        <div className='aboutmain'>

          <div id='1' className='aboutprofilebar'>
          <img className='aboutprofilepic' src='http://res.cloudinary.com/dxeyfggji/image/upload/v1506986857/20170807_000913_copy_rl4cg9.jpg'></img>
          <div className='aboutname'> Hi there, I'm Josh!</div>
          </div>
          <div className='aboutme'>
      <div className='aboutpara'>
            Born and raised in the Bay Area, I'm a fullstack developer with a passion for learning new technologies.
            Originally a product developer for a manufacturing company in Asia, I have experience working on cross functional
            teams where communication, time management, and adaptability can be the difference between success and failure
            for product launches.</div>
          <br></br>
        <div className='aboutpara'>
            After moving back to the Bay Area, I decided to pursure my interests in coding while obtaining my green belt in six sigma.
            It was during this time that I realized how interested I was in programming, causing me to decide to make a career switch.
            The feeling of accomplishment from creating an app, gives me the same feeling of ownership that I felt as a product
            developer overseeing a project's development from artwork to finished product!
          </div>
          <br></br>
            <div className='aboutpara'> You can contact me at whoisJoshuaChen@gmail.com </div>


          </div>
        </div>


      </div>
    );
  }

}

export default About;
