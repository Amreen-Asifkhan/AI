let btn =document.querySelector("#btn")
let content=document.querySelector("#content")

function speak (text){
    let text_speak =new SpeechSynthesisUtterance(text);
    text_speak.rate= 1;
    text_speak.pitch= 1;
    text_speak.volume= 1;
    text_speak.lang= "en-US";
    window.speechSynthesis.speak(text_speak)
}


let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; 
let recognition = new speechRecognition();

recognition.onresult=(event)=>{
   let currentIndex= event.resultIndex;
   let transcript=event.results[currentIndex][0].transcript
   content.innerText=transcript
   takeCommand(transcript.toLowerCase());
    console.log(event)
}
btn.addEventListener("click",()=>{
    recognition.start()
})
function takeCommand (message){
 
    if(message.includes("who are you")){
        speak("I am ELLI A VIRTUAL ASSITANT");
    }
     
     else if(message.includes("how are you")){
        speak(" Hello dear,I am fine");
     }
       
     else if(message.includes("Assalamualikum")){
       speak("walikumsalam");
     }
       
     else if(message.includes("what is your name")){
        speak("ELLI");
     }
      else if ("go to youtube"){
        speak("opening youtube")
        window.open("https://www.youtube.com/")
      }
    else{
        speak("sorry I am not understand")
    }
}
