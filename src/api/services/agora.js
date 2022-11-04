import { createClient, createMicrophoneAndCameraTracks, SDK_CODEC, SDK_MODE } from "agora-rtc-react";

const appId = "3fe2a01586fa4e7e949c6d9ac3b847f2";
const token =
  "007eJxTYHBa/HqxylTDK+EBN5WP2p2Sld13i2MnV91Csaa4LdN1VUUVGIzTUo0SDQxNLczSEk1SzVMtTSyTzVIsE5ONkyxMzNOMkhelJjcEMjK8Of+ZiZEBAkF8FobcxMw8BgYA/rEfFQ==";

export const config = { mode: "rtc", codec:"vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "main";