import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "3fe2a01586fa4e7e949c6d9ac3b847f2";
const token =
  "007eJxTYDh79i/Tsj1GgcKLPP6sKtA5Gv5FnKli8k12r0lVi3Z0fIlXYDBOSzVKNDA0tTBLSzRJNU+1NLFMNkuxTEw2TrIwMU8z0mNNTW4IZGQosuVjZWSAQBCfhSE3MTOPgQEAaioerA==";

export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "main";