export default class MusicStreamingService {
    // Streaming service expects a track ID and doesn't have a play audio method
    streamTrack(trackId: string): void {
        console.log(`Streaming track with ID: ${trackId}`);
    }
}