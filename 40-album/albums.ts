function make_album(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
    let album: { artist: string, title: string, tracks?: number } = {
        artist: artist,
        title: title
    };

    if (tracks !== undefined) {
        album.tracks = tracks;
    }

    return album;
}

// Call the function to create three dictionaries representing different albums
console.log(make_album('Artist1', 'Album1'));
console.log(make_album('Artist2', 'Album2', 12));
console.log(make_album('Artist3', 'Album3'));

// Call the function with an optional parameter for the number of tracks
console.log(make_album('Artist4', 'Album4', 10));
