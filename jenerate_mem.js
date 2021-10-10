const memeShit = document.querySelector('.memeShit');
const memeArr = ['https://media.makeameme.org/created/rng-rng-everywhere.jpg',
'http://www.quickmeme.com/img/5f/5f62fb3150a1ad1b95c6a103229b6c690d980d07dddad01ea4d0294dfab0a866.jpg',
'https://media.makeameme.org/created/yeah-so-rng.jpg',
'https://fftg.files.wordpress.com/2017/10/rng-meme.jpg',
'https://www.mememaker.net/static/images/memes/4791771.jpg',
'https://meme-generator.com/wp-content/uploads/mememe/2019/07/mememe_14735c174b90195634a12f875eb57664-1.jpg',
'https://memegenerator.net/img/instances/75919004.jpg',
'https://i.kym-cdn.com/photos/images/facebook/000/963/476/cf3.jpg',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUBkrbeS2uB5ZTIFP6U522XvnNDte9OXhGD8vUHYvtScGaUO6ZlXF-Ct8V9c41SAoO9JY&usqp=CAU',
'https://d3kxs6kpbh59hp.cloudfront.net/community/COMMUNITY/e997883c0df54aaf93f58d9c199d8fdc/46414982792140f4a509121372276e62_1589574344.png'];
const secretMeme = 'https://memegenerator.net/img/instances/23965785/bad-rng-bad-rng-everywhere.jpg';
const secretMemePrograming = 'https://assets-global.website-files.com/5f3c19f18169b62a0d0bf387/60d33bf3a2121cc74f72a286_0AEnnZYBAYzmSXzyGaopjvEGKKO1yFqf_zMXqFTAT6vUDfXVPRifI3J8oBjZUl51PnRQqf2tqpjiRt33IKgg4sTiJi2YShGTN5iNUIoYbNj2HXobiQg4-k7yBiNT54EKOGYyZOR2.png';
const RNGSelector = Math.floor(Math.random()*10);
const secretRNG = Math.floor(Math.random()*10);

if (RNGSelector === 0 && secretRNG === 0) {
    memeShit.src = secretMeme;
} else if (RNGSelector === 6 && secretRNG === 9) {
    memeShit.src = secretMemePrograming;
} else if (RNGSelector === 4 && secretRNG === 2) {
    memeShit.src = '';
} else {
    memeShit.src = memeArr[RNGSelector]
};