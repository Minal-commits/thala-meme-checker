let ipt = document.querySelector(".ipt");
let button = document.querySelector(".btnn");
let thala = document.querySelector(".thala");
let aukaat = document.querySelector(".aukaat");
let thalaaudio = new Audio("memes/thala/thala.mp3");
let aukaataudio = new Audio("memes/aukaat/aukaat.mp3");
let refresh = document.querySelector('.ref')

button.onclick = function () {
  let arr = ipt.value;
  refresh.style.display = 'block';
  refresh.onclick = function(){
    location.reload(true);
  }

  if (!isNaN(arr)) {
    let sum = 0;
    let arrString = arr.toString();

    if (/\d/.test(arrString)) {
      for (let i = 0; i < arrString.length; i++) {
        sum += parseInt(arrString[i]);
      }

      if (sum === 7) {
        thala.style.display = "block";
        aukaat.style.display = "none";
        thalaaudio.play();
        aukaataudio.pause();
        console.log(sum);
      } else {
        aukaat.style.display = "block";
        thala.style.display = "none";
        aukaataudio.play();
        thalaaudio.pause();
        console.log(sum);
      }
    } else {
      aukaat.style.display = "block";
      thala.style.display = "none";
      aukaataudio.play();
      thalaaudio.pause();
    }
  } else {
    let cnt = 0;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== " ") {
        cnt++;
      }
    }

    if (cnt === 7) {
      thala.style.display = "block";
      aukaat.style.display = "none";
      thalaaudio.play();
      aukaataudio.pause();
      console.log(cnt);
    } else {
      aukaat.style.display = "block";
      thala.style.display = "none";
      aukaataudio.play();
      thalaaudio.pause();
      console.log(cnt);
    }
  }
};
