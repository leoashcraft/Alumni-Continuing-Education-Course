export default class VideoPlayer implements IMultimediaPlayer {
    playMusic(songTitle: string): void {
        // Problem: VideoPlayer shouldn't need to implement this
        // Problem 2: If the mustic player's playMusic method needs to be altered, VideoPlayer
        // and all inheriting classes will be affected
        throw new Error("This player only plays video.");
    }

    playVideo(videoTitle: string): void {
        console.log(`Playing music: ${videoTitle}`);
       
    }

    // Shared method shoudld be implemented by both the MusicPlayer and the VideoPlayer classes
    browseLibrary(): string[] {
        return ["video1", "video2", "video3"];
    }
}