import React from 'react';
import image1 from '../imgs/image1.jpg';
import image2 from '../imgs/image2.jpg';
import image3 from '../imgs/image3.jpg';
import girl_running from '../vids/girl_running.mp4'; 
import '../styling/style.css'; 

const images = [
  image1, 
  image2,
  image3,
];

const words = [
  'Achieve', 
  'Conquer',
  'Devlop',
  'Thrive',
  'Elevate',
];

class Motivation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentImageIndex: 0, currentWordIndex: 0 };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prevState => ({
        currentImageIndex: (prevState.currentImageIndex + 1) % images.length,
        currentWordIndex: (prevState.currentWordIndex + 1) % words.length,
      }));
    }, 3000); 
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div style={{ display: 'flex', }}>
        <div style={{ position: 'relative', width: '50%', height: '100%' }}>
          <img 
            src={images[this.state.currentImageIndex]} 
            alt="Cycling" 
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          />
          <div class='text-lightred font-[sans]'  style={{ position: 'absolute', top: '50%', left: '85%', transform: 'translate(-50%, -50%)', color: 'tred', fontSize: '5em', fontWeight: "bold" }}>
            Grow
          </div>
        </div>
        <div style={{ position: 'relative', width: '50%', height: '100%' }}>
          <video 
            src={girl_running} // use the imported video file
            autoPlay 
            loop 
            muted 
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          />
          <div class='font-[sans]'style={{ position: 'absolute', top: '50%', left: '22%', transform: 'translate(-50%, -50%)', color: 'Red', fontSize: '5em', fontWeight:"bold", font: "Roboto"  }}>
            & {words[this.state.currentWordIndex]}
          </div>
        </div>
      </div>
    );
  }
}

export default Motivation;