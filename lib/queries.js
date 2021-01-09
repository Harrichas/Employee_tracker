async function artistSearch(connection, artistName) {
    const SQL_STATEMENT = `SELECT * FROM top1000 WHERE artist = ?`;

    try {
        const [rows, fields] = await connection.promise().query(SQL_STATEMENT, [artistName]);
        console.table(rows);
    } catch (error) {
        console.log(error);
    }
}

async function multiSearch(connection) {
    const SQL_STATEMENT = `SELECT artist FROM top1000 GROUP BY artist HAVING COUNT(*) > 1`;

    try {
        const [rows, fields] = await connection.promise().query(SQL_STATEMENT);
        console.table(rows);
    } catch (error) {
        console.log(error);
    }
}

async function rangeSearch(connection, start, end) {
    const SQL_STATEMENT = `SELECT * FROM top1000 WHERE position BETWEEN ? AND ?`;

    try {
        const [rows, fields] = await connection.promise().query(SQL_STATEMENT, [start, end]);
        console.table(rows);
    } catch (error) {
        console.log(error);
    }
}

async function songSearch(connection, songTitle) {
    const SQL_STATEMENT = `SELECT * FROM top1000 WHERE song = ?`;

    try {
        const [rows, fields] = await connection.promise().query(SQL_STATEMENT, songTitle);
        console.table(rows);
    } catch (error) {
        console.log(error);
    }
}

async function songAndAlbumSearch(connection, artistName) {
    const SQL_STATEMENT = `SELECT * 
                           FROM top1000 
                           INNER JOIN top_album ON top1000.artist = top_album.artist AND top1000.year = top_album.year 
                           WHERE top_album.artist = ?
                           ORDER BY top_album.year, top_album.position`;

    try {
        const [rows, fields] = await connection.promise().query(SQL_STATEMENT, [artistName]);
        console.table(rows);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    artistSearch, 
    multiSearch,
    rangeSearch,
    songSearch,
    songAndAlbumSearch
};