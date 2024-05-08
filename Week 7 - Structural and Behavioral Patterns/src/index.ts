import Mp3Player from "./Adapter/ExistingImplementation/Mp3Player";
import MusicStreamingService from "./Adapter/NewImplementation/MusicStreamer";
import StreamingServiceAdapter from "./Adapter/NewImplementation/StreamingServiceAdapter";
import FileObject from "./Composite/FileObject";
import Folder from "./Composite/Folder";
import DvdPlayer from "./Facade/DVDPlayer";
import HomeTheaterFacade from "./Facade/HomeTheaterFacade";
import Lights from "./Facade/Lights";
import Projector from "./Facade/Projector";
import SoundSystem from "./Facade/SoundSystem";

 
// Existing Audio Example
const audioPlayer = new Mp3Player();
audioPlayer.playAudio("favorite_song.mp3");
console.log();


// Adapter Client example
const newStreamingService = new MusicStreamingService();
const adaptedPlayer = new StreamingServiceAdapter(newStreamingService);

adaptedPlayer.playAudio("favorite_song.mp3"); // Output: Streaming track with ID: favorite_song
console.log();

// Composite Pattern Example
// Creating files
const file1 = new FileObject("file1.txt", 1400);
const file2 = new FileObject("file2.txt", 2200);
const file3 = new FileObject("file3.txt", 500);

// Creating a folder and adding files to it
const folder = new Folder("My Folder");
folder.add(file1);
folder.add(file2);
folder.add(file3);

// Creating a subfolder and adding it to the main folder
const subfolder = new Folder("Subfolder");
const file4 = new FileObject("file4.txt", 700);
subfolder.add(file4);
folder.add(subfolder);

// Client code that interacts with both files and folders
console.log(`Total Size of '${folder.name}': ${folder.getSize()} bytes`); // Output will include sizes of all files and subfolders
console.log();

// Facade Example
// Creating components
const projector = new Projector();
const dvdPlayer = new DvdPlayer();
const soundSystem = new SoundSystem();
const lights = new Lights();

// Creating the facade
const homeTheater = new HomeTheaterFacade(projector, dvdPlayer, soundSystem, lights);

// Using the facade to watch a movie
homeTheater.watchMovie("Inception");
console.log();

// Ending the movie
homeTheater.endMovie();
console.log();