export default class MusicPlayer implements IMultimediaPlayer {
    playMusic(songTitle: string): void {
        console.log(`Playing music: ${songTitle}`);
    }

    playVideo(videoTitle: string): void {
        // Problem: MusicPlayer shouldn't need to implement this
        // Problem 2: If the video player's playVideo method needs to be altered, MusicPlayer
        // and all inheriting classes will be affected
        throw new Error("This player only plays music.");
    }

    // Shared method shoudld be implemented by both the MusicPlayer and the VideoPlayer classes
    browseLibrary(): string[] {
        return ["song1", "song2", "song3"];
    }
}