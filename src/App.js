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
    toast.success(<CandleAlert />,{position: "bottom-center", autoClose: false, icon: "🕯️"} )
  }
  function handleLitCandleClick(e){
    e.preventDefault()
    toast.success("Didn't seem to do much.", {position: "bottom-center", autoClose: 2800, icon:"🕯"})
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
    toast.success(<BookAlert/>,{position: "bottom-center", autoClose: false, icon: "📕"}  )
  }
  function handleBookOpen(e){
    e.preventDefault()
    toast.error(<BookOpenAlert/>,{position: "bottom-center", autoClose: false, icon: "💀"} )
  }

  function BookOpenAlert(){
    return(
    <div><em>Necronomicon Ex-Mortis...<br/></em><b>The book of the Dead</b></div>
  )}

  function handleClockClick(e){
    e.preventDefault()
    toast.success("Here kitty kitty",{position: "bottom-center", autoClose: 2800, icon: "😺"}  )
  }


  function handleMirrorClick(e){
    e.preventDefault()
    toast.success("Ahhh! A devil! A handsome one at that.",{position: "bottom-center", autoClose: 2800, icon: "😏"}  )
  }

  function handleFishClick(e){
    e.preventDefault()
    toast.success("Hey there, Goldy!",{position: "bottom-center", autoClose: 2800, icon: "🐟", className:"toasty"}  )
  }

  function handleDresserDrawerClick(e){
    e.preventDefault()
    toast.success("A whole lot of blue shirts and brown pants...",{position: "bottom-center", autoClose: 2800, icon: "👕"}  )
  }

  function handleRedrumClick(e){
    e.preventDefault()
    toast.success("0101100101? Sounds like gibberish!",{position: "bottom-center", autoClose: 2800, icon: "🤖"}  )

  }

  function handleWallpaperClick(e){
    e.preventDefault()
    toast.success("The wallpaper is peeling off... Mr. Fancy-Pants Landlord can't be bothered to fix it.",{position: "bottom-center", autoClose: 3800, icon: "🙄"}  )
  }


  // function handleDarknessMyOldFriend(e){
  //   e.preventDefault()

  // }

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
        <a className="mirror-redrum" href="mirror-redrum"onClick={handleCandleClick}> </a>
        
        <ReactAudioPlayer src="the_8_bit_charleston.mp3" id="audio" autoPlay controls loop className="audio"/>  

        {/* <div className="darkness"> </div>  when necronomicon is opened, loop this to make the screen flash */}
      </div>




  );
}

export default App;