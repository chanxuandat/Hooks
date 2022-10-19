import { forwardRef, useImperativeHandle, useRef } from "react";
import video1 from "../videos/m3.mp4";

function Video(props, ref) {
  const videoRef = useRef();
  useImperativeHandle(ref, () => ({
    play() {
      videoRef.current.play()
    },
    pause() {
      videoRef.current.pause()
    }
  }))
  return (
    <video
      src={video1}
      ref={ref}
      width={280}
   controls
      style={{ padding: "23px" }}
    />
  );
}

export default forwardRef(Video);
