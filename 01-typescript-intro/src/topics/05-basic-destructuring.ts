interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015,
    },
};

const {
    song: anotherSong,
    songDuration: duration,
    details
} = audioPlayer;

//Desestructure complex object inside interfaces:
console.log({ song: anotherSong });
console.log({ songDuration: duration });

const {author, year} = details
console.log({author, year});

export { };