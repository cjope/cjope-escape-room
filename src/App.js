import './App.css';
import ReactAudioPlayer from 'react-audio-player';
import "react-toastify/dist/ReactToastify.css"
import { toast } from 'react-toastify';
import { useState } from 'react';


function App() {

  const [candleActive, setCandleActive]=useState(false)
  function toggleCandle(){
    setCandleActive(true)
  }
  function handleLight(){
    toggleCandle()
  }
  function CandleAlert(){
    return(
    <div>It's the black flame candle I found at an estate sale.<br/>
        <button onClick={handleLight}>Light the Candle</button>
        <button onClick={toast.close}>Leave it alone</button>
      </div>
  )}
  function handleCandleClick(e){
    e.preventDefault()
    toast.success(<CandleAlert />,{position: toast.POSITION.TOP_CENTER} )
  }
  function handleLitCandleClick(e){
    e.preventDefault()
    toast.success("Didn't seem to do much.")
  }


  const [bookActive, setbookActive]=useState(false)
  function toggleBook(){
    setbookActive(true)
  }
  function handleBook(){
    toggleBook()
  }
  function BookAlert(){
    return(
    <div >Looks like it's bound in some sort of flesh. Maybe human. Due to the face and all.<br/>
        <button onClick={handleBook}><em>Open the book</em></button>
        <button onClick={toast.close}>Leave it alone</button>
      </div>
  )}
  function handleBookClosed(e){
    e.preventDefault()
    toast.success(<BookAlert/>,{position: toast.POSITION.TOP_CENTER} )
  }
  function handleBookOpen(e){
    e.preventDefault()
    toast.error(<BookOpenAlert/>,{position: toast.POSITION.TOP_CENTER})
  }

  function BookOpenAlert(){
    return(
    <div><em>Necronomicon Ex-Mortis...<br/></em><b>The book of the Dead</b></div>
  )}







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

  toast.configure()


  window.onload = function() {
    var backgroundAudio=document.getElementById("audio");
    backgroundAudio.volume = .1

}




  return (
      <div className="background-pic">
        {!candleActive?<a className="candle"href="candle-unlit1"onClick={handleCandleClick}> </a>:
        <a className="candle-lit"href="candle-lit"onClick={handleLitCandleClick}> </a>}

        {!bookActive?<a className="necronomicon-closed" href="necronomicon1" onClick={handleBookClosed}> </a>:
        <a className="necronomicon-open" href="necronomicon2" onClick={handleBookOpen}> </a>}

        <a className="clock" href="clock"onClick={handleClockClick}> </a>
        <a className="fish" href="fish"onClick={handleFishClick}> </a>
        <a className="dresser-drawer" href="dresser-drawer"onClick={handleDresserDrawerClick}> </a>
        <a className="torn-wallpaper" href="torn-wallpaper"onClick={handleWallpaperClick}> </a>
        <a className="redrum-wallpaper" href="redrum-wallpaper"onClick={handleRedrumClick}> </a>
        <a className="mirror" href="mirror"onClick={handleMirrorClick}> </a>
        {/* <a className="mirror-redrum" href="mirror-redrum"onClick={handleCandleClick}> </a> */}
        {/* <a className="candle-lit" href="candle"></a> */}
        
        <ReactAudioPlayer src="the_8_bit_charleston.mp3" id="audio" autoPlay controls loop/>

        {/* <div className="darkness"> </div>  when necronomicon is opened, loop this to make the screen flash*/}
      </div>




  );
}

export default App;