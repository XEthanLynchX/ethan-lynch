import React from 'react';
import image1 from '../imgs/motivation/image1.webp';
import image2 from '../imgs/motivation/image2.jpg';
import image3 from '../imgs/motivation/image3.jpg';
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
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 relative">
        <video 
  src={girl_running} 
  autoPlay 
  loop 
  muted 
  playsInline
  className="object-cover w-full h-full"
/>
          <div className="text-black font-[sans] absolute top-1/2 left-2/4 transform -translate-x-1/2  -translate-y-1/2 text-8xl font-bold">
            Grow
          </div>
        </div>
        <div className="w-full md:w-1/2 relative">
          <img 
          src={images[this.state.currentImageIndex]} 
          alt="Cycling" 
          className="object-cover w-full h-full"
        />
          <div className="text-white font-[sans] absolute top-1/2 left-2/4 transform -translate-x-1/2 -translate-y-1/2 text-8xl font-bold">
          & {words[this.state.currentWordIndex]}
          </div>
        </div>
      </div>
    );
  }
}

export default Motivation;