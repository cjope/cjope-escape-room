import './App.css';
import ReactAudioPlayer from 'react-audio-player';



function App() {

  function handleCandleClick(e){
    e.preventDefault()
    alert("Huh, nothing happened.")
  }

  function handleClosedBookClick(e){
    e.preventDefault()
    alert("Looks like it's bound in some sort of flesh.")
  }

  function handleOpenBookClick(e){
    e.preventDefault()
    alert("Klatu")

  }

  function handleClockClick(e){
    e.preventDefault()
    alert("here kitty kitty")
  }


  function handleMirrorClick(e){
    e.preventDefault()
    alert("look at this handsome devil")
  }

  function handleFishClick(e){
    e.preventDefault()
    alert("hey there goldy")  }

  function handleDresserDrawerClick(e){
    e.preventDefault()
    alert("opening the dresser")
  }

  function handleRedrumClick(e){
    e.preventDefault()
    alert("0101100101? Sounds like gibberish!")
  }

  function handleWallpaperClick(e){
    e.preventDefault()
    alert("This junk came right off! If I could get out of this room, I'd give the landlord a piece of my mind!")
  }


  window.onload = function() {
    var backgroundAudio=document.getElementById("audio");
    backgroundAudio.volume=.07;
    // backgroundAudio.play()
}




  return (
    // <div className="App">
      /* <div className="flex">
        <div className="one">1</div>
        <div className="two">2</div>
        <div className="three">3</div>
        <div className="four">4</div>
        <div className="five">5</div>
        <div className="six">6</div>
        <div className="seven">7</div>
        <div className="eight">8</div>
        <div className="nine">9</div>
      </div> */
      // <a className="candle"></a>

      /* <iframe src="https://giphy.com/embed/mZNSjf7LSnxTEEdzcZ" width="480" height="185" frameBorder="0" class="giphy-embed" allowFullScreen></iframe> */
      /* <img src={process.env.PUBLIC_URL + '/candle_unlit.gif'} alt="candle_unlit" className="candle" /> */
      /* <a className="candle" ></a> */
      /* <img href="./candle_unlit.jpeg" alt="candle"></img> */
    // </div>
    
    // <div className="darkness">




      <div className="background-pic">
        <a className="candle" href="candle-unlit1"onClick={handleCandleClick}> </a>
        <a className="necronomicon-closed" href="necronomicon1" onClick={handleClosedBookClick}> </a>
        <a className="necronomicon-open" href="necronomicon2" onClick={handleOpenBookClick}> </a>
        <a className="clock" href="clock"onClick={handleClockClick}> </a>
        <a className="fish" href="fish"onClick={handleFishClick}> </a>
        <a className="dresser-drawer" href="dresser-drawer"onClick={handleDresserDrawerClick}> </a>
        <a className="torn-wallpaper" href="torn-wallpaper"onClick={handleWallpaperClick}> </a>
        <a className="redrum-wallpaper" href="redrum-wallpaper"onClick={handleRedrumClick}> </a>
        <a className="mirror" href="mirror"onClick={handleMirrorClick}> </a>
        {/* <a className="mirror-redrum" href="mirror-redrum"onClick={handleCandleClick}> </a> */}
{/*         
        <audio id="audio" type="audio/mpeg" src="../public/the_8_bit_charleston.mp3" allow="autoplay"> </audio>*/}
        
        {/* <iframe src="https://github.com/anars/blank-audio/blob/master/250-milliseconds-of-silence.mp3" title="silence" allow="autoPlay" id="audio" style={{display:"none"}}></iframe> */}

        {/* <iframe src="../public/the_8_bit_charleston.mp3" autoPlay loop style={{display:"none"}}  id="audio" title="charleston" ></iframe>  */}
        <ReactAudioPlayer
          src="the_8_bit_charleston.mp3"
          id="audio"
          autoPlay
          controls
          loop
          volume="2"        />
        {/* <audio autoPlay loop  id="playAudio"> */}
          {/* <source src="../public/the_8_bit_charleston.mp3"/> */}
        {/* </audio> */}

        {/* <div className="darkness"> </div>  when necronomicon is opened, loop this to make the screen flash*/}
      </div>
    // </div>




  );
}

export default App;