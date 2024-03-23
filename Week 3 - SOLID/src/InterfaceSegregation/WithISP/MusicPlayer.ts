export default class MusicPlayer implements ILibraryViewer, IMusicPlayer {
    playMusic(songTitle: string): void {
        console.log(`Playing music: ${songTitle}`);
    }

    // Play video method no longer required to be implemented

    // Implemented from ILibraryViewer
    browseLibrary(): string[] {
        return ["song1", "song2", "song3"];
    }
}