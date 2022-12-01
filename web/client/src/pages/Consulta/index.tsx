import { IconButton } from '@mui/material';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { useEffect, useRef, useState } from 'react';



const Consulta: React.FC = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyDxe35e5EOKk5vLAFVf9fg4yE2TcZZPmRg",
        authDomain: "vocare-366615.firebaseapp.com",
        projectId: "vocare-366615",
        storageBucket: "vocare-366615.appspot.com",
        messagingSenderId: "461111192210",
        appId: "1:461111192210:web:d73859e4faa75dc795d44b",
        measurementId: "G-B2WNY94KD9"
    };

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    const firestore = firebase.firestore();

    const servers = {
        iceServers: [
            {
                urls: ['stun:stun.l.google.com:19302', 'stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302'],
            },
        ],
        iceCandidatePoolSize: 10,
    };

    const pc = new RTCPeerConnection(servers);
    //let localStream: MediaStream;
    //let remoteStream: MediaStream;

    const [localStream, setLocalStream] = useState<MediaStream | null>(null);
    const [remoteStream, setRemoteStream] = useState<MediaStream | null>(null);
    const webcamVideo = useRef<HTMLVideoElement>(null);
    const remoteVideo = useRef<HTMLVideoElement>(null);
    const [camera, setCamera] = useState(true);
    const [input, setInput] = useState("");

    useEffect(() => {
        const enableStream = async () => {
            var local = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
            setLocalStream(local);
            var remote = new MediaStream();
            setRemoteStream(remote);
            

            


        }
        if (!localStream) {
            enableStream();
        }
        // Push tracks from local stream to peer connection
        localStream?.getTracks().forEach((track) => {
            pc.addTrack(track, localStream);
        });

        // Pull tracks from remote stream, add to video stream
        pc.ontrack = (event) => {
            event.streams[0].getTracks().forEach((track) => {
                remoteStream?.addTrack(track);
            });
        };
        if (!webcamVideo.current) return
        webcamVideo.current.srcObject = localStream;
        if (!remoteVideo.current) return
        remoteVideo.current.srcObject = remoteStream;

    }, [localStream, remoteStream]);

    function btnCamera() {
        setCamera(!camera);
        if (localStream) {
            var local = localStream;
            local.getVideoTracks()[0].enabled = camera;
            setLocalStream(local);
        }
    }

    async function btnSala() {
        const callDoc = firestore.collection('calls').doc('fWq6rfzDFB0EPYuLbJIP');
        const offerCandidates = callDoc.collection('offerCandidates');
        const answerCandidates = callDoc.collection('answerCandidates');

        console.log(callDoc.id);

        // Get candidates for caller, save to db
        pc.onicecandidate = (event) => {
            console.log(event.candidate);
            event.candidate && offerCandidates.add(event.candidate.toJSON());
            console.log(callDoc.id, "ok2");
        };

        // Create offer
        const offerDescription = await pc.createOffer();
        await pc.setLocalDescription(offerDescription);

        const offer = {
            sdp: offerDescription.sdp,
            type: offerDescription.type,
        };
        await callDoc.set({ offer });
        console.log('ok')

        // Listen for remote answer
        callDoc.onSnapshot((snapshot) => {
            const data = snapshot.data();
            if (!pc.currentRemoteDescription && data?.answer) {
                const answerDescription = new RTCSessionDescription(data.answer);
                pc.setRemoteDescription(answerDescription);
            }
        });

        // When answered, add candidate to peer connection
        answerCandidates.onSnapshot((snapshot) => {
            snapshot.docChanges().forEach((change) => {
                if (change.type === 'added') {
                    const candidate = new RTCIceCandidate(change.doc.data());
                    console.log(candidate);
                    pc.addIceCandidate(candidate);
                }
            });
        });
    }

    async function entrarSala() {
        const callId = 'fWq6rfzDFB0EPYuLbJIP';
        const callDoc = firestore.collection('calls').doc(callId);
        const answerCandidates = callDoc.collection('answerCandidates');
        const offerCandidates = callDoc.collection('offerCandidates');

        pc.onicecandidate = (event) => {
            event.candidate && answerCandidates.add(event.candidate.toJSON());
        };

        const callData = (await callDoc.get()).data();

        const offerDescription = callData?.offer;
        await pc.setRemoteDescription(new RTCSessionDescription(offerDescription));

        const answerDescription = await pc.createAnswer();
        await pc.setLocalDescription(answerDescription);

        const answer = {
            type: answerDescription.type,
            sdp: answerDescription.sdp,
        };

        await callDoc.update({ answer });


        try {
            offerCandidates.onSnapshot(querySnapshot => {
                console.log(querySnapshot);
                querySnapshot.docChanges().forEach(change => {
                    console.log(change);
                    if (change.type === 'added') {
                        let data = change.doc.data();
                        pc.addIceCandidate(new RTCIceCandidate(data));
                        console.log("ok2");

                    }
                });
            });
        } catch (error) {
            console.log(error)
        }
        pc.ontrack = function (event) {
            console.log(event);
        };

    }

    return (
        <div>
            <div className="videos">
                <span>
                    <h3>Local Stream</h3>
                    <video id="webcamVideo" autoPlay playsInline ref={webcamVideo}></video>
                </span>
                <span>
                    <h3>Remote Stream</h3>
                    <video id="remoteVideo" autoPlay playsInline ref={remoteVideo}></video>
                </span>

                <IconButton onClick={btnCamera}>camera</IconButton>
                <IconButton onClick={btnSala}>criar sala</IconButton>
                <IconButton onClick={entrarSala}>entrar</IconButton>
                <input type='text' onChange={(e) => setInput(e.target.value)} />
            </div>
        </div>
    );
};

export default Consulta;
