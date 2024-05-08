import AudioPlayer from "../ExistingImplementation/IAudioPlayer";
import MusicStreamingService from "./MusicStreamer";

export default class StreamingServiceAdapter implements AudioPlayer {
  // adapter wraps the incomplatiable MusicStreamingService
  private streamingService: MusicStreamingService;

  constructor(streamingService: MusicStreamingService) {
    this.streamingService = streamingService;
  }

  playAudio(fileName: string): void {
    // Convert filename to a track ID assumed to be needed by the streaming service
    const trackId = this.convertFileNameToTrackID(fileName);
    this.streamingService.streamTrack(trackId);
  }

  private convertFileNameToTrackID(fileName: string): string {
    // A simple method to convert a file name to a track ID
    return fileName.replace(".mp3", "");
  }
}
