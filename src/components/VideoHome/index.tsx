import * as S from "./styles";



const VideoHome = () => {
  const playVideos = () => {
    const video1: HTMLVideoElement =  document.querySelector("#video1")!;
    const video2: HTMLVideoElement = document.querySelector("#video2")!;
    const video3: HTMLVideoElement = document.querySelector("#video3")!;
    video1.play();
    setTimeout(() => video2.play(), 15000);
    setTimeout(() => video3.play(), 30000);
  };
  return (
    <S.Wrapper>
      <S.Button onClick={() => playVideos()}>PLAY VIDEO</S.Button>
      <S.VideoContent>
        <video
          id="video1"
          src="/video/video-home-1.mp4"
          style={{ width: "225px", height: "400px" }}
        />
        <video
          id="video2"
          src="/video/video-home-2.mp4"
          style={{ width: "225px", height: "400px" }}
        />
        <video
          id="video3"
          src="/video/video-home-3.mp4"
          style={{ width: "225px", height: "400px" }}
        />
        </S.VideoContent>
    </S.Wrapper>
  );
};
export default VideoHome;
