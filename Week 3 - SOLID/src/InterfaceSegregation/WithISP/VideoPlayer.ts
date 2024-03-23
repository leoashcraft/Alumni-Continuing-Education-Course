export default class VideoPlayer implements ILibraryViewer, IVideoPlayer {

    // PlayMusic method no longer required to be implemented

    playVideo(videoTitle: string): void {
        console.log(`Playing music: ${videoTitle}`);
    }

    // Implemented from ILibraryViewer
    browseLibrary(): string[] {
        return ["song1", "song2", "song3"];
    }
}