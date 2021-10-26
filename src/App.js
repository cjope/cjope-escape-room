import './App.css';
import ReactAudioPlayer from 'react-audio-player';
import "react-toastify/dist/ReactToastify.css"
import { Bounce, Flip, Slide, toast, Zoom } from 'react-toastify';
import { useState } from 'react';
import { injectStyle } from "react-toastify/dist/inject-style";


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
    toast.success(<CandleAlert />,{position: "top-center", autoClose: false, icon: "🕯️"} )
  }
  function handleLitCandleClick(e){
    e.preventDefault()
    toast.success("Didn't seem to do much.", {position: "top-center", autoClose: 2800, icon:"🕯"})
  }

  const [isDark, setIsDark]=useState(false)
console.log(isDark)

  const [bookActive, setbookActive]=useState(false)
 
  function toggleBook(){

    setbookActive(true)
    setTimeout((e)=>{toast.success("Interesting...",{position: "top-center", transition: Slide, autoClose:3000,icon:"🤔"},setIsDark(true))})
    setTimeout((e)=>{toast.dark("latin stuff",{position: "top-right", transition: Zoom, autoClose: 500, icon:"🩸"},setIsDark(false))},1000)
    setTimeout((e)=>{toast.dark("latin stuff",{position: "bottom-right", transition: Zoom, autoClose: 500, icon:"🩸"},setIsDark(true))},1500)
    setTimeout((e)=>{toast.dark("latin stuff",{position: "top-center", transition: Flip, autoClose: 500, icon:"🩸"},setIsDark(false))},2000)
    setTimeout((e)=>{toast.dark("latin stuff",{position: "top-left", transition: Bounce, autoClose: 500, icon:"🩸"},setIsDark(true))},2500)
    setTimeout((e)=>{toast.dark("latin stuff",{position: "bottom-right", transition: Zoom, autoClose: 500, icon:"🩸"},setIsDark(false))},2900)
    setTimeout((e)=>{toast.dark("latin stuff",{position: "bottom-center", transition: Zoom, autoClose: 500, icon:"🩸"},setIsDark(true))},3000)
    setTimeout((e)=>{toast.dark("latin stuff",{position: "top-left", transition: Flip, autoClose: 500, icon:"🩸"},setIsDark(false))},3050)
    setTimeout((e)=>{toast.dark("latin stuff",{position: "bottom-left", transition: Flip, autoClose: 500, icon:"🩸"},setIsDark(true))},3100)
    setTimeout((e)=>{toast.dark("latin stuff",{position: "bottom-right", transition: Zoom, autoClose: 500, icon:"🩸"},setIsDark(false))},3200)
    setTimeout((e)=>{toast.dark("latin stuff",{position: "top-right", transition: Flip, autoClose: 500, icon:"🩸"},setIsDark(true))},3225)
    setTimeout((e)=>{toast.dark("latin stuff",{position: "top-left", transition: Slide, autoClose: 500, icon:"🩸"},setIsDark(false))},3250)
    setTimeout((e)=>{toast.dark("latin stuff",{position: "bottom-center", transition: Flip, autoClose: 500, icon:"🩸"},setIsDark(true))},3300)
    setTimeout((e)=>{toast.dark("latin stuff",{position: "top-right", transition: Bounce, autoClose: 500, icon:"🩸"},setIsDark(false))},3320)
    setTimeout((e)=>{toast.dark("latin stuff",{position: "bottom-right", transition: Flip, autoClose: 500, icon:"🩸"},setIsDark(true))},3325)
    setTimeout((e)=>{toast.dark("latin stuff",{position: "bottom-center", transition: Zoom, autoClose: 500, icon:"🩸"},setIsDark(false))},3330)
    setTimeout((e)=>{toast.dark("latin stuff",{position: "bottom-left", transition: Zoom, autoClose: 500, icon:"🩸"},setIsDark(true))},3335)
    setTimeout((e)=>{toast.dark("latin stuff",{position: "top-right", transition: Slide, autoClose: 500, icon:"🩸"},setIsDark(false))},3360)
    setTimeout((e)=>{toast.dark("latin stuff",{position: "bottom-left", transition: Flip, autoClose: 500, icon:"🩸"},setIsDark(true))},3365)
    setTimeout((e)=>{toast.dark("latin stuff",{position: "bottom-right", transition: Zoom, autoClose: 500, icon:"🩸"},setIsDark(false))},3380)
    setTimeout((e)=>{toast.success("um...",{position: "top-center",autoClose:1500, icon:"😟"},setIsDark(true))},4000)
    setTimeout((e)=>{toast.dark("latin stuff",{position: "bottom-left", transition: Zoom, autoClose: 500, icon:"🩸"},setIsDark(false))},5000)
    setTimeout((e)=>{toast.dark("latin stuff",{position: "bottom-right", transition: Zoom, autoClose: 500, icon:"🩸"},setIsDark(true))},5010)
    setTimeout((e)=>{toast.dark("latin stuff",{position: "top-right", transition: Slide, autoClose: 500, icon:"🩸"},setIsDark(false))},5050)
    setTimeout((e)=>{toast.dark("latin stuff",{position: "bottom-center", transition: Zoom, autoClose: 500, icon:"🩸"},setIsDark(true))},5052)
    setTimeout((e)=>{toast.dark("latin stuff",{position: "top-left", transition: Flip, autoClose: 500, icon:"🩸"},setIsDark(false))},5100)
    setTimeout((e)=>{toast.dark("latin stuff",{position: "top-right", transition: Flip, autoClose: 500, icon:"🩸"},setIsDark(true))},5125)
    setTimeout((e)=>{toast.dark("latin stuff",{position: "bottom-right", transition: Zoom, autoClose: 500, icon:"🩸"},setIsDark(false))},5150)
    setTimeout((e)=>{toast.dark("latin stuff",{position: "top-right", transition: Bounce, autoClose: 500, icon:"🩸"},setIsDark(true))},5155)
    setTimeout((e)=>{toast.dark("latin stuff",{position: "top-left", transition: Zoom, autoClose: 500, icon:"🩸"},setIsDark(false))},5160)
    setTimeout((e)=>{toast.dark("latin stuff",{position: "bottom-center", transition: Zoom, autoClose: 500, icon:"🩸"},setIsDark(true))},5161)
    setTimeout((e)=>{toast.dark("latin stuff",{position: "top-left", transition: Flip, autoClose: 500, icon:"🩸"},setIsDark(false))},5170)
    setTimeout((e)=>{toast.dark("latin stuff",{position: "bottom-center", transition: Bounce, autoClose: 500, icon:"🩸"},setIsDark(true))},5185)
    setTimeout((e)=>{toast.dark("latin stuff",{position: "bottom-right", transition: Zoom, autoClose: 500, icon:"🩸"},setIsDark(false))},5190)
    setTimeout((e)=>{toast.dark("latin stuff",{position: "top-left", transition: Bounce, autoClose: 500, icon:"🩸"},setIsDark(true))},5199)
    setTimeout((e)=>{toast.dark("latin stuff",{position: "bottom-center", transition: Flip, autoClose: 500, icon:"🩸"},setIsDark(false))},5200)
    setTimeout((e)=>{toast.dark("latin stuff",{position: "top-right", transition: Zoom, autoClose: 500, icon:"🩸"},setIsDark(true))},5205)
    setTimeout((e)=>{toast.success("well that was weird...",{position: "top-center", autoClose:1500, icon:"😐"},setIsDark(false))},7000)
    setTimeout((e)=>{toast.dark("latin stuff.",{position: "bottom-left", transition:Flip, autoClose: 10, icon:"🩸"})},11000)
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
    toast.success(<BookAlert/>,{position: "top-center", autoClose: false, icon: "📕"}  )
  }
  function handleBookOpen(e){
    e.preventDefault()
    toast.error(<BookOpenAlert/>,{position: "top-center", autoClose: false, icon: "💀"} )
  }

  function BookOpenAlert(){
    return(
    <div><em>"Necronomicon Ex-Mortis...<br/></em><b>The book of the Dead"</b><br/>Should... Should I read it?
    <button onClick={readIt}>Read it</button>
    <button onClick={dontReadIt}>Don't read that thing.</button>
    </div>
  )}

  function dontReadIt(){
    return(
      toast.success("Good Call.",{position: "top-center",autoClose:2000,icon:"😳"})
    )
  }

  function readIt(){
    return(
      toast.success("*Sigh...*",{position: "top-center",autoClose:2000,icon:"😑"})
    )
  }

  function handleClockClick(e){
    e.preventDefault()
    toast.success("Here kitty kitty",{position: "top-center", autoClose: 2800, icon: "😺"}  )
  }


  function handleMirrorClick(e){
    e.preventDefault()
    toast.success(<b>Ahhh! A devil!</b>,{position: "top-center", autoClose: 1300, icon: "😱"}  )
    setTimeout(()=>{toast.success("A handsome one at that.",{position: "top-center", autoClose: 1500, icon: "😏"})},1500)

  }

  function handleFishClick(e){
    e.preventDefault()
    toast.success("Hey there, Goldy!",{position: "top-center", autoClose: 2800, icon: "🦈"}  )
  }

  function handleDresserDrawerClick(e){
    e.preventDefault()
    toast.success("A whole lot of blue shirts and brown pants...",{position: "top-center", autoClose: 2800, icon: "👕"}  )
  }

  function handleRedrumClick(e){
    e.preventDefault()
    toast.success("0101100101? Sounds like gibberish!",{position: "top-center", autoClose: 2800, icon: "🤖"}  )

  }

  function handleWallpaperClick(e){
    e.preventDefault()
    toast.success("The wallpaper is peeling off...",{position: "top-center", autoClose: 1300, icon: "😒"}  )
    setTimeout(()=>{toast.success("Mr. Fancy-Pants Landlord can't be bothered to fix it.",{position: "top-center", autoClose: 1500, icon: "🙄"})},2000)

  }


  // function handleDarknessMyOldFriend(e){
  //   e.preventDefault()

  // }

  toast.configure()
  injectStyle()


//   window.onload = function() {
//     var backgroundAudio=document.getElementById("audio");
//     // backgroundAudio.volume = .1

// }




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
        
        <ReactAudioPlayer src="the_8_bit_charleston.mp3" id="audio" autoPlay controls loop className="audio"/>  

      {isDark?<div className="darkness"> </div>:null}
      </div>




  );
}

export default App;