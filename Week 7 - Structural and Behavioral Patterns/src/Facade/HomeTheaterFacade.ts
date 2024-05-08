
import DvdPlayer from "./DVDPlayer";
import Lights from "./Lights";
import Projector from "./Projector";
import SoundSystem from "./SoundSystem";

export default class HomeTheaterFacade {
    private projector: Projector;
    private dvdPlayer: DvdPlayer;
    private soundSystem: SoundSystem;
    private lights: Lights;

    constructor(projector: Projector, dvdPlayer: DvdPlayer, soundSystem: SoundSystem, lights: Lights) {
        this.projector = projector;
        this.dvdPlayer = dvdPlayer;
        this.soundSystem = soundSystem;
        this.lights = lights;
    }

    watchMovie(movie: string): void {
        console.log("Get ready to watch a movie...");
        this.lights.dim();
        this.projector.on();
        this.soundSystem.on();
        this.soundSystem.setVolume(10);
        this.dvdPlayer.on();
        this.dvdPlayer.play(movie);
    }

    endMovie(): void {
        console.log("Shutting down the home theater...");
        this.dvdPlayer.off();
        this.soundSystem.off();
        this.projector.off();
        this.lights.brighten();
    }
}