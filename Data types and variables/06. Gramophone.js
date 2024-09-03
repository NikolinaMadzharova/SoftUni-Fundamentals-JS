function gramophone(band, album, song){
let songTime=album.length * band.length * song.length/2;
let rotations= Math.ceil(songTime/2.5);

console.log(`The plate was rotated ${rotations} times.`);

}

gramophone('Rammstein', 'Sehnsucht', 'Engel');