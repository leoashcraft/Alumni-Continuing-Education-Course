interface IMultimediaPlayer {
    playMusic(songTitle: string, artist: string): void;
    playVideo(videoTitle: string): void;
    browseLibrary(): string[];
}