let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

let track_index = 0;
let isPlaying = false;
let updateTimer;

// 创建新音频元素
let curr_track = document.createElement('audio');

// 定义要播放的曲目
let track_list = [{
  name: "Enthusiast",
  artist: "Tours",
  image: "/assets/pexels-photo-3100835.jpeg",
  path: "/assets/Tours_-_01_-_Enthusiast.mp3"
}, {
  name: "Night Owl",
  artist: "Broke For Free",
  image: "/assets/pexels-photo-2264753.jpeg",
  path: "/assets/Broke_For_Free_-_01_-_Night_Owl.mp3"
}, {
  name: "Shipping Lanes",
  artist: "Chad Crouch",
  image: "/assets/pexels-photo-1717969.jpeg",
  path: "/assets/Chad_Crouch_-_Shipping_Lanes.mp3"
}];

// 随机背景颜色
function random_bg_color() {
  // 生成 64 到 256 之间的一个数字（生成较淡的颜色）
  let red = Math.floor(Math.random() * 256) + 64;
  let green = Math.floor(Math.random() * 256) + 64;
  let blue = Math.floor(Math.random() * 256) + 64;

  // 构造一个用给定值的颜色
  let bgColor = "rgb(" + red + "," + green + "," + blue + ")";

  // 设置背景为该颜色
  document.body.style.background = bgColor;
}

// 加载指定的音乐文件
function loadTrack(track_index) {
  // 清空更新定时器
  clearInterval(updateTimer);
  // 重置值
  resetValues();
  // 设置正在播放的曲目
  curr_track.src = track_list[track_index].path;
  // 加载正在播放的曲目
  curr_track.load();

  // 设置正在播放曲目的图片
  track_art.style.backgroundImage = "url(" + track_list[track_index].image + ")";
  // 设置正在播放曲目的名称
  track_name.textContent = track_list[track_index].name;
  // 设置正在播放曲目的艺术家
  track_artist.textContent = track_list[track_index].artist
  // 设置正在播放曲目的序号
  now_playing.textContent = "PLAYING " + (track_index + 1) + " OF " + track_list.length;

  // 每 1000 ms 更新一次
  updateTimer = setInterval(seekUpdate, 1000);
  // 监听事件，播放结束后播放下一首
  curr_track.addEventListener("ended", nextTrack);
  // 随机设置背景颜色
  random_bg_color();
}

// 重置值
function resetValues() {
  curr_time.textContent = "00:00";
  total_duration.textContent = "00:00";
  seek_slider.value = 0;
}

// 加载播放列表中的第一首歌
loadTrack(track_index);

// 播放、暂停当前曲目
function playpauseTrack() {
  if (!isPlaying) playTrack();
  else pauseTrack();
}

// 播放当前曲目
function playTrack() {
  curr_track.play();
  isPlaying = true;
  playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}

// TODO：暂停当前曲目
function pauseTrack() {
  // TODO 
}

// 下一首
function nextTrack() {
  if (track_index < track_list.length - 1)
    track_index += 1;
  else track_index = 0;
  loadTrack(track_index);
  playTrack();
} 

// TODO：上一首
function prevTrack() {
  // 如果当前曲目不是第一首，则把当前曲目改为上一首
  // 如果当前曲目是第一首，则把当前曲目改为最后一首
  // 加载当前曲目
  // 播放当前曲目
}

// 设置音乐播放进度条
function seekTo() {
  let seekto = curr_track.duration * (seek_slider.value / 100);
  curr_track.currentTime = seekto;
}

// 设置音量
function setVolume() {
  curr_track.volume = volume_slider.value / 100;
}

// 更新音乐播放进度条和时间显示
function seekUpdate() {
  let seekPosition = 0;

  if (!isNaN(curr_track.duration)) {
    // 计算并设置进度条位置
    seekPosition = curr_track.currentTime * (100 / curr_track.duration);
    seek_slider.value = seekPosition;
    
    // 格式化当前时间和总时长
    let currentMinutes = Math.floor(curr_track.currentTime / 60);
    let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(curr_track.duration / 60);
    let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);
    
    // TODO：格式化时间为 "mm:ss" 的形式    

    // 显示当前时间和总时长
    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    total_duration.textContent = durationMinutes + ":" + durationSeconds;
  }
}


