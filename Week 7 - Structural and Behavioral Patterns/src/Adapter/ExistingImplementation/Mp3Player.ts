import AudioPlayer from "./IAudioPlayer";

export default class Mp3Player implements AudioPlayer {
    playAudio(fileName: string): void {
        console.log(`Playing audio File: ${fileName}`);   
    }
}
