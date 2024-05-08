export default class DvdPlayer {
    on() {
        console.log("DVD Player turned on.");
    }
    off() {
        console.log("DVD Player turned off.");
    }
    play(movie: string) {
        console.log(`Playing "${movie}"`);
    }
}