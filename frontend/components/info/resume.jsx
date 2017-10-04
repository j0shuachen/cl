import React from 'react';

class Resume extends React.Component{

  render(){
    return(

      <div className='resumecontainer'>
        <div className='aboutmaindos'>
          <div className='downicon'>
        <a href='http://res.cloudinary.com/dxeyfggji/image/upload/v1507112383/ChenJoshResume.pdf'>  <img className='pdfdown' src='http://res.cloudinary.com/dxeyfggji/image/upload/v1506956336/pdf-file-format-symbol_318-45340_plqofm.jpg'/> </a>
      <a href='http://res.cloudinary.com/dxeyfggji/image/upload/v1507112383/ChenJosh.png' download='ChenJoshuaResume.png' >  <img className='pdfdowndos' src='http://res.cloudinary.com/dxeyfggji/image/upload/v1506956333/download_iy2qpr.png'/></a>
          </div>
        <img src='http://res.cloudinary.com/dxeyfggji/image/upload/v1507112383/ChenJosh.png'/>
        </div>
      </div>
    );
  }

}

export default Resume;
