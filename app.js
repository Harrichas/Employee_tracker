// Import the mysql package
const mysql = require('mysql2');

// Import Constants Choice Variables
const [ALL_SONGS_BY_ARTIST, ARTISTS_WITH_TWO_OR_MORE_SONGS, 
       SONGS_BY_RANGE, SPECIFIC_SONG, TOP_SONG_AND_ALBUM_BY_ARTIST] = require('./lib/const');

// Import Prompt Functions
const {promptChoices, promptArtistName,promptRange,promptSong} = require('./lib/prompts');

// Import Query Functions
const  {artistSearch, multiSearch, rangeSearch, songSearch, songAndAlbumSearch} = require('./lib/queries');


// Connect to the top_songsDB database using a localhost connection
const connection = mysql.createConnection({
    host: 'localhost',

    // Your port, if not 3306
    port: 3306,

    // Your MySQL username
    user: 'root',

    // Your MySQL password (leave blank for class demonstration purposes; fill in later)
    password: 'password',

    // Name of database
    database: 'top_songsDB',
});

connection.connect(async (err) => {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId);
    await runSearch();
    connection.end();
});

async function runSearch() {

    let answer, artist, range;

    answer = await promptChoices();

    switch (answer.name) {
        case ALL_SONGS_BY_ARTIST:
            artist = await promptArtistName();
            artistSearch(connection, artist.name);
            break;

        case ARTISTS_WITH_TWO_OR_MORE_SONGS:
            multiSearch(connection);
            break;

        case SONGS_BY_RANGE:
            range = await promptRange();
            rangeSearch(connection, range.start, range.end);
            break;

        case SPECIFIC_SONG:
            song = await promptSong();
            songSearch(connection,song.title);
            break;

        case TOP_SONG_AND_ALBUM_BY_ARTIST:
            artist = await promptArtistName();
            songAndAlbumSearch(connection, artist.name);
            break;
    };
}