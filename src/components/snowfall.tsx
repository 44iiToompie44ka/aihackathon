import Lottie from 'react-lottie-player';
import snowflakesa from "./snowflakes.json"
const Snowfall = () => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
      <Lottie
        loop
        animationData={snowflakesa} // Adjust the path if not in public
        play
        style={{
          width: '80%',
          height: '-20%',
          position: 'absolute',
          top: -50,
          left: 0,
          pointerEvents: 'none', // Ensure animation does not interfere with user interactions
        }}
      />
    </div>
  );
};

export default Snowfall;