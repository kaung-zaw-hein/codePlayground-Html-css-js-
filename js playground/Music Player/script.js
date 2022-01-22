const playlistContainerTag = document.getElementsByClassName(
  "playlistContainer"
)[0];
const currentAndTotleTime = document.getElementsByClassName("currentAndTotleTime")[0];
const currentProgress = document.getElementById("currentProgress");

const audioTag = document.getElementsByClassName("audioTag")[0];
const playButton=  document.getElementsByClassName("playButton")[0];
const pauseButton = document.getElementsByClassName("pauseButton")[0];
const previousButton = document.getElementsByClassName("previousButton")[0];
const nextButton = document.getElementsByClassName("nextButton")[0];

const tracks = [
  { trackId: "music/track1.mp3", title: "December Nya - Lin Nat" },
  { trackId: "music/track2.mp3", title: "Tsaw Ra Ai Tsaw Hkrup Sai - Ann Naw" },
  {
    trackId: "music/track3.mp3",
    title: "Lann Mha Gyee Yey Bey - Wine Suu Khine Thein",
  },
  { trackId: "music/track4.mp3", title: "Yee Zarr Sar - Sai Sai Kham Hlaing " },
];

for (let i = 0; i < tracks.length; i++) {
  const trackTag = document.createElement("div");
  trackTag.addEventListener("click", () => {
    currentPlayingIndex = i;
    playSong();
  });
  trackTag.classList.add("trackItem");
  const title = (i + 1).toString() + ". " + tracks[i].title;
  trackTag.textContent = title;
  playlistContainerTag.append(trackTag);
}
let duration=0;
let durationText= "00:00"
 audioTag.addEventListener("loadeddata",()=> {
   duration = Math.floor(audioTag.duration);
  durationText = minutesandsecondText(duration);
 });

 audioTag.addEventListener("timeupdate", () => {
  const currentTime = Math.floor(audioTag.currentTime);
  const currenttimeText = minutesandsecondText(currentTime);
  const currenttimeandduration = currenttimeText+"/"+durationText;
  currentAndTotleTime.textContent= currenttimeandduration;
  updateCurrentProgress(currentTime);
});

const updateCurrentProgress = (currentTime) => {
  const currentprogresswidth = (500/duration) *currentTime;
  currentProgress.style.width = currentprogresswidth.toString() +"px"; //"blahblahpx"
}
const minutesandsecondText = (totalduration) =>{
  const  minutes = Math.floor(totalduration/60);
  const seconds  = totalduration%60;

  const minutesText = minutes<10 ? "0"+ minutes.toString() :minutes;
  const secondsText = seconds<10 ? "0"+ seconds.toString() :seconds;
  return minutesText+":"+secondsText;
};
 
let currentPlayingIndex = 0;
let isPlaying = false;
playButton.addEventListener("click", ()=>{
  const currentTime = Math.floor(audioTag.currentTime);
  isPlaying = true;
  if ( currentTime===0){
    playSong();
  }
  else{
    audioTag.play();
    updateplayandpause();
  }
});

pauseButton.addEventListener('click',()=>{
  isPlaying=false;
  audioTag.pause();
  updateplayandpause();
});

previousButton.addEventListener("click",()=>{
  if(currentPlayingIndex===0){
    return;
  }
  currentPlayingIndex -=1;
  playSong();
});

nextButton.addEventListener("click",()=>{
  if(currentPlayingIndex===tracks.length-1){
    return;
  }
  currentPlayingIndex +=1;
  playSong();
});
const playSong = () => {
  const songIdToPlay = tracks[currentPlayingIndex].trackId;
  audioTag.src = songIdToPlay;
  audioTag.play();
  isPlaying = true;
  updatePlayAndPauseButton();
};
updateplayandpause=() => {
  if (isPlaying){
    playButton.style.display= "none";
    pauseButton.style.display="inline";
  }else{
    {
      playButton.style.display= "inline";
      pauseButton.style.display="none";
    }
  }
}