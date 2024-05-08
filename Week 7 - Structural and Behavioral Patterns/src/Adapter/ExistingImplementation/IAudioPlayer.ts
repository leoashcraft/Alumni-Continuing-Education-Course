export default interface IAudioPlayer {
    // Existing Interface has a play audio method which expects a file name
    playAudio(fileName: string): void;
}