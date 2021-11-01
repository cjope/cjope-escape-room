import './App.css';
// import ReactAudioPlayer from 'react-audio-player';
import "react-toastify/dist/ReactToastify.css"
import { Bounce, Flip, Slide, toast, Zoom } from 'react-toastify';
import {useState } from 'react';
import { injectStyle } from "react-toastify/dist/inject-style";


function App() {



  function handleComment1(e, commentString, commentIcon, closeTime=2000){
    e.preventDefault()
    toast.success(commentString,{position:"top-center", transition:Flip, autoClose:closeTime,icon:`${commentIcon}`})
  }

  
  // function handleComment2(e, commentString, closeTime, commentIcon, timeoutTime){
  //   e.preventDefault()
  //   setTimeout(toast.success(commentString,{position:"top-center", transition:Flip, autoClose:closeTime,icon:`${commentIcon}`}),timeoutTime)
  // }


  // function CustomAlertChoice(commentString,op1Text, op2Text){
  //   return(
  //     <div>{commentString} <br/>
  //       <button onClick={handleComment1}>{op1Text}</button>
  //       <button onClick={handleComment2}>{op2Text}</button>
  //     </div>
  //   )
  // }


  // function handleCommentMulti(e, commentString, closeTime, commentIcon, op1Handler, op1Text, op2Handler, op2Text){
  //   e.preventDefault()
  //   toast.success(<CustomAlert commentString={commentString} op1Handler={op1Handler} op1Text={op1Text} op2Handler={op2Handler} op2Text={op2Text} />, {position: "top-center",autoClose: closeTime, icon: commentIcon})
  // }


  

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
 
  // function latinStuff(messagePosition, messageTransition){
  //   setTimeout(toast.dark("latin stuff",{position:`${messagePosition}`, transition:`${messageTransition}`,autoClose:500, icon:"🩸",},setIsDark(!isDark))},timeoutTime))})
  // }

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
    <button onClick={(e)=>{handleComment1(e,"*Sigh...*", "😑")}}>Read it</button>
    <button onClick={(e)=>{handleComment1(e,"Good call.", "😳")}}>Don't read that thing.</button>
    </div>
  )}

  function handleClockClick(e){
    handleComment1(e,"Here kitty kitty!","🐈")
    setTimeout(()=>{handleComment1(e,"Any chance you can help meow-t of this room?", "😹",2800)},2500)
  }
  
  
  function handleMirrorClick(e){
    handleComment1(e,<b>Ahhh! A devil!</b>,"😱")
    setTimeout(()=>{handleComment1(e,"A handsome one at that!", "😏",2800)},2500)
  }

  function handleRedrumClick(e){
    e.preventDefault()
    handleComment1("0101100101? Sounds like gibberish!", "🤖")
  }

  function handleWallpaperClick(e){
    e.preventDefault()
    toast.success("The wallpaper is peeling off...",{position: "top-center", autoClose: 1300, transition:Flip, icon: "😒"}  )
    setTimeout(()=>{toast.success("Mr. Fancy-Pants Landlord can't be bothered to fix it.",{position: "top-center", autoClose: 1500, transition:Flip, icon: "🙄"})},2000)
  }

  let music = new Audio("./the_8_bit_charleston.mp3")

  function handleRadioOn(){
    music.play()
    toast.success("Groovy.",{position: "top-center", transition:Flip, icon: "😎"}  )
  }
  function handleRadioOff(){
    music.pause()
  }
  function RadioAlert(){
    return(
    <div>My radio!<br/>
        <button onClick={handleRadioOn}>Turn on</button>
        <button onClick={handleRadioOff}>Turn Off</button>
      </div>
  )}

  function handleRadioClick(e){
    e.preventDefault()
    toast.success(<RadioAlert />,{position: "top-center", autoClose: false, transition:Flip, icon: "📻"} )
  }

  toast.configure()
  injectStyle()

  return (
      <div className="background-pic">
        {!candleActive?<a className="candle" href="candle-unlit1" onClick={handleCandleClick}> </a>:
        <a className="candle-lit"href="candle-lit"onClick={handleLitCandleClick}> </a>}

        {!bookActive?<a className="necronomicon-closed" href="necronomicon1" onClick={handleBookClosed}> </a>:
        <a className="necronomicon-open" href="necronomicon2" onClick={handleBookOpen}> </a>}

        <a className="clock" href="clock"onClick={(e)=>{handleClockClick(e, "Here kitty kitty!", 2000, "😹", )}}> </a>
        <a className="fish" href="fish"onClick={(e)=>{handleComment1(e, "Hey there, Quint!", "🦈")}}> </a>
        <a className="dresser-drawer" href="dresser-drawer"onClick={(e)=>{handleComment1(e, "A whole lot of blue shirts and brown pants.", "👔")}}> </a>
        <a className="torn-wallpaper" href="torn-wallpaper"onClick={handleWallpaperClick}> </a>
        <a className="redrum-wallpaper" href="redrum-wallpaper"onClick={handleRedrumClick}> </a>
        <a className="mirror" href="mirror"onClick={handleMirrorClick}> </a>
        {/* <a className="mirror-redrum" href="mirror-redrum"onClick={(e)=>{handleComment1("0101100101? Sounds like gibberish!", "🤖")})}> </a> */}
        <a className="radio" href="radio" onClick={handleRadioClick}> </a>
        <a className="broomstick" href="broomstick" onClick={(e)=>{handleComment1(e, "This... is my BROOMSTICK!", "🧹")}}> </a>
        <a className="doorknob" href="doorknob" onClick={(e)=>{handleComment1(e, "It doesn't seem to open.", "🚪")}}> </a>
        <a className="desk-drawer" href="desk-drawer" onClick={(e)=>{handleComment1(e, "Look at this junk!", "🗃")}}> </a>
        {/* <a className="ash" href="ash" onClick={handleAshClick}> </a> */}
        {/* <a className="ash-saw" href="ash-saw" onClick={handleAshClick}> </a> */}
        {/* <a className="sans-hand" href="sans-hand" onClick={handleAshClick}> </a> */}
        {/* <img className="sans-hand"></img> */}

        {/* <ReactAudioPlayer src="the_8_bit_charleston.mp3" id="audio" style={{opacity:1, width:"40px", overflow:"hidden"}} autoPlay controls loop className="radio "/>   */}

        {/* <ReactAudioPlayer src="the_8_bit_charleston.mp3" id="radio  " loop className="radio "/>   */}


      {isDark?<div className="darkness"> </div>:null}
      </div>




  );
}

export default App;