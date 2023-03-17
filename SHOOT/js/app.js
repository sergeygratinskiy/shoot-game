let nlobulletcolor = 'red';
let mybulletcolor = 'red';
let deadformcolor = 'red';

function startgame(){
let leftr = 95;
let topr = 470;
let firenlo = 1;

function randomleftnlo(max) {
  return Math.floor(Math.random() * max);
}

function setnlobul(){
  $('nlobullet').first().remove();
}

let leftnlo = randomleftnlo(155);
let topnlo = randomleftnlo(180);
let leftnlobull = randomleftnlo(155);
let topnlobull = randomleftnlo(180);
let time;
function createnlo() {
setInterval(function() {
 leftnlo = randomleftnlo(155);
 topnlo = randomleftnlo(180);
 leftnlobull = randomleftnlo(155);
 topnlobull = randomleftnlo(180);
});


let nlo = document.createElement("nlo");
nlo.style.width = "40px";
nlo.style.height = "40px";
nlo.style.position = "absolute";
nlo.style.left = leftnlo + "px";
nlo.style.top = topnlo + "px";
nlo.style.background = "green";
if (genshinmodeon == 1) {
  nlo.style.background = "url('css/img/raiden.png')";
}
document.getElementById("start-game").appendChild(nlo);

setInterval(function() {

if (firenlo == 1) {
  let nlobullet = document.createElement("nlobullet");
nlobullet.style.width = "5px";
nlobullet.style.height = "5px";
nlobullet.style.position = "absolute";
nlobullet.style.left = leftnlobull + 15 + 'px';
nlobullet.style.top = topnlobull + 40 + 'px';
nlobullet.style.background = nlobulletcolor;
document.getElementById("start-game").appendChild(nlobullet);
    $('nlobullet').animate({top: 480},3000);

    time = setTimeout(setnlobul, 2850); 
};}, 3000);

}
createnlo();

//движение
$('.rocket').css({'top': topr + 'px'});
  $('.rocket').css({'left': leftr + 'px'});
document.addEventListener('keydown', function(event) {

    if (event.code == 'KeyR') {
    console.log(parseInt($('nlobullet').css('left')) + ">" + parseInt($('.rocket').css('left')) + "&&" + (parseInt($('.rocket').css('left')) + "+" + parseInt($('.rocket').css('width'))) + ">" + parseInt($('nlobullet').css('left')) + "&&" + parseInt($('nlobullet').css('top')) + ">" + parseInt($('.rocket').css('top')) + "&&" + (parseInt($('.rocket').css('top')) +"+"+ parseInt($('.rocket').css('height'))) + ">" + parseInt($('nlobullet').css('top')));
    
    };

    if (event.code == 'KeyA' && (parseInt($('.rocket').css('left'))) > 5) {
      $('.rocket').animate({left: '-=10'},5);
    };
    if (event.code == 'KeyD' && (parseInt($('.rocket').css('left'))) < 170) {
      $('.rocket').animate({left: '+=10'},5);
    };
    if (event.code == 'KeyW' && (parseInt($('.rocket').css('top'))) > 3) {
      // $('.rocket').animate({top: '-=10'},5);
    };
    if (event.code == 'KeyS' && (parseInt($('.rocket').css('top'))) < 475) {
      // $('.rocket').animate({top: '+=10'},5);
    };
});
document.addEventListener('keyup', function(event) {
  if (event.code == 'KeyW' || event.code == 'KeyA'|| event.code == 'KeyS'|| event.code == 'KeyD') {
    $('.rocket').stop($('.rocket').animate());
  };
});
 
// $('.screen').mousemove(function(e){
//    rocket.style.left = e.pageX + "px";
//       rocket.style.top = e.pageY  + "px";
// let top = Math.min(500 + this.offsetTop - 50 + 2, e.pageY);
//       let left = Math.min(230 + this.offsetLeft - 50 + 2, e.pageX);
//       top = Math.max(this.offsetTop + 2, top);
//       left = Math.max(this.offsetLeft + 10, left);
//       $('.rocket').css({'top': top - 10,'left': left - 80});
// });  

function setmybul(){
  $('mybullet').first().remove();
}

//fire
document.addEventListener('keyup', function(event) {

  if (event.code == 'KeyF') {
      let mybullet = document.createElement("mybullet");
mybullet.style.width = "5px";
mybullet.style.height = "5px";
mybullet.style.position = "absolute";
let leftrocket = parseInt(rocket.style.left);
mybullet.style.left = leftrocket + 7 + "px";
mybullet.style.top = rocket.style.top;
mybullet.style.background = mybulletcolor;
document.getElementById("start-game").appendChild(mybullet);
    $('mybullet').animate({top: 0},1000);
    setTimeout(setmybul, 1000);   
    event.preventDefault();
  };
  });

let point = 0;
let dead = 0;
var infokill = document.getElementById('points');
infokill.innerHTML = 'Количество убитых: ' + point; //+'/20'
infokill.style.textAlign = "center";

window.setInterval(function () { 
let textgoodgame = 'Молодчик!';  
if ( parseInt($('mybullet').css('left')) > parseInt($('nlo').css('left')) && (parseInt($('nlo').css('left')) + parseInt($('nlo').css('width'))) > parseInt($('mybullet').css('left')) && parseInt($('mybullet').css('top')) > parseInt($('nlo').css('top')) && (parseInt($('nlo').css('top')) + parseInt($('nlo').css('height'))) > parseInt($('mybullet').css('top'))) {
point = point + 1;
infokill.innerHTML = 'Количество убитых: ' + point; //+'/20'
infokill.style.textAlign = "center";
$('nlo').remove();
$('mybullet').first().remove();
// if (point == 20) {
//   firenlo = 0;
//   infokill.innerHTML = 'Количество убитых: ' + point +'/20';
//   infokill.style.textAlign = "center";
//   $('nlo').remove();
//   $('rocket').remove();
// var twoform = document.createElement("twoform");
// twoform.style.width = "1000px";
// twoform.style.height = "700px";
// twoform.style.position = "absolute";
// twoform.style.background = "red";
// twoform.style.marginTop = "auto";
// twoform.style.marginLeft = "auto";
// twoform.style.marginRight = "auto";
// twoform.style.marginBottom = "auto";
// twoform.style.zIndex = "10";
// document.getElementById("game").appendChild(twoform);
// if (genshinmodeon == 1) {
//   textgoodgame = 'Ваша консерва вами довольна';
// }
// twoform.innerHTML = textgoodgame;
// twoform.style.textAlign = "center";
// twoform.style.fontSize = '100px';
// twoform.style.color = "green";
// }

leftnlo = randomleftnlo(155);
topnlo = randomleftnlo(180);
createnlo();
}
let textfalsegame = 'Получил пизды!';


if ( parseInt($('nlobullet').css('left')) > parseInt($('.rocket').css('left')) && (parseInt($('.rocket').css('left')) + parseInt($('.rocket').css('width'))) > parseInt($('nlobullet').css('left')) && parseInt($('nlobullet').css('top')) > parseInt($('.rocket').css('top')) && (parseInt($('.rocket').css('top')) + parseInt($('.rocket').css('height'))) > parseInt($('nlobullet').css('top'))) {
$('nlobullet').first().remove();
console.log('прямое пробитие');
$('#health').first().remove();
clearTimeout(time);
dead = dead + 1;
if (dead == 3){
  firenlo = 0;
  $('nlo').remove();
  $('rocket').remove();
    var deadform = document.createElement("div");
deadform.id = "deadform";
deadform.className = "deadform";
deadform.style.width = "1000px";
deadform.style.height = "700px";
deadform.style.position = "absolute";
deadform.style.background = deadformcolor;
if (genshinmodeon == 1) {
  deadform.style.background = "url('css/img/chicha.jpg')";
}
deadform.style.marginTop = "auto";
deadform.style.marginLeft = "auto";
deadform.style.marginRight = "auto";
deadform.style.marginBottom = "auto";
deadform.style.zIndex = "10";
document.getElementById("game").appendChild(deadform);
if (genshinmodeon == 1) {
  textfalsegame = 'Вам выпала Чича!';
}
deadform.innerHTML = textfalsegame;
deadform.style.color = "green";
deadform.style.textAlign = "center";
deadform.style.fontSize = '100px';

 const buttonclosedeadform = document.createElement('button')
      buttonclosedeadform.innerText = 'Закрыть?'
      buttonclosedeadform.className = 'closedeadform'
      buttonclosedeadform.addEventListener('click', () => {
          location.reload();
      })
      document.getElementById("deadform").appendChild(buttonclosedeadform)
  }
}
 }, -1);
};

let genshinmodeon = 0;

//menu
const buttonstart = document.getElementById('startgame');
const buttonsettings = document.getElementById('settings');
const buttonhelp = document.getElementById('helpgame');
const buttonclose = document.getElementById('closegame');
const buttonclosehelp = document.getElementById('closewindowhelp');
const buttonclosesetting = document.getElementById('closewindowsetting');
const buttongenshinmode = document.getElementById('genshinmode');
const buttonaudioon = document.getElementById('audioon');
const buttonaudiooff = document.getElementById('audiooff');
let audiovoice = 1;

let musicfolder = 'music/music.mp3';

buttonstart.addEventListener('click', function handleClick() {
  $('.menu').css({'visibility': 'hidden'});
  $('.windowhelp').css({'visibility': 'hidden'});
  $('.windowsetting').css({'visibility': 'hidden'});
  $('.audiooff').css({'visibility': 'hidden'});
  $('.audioon').css({'visibility': 'hidden'});
  startgame();
  if ((localStorage.getItem('audio',audiovoice)) == 1) {
  var audio = new Audio(); // Создаём новый элемент Audio
  if (genshinmodeon == 1) {
  musicfolder = 'music/chichka.mp3';
}
  audio.src = musicfolder; // Указываем путь к звуку "клика"
  audio.loop = true; //повтор
  audio.autoplay = true; // Автоматически запускаем
  }
});
buttonsettings.addEventListener('click', function handleClick() {
  $('.windowsetting').css({'visibility': 'visible'});
  $('.audiooff').css({'visibility': 'visible'});
  $('.audioon').css({'visibility': 'visible'});
});
buttonhelp.addEventListener('click', function handleClick() {
  $('.windowhelp').css({'visibility': 'visible'});
});
buttonclose.addEventListener('click', function handleClick() {
  window.close();
});

buttonclosehelp.addEventListener('click', function handleClick() {
  $('.windowhelp').css({'visibility': 'hidden'});
});

buttonclosesetting.addEventListener('click', function handleClick() {
  $('.windowsetting').css({'visibility': 'hidden'});
  $('.audiooff').css({'visibility': 'hidden'});
  $('.audioon').css({'visibility': 'hidden'});
  console.log($('.nick').val().length);
});

buttongenshinmode.addEventListener('click', function handleClick() {
  genshinmodeon = 1;
  let imageUrlEather = 'css/img/aether.png';
  let imageGen= 'css/img/genshinbody.jpg';
  let imageGenBody= 'css/img/gamegenshin.jpg';
  let imageHil= 'css/img/hil.gif';
  let imagePrim= 'css/img/prim.jpg';

  $('.rocket').css('background-image', 'url(' + imageUrlEather + ')');
  $('.player-back').css('background-image', 'url(' + imageGen + ')');
  $('.screen').css('background-image', 'url(' + imageGen + ')');
  $('.game').css('background-image', 'url(' + imageGenBody + ')');
  $('.player').css('background-image', 'url(' + imageHil + ')');
  $('.health1').css('background-image', 'url(' + imagePrim + ')');
  $('.health2').css('background-image', 'url(' + imagePrim + ')');
  $('.health3').css('background-image', 'url(' + imagePrim + ')');

  nlobulletcolor = 'purple';
  mybulletcolor = 'yellow';
});

buttonaudioon.addEventListener('click', function handleClick() {
  $('.audioon').css({'background-color': 'green'});
  $('.audiooff').css({'background-color': 'red'});
  localStorage.removeItem('audio',audiovoice);
  audiovoice = 1;
  localStorage.setItem('audio',audiovoice);
  console.log(localStorage.getItem('audio',audiovoice));
});

buttonaudiooff.addEventListener('click', function handleClick() {
  $('.audiooff').css({'background-color': 'green'});
  $('.audioon').css({'background-color': 'red'});
  localStorage.removeItem('audio',audiovoice);
  audiovoice = 0;
  localStorage.setItem('audio',audiovoice);
  console.log(localStorage.getItem('audio',audiovoice));
});

if (localStorage.getItem('audio',audiovoice) == 1) {
  $('.audioon').css({'background-color': 'green'});
  $('.audiooff').css({'background-color': 'red'});
}
else {
  $('.audiooff').css({'background-color': 'green'});
  $('.audioon').css({'background-color': 'red'});
}

document.getElementById("startgame").disabled = true;
$('.nick').keyup(function(){
if ($('.nick').val().length < 3) {
document.getElementById("startgame").disabled = true;
}
else{
document.getElementById("startgame").disabled = false;
}
})
















