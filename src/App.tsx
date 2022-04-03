import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import {
  ClientConfig,
  IAgoraRTCRemoteUser,
  ICameraVideoTrack,
  IMicrophoneAudioTrack,
} from "agora-rtc-sdk-ng";
import {
  AgoraVideoPlayer,
  createClient,
  createMicrophoneAndCameraTracks,
} from "agora-rtc-react";
import VideoCall from "./VideoCall";
import ChannelForm from "./ChannelForm";

const config: ClientConfig = {
  mode: "rtc",
  codec: "vp8",
};
export const token: string | null = null;
export const appId: string = "bfcc0303d2cc4ffba43f910861bc67a5"; //ENTER APP ID HERE
function App() {
  const [inCall, setInCall] = useState(false);
  const [channelName, setChannelName] = useState("");
  return (
    <div>
      <h1 className="heading">Agora RTC NG SDK React Wrapper</h1>
      {inCall ? (
        <VideoCall setInCall={setInCall} channelName={channelName} />
      ) : (
        <ChannelForm setInCall={setInCall} setChannelName={setChannelName} />
      )}
    </div>
  );
}

export default App;

export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
