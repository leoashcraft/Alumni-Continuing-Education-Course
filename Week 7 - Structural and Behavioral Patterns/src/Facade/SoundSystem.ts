export default class SoundSystem {
    on() {
        console.log("Sound system turned on.");
    }
    off() {
        console.log("Sound system turned off.");
    }
    setVolume(level: number) {
        console.log(`Volume set to ${level}`);
    }
}