const txtWrap = document.querySelectorAll('.txt_wrap');
console.log(txtWrap);
console.log(txtWrap[0]);
let n = 0;

// function runTxt() {} 선언함수

let runTxt = () => {
  txtWrap.forEach( (el) => {
    el.classList.remove('active');
  });
  
  // setTimeout(function(){실행문}, 시간); 시간 후 한 번만 실행
  setTimeout( () => {
    if(n < txtWrap.length) {// txtWrap의 수가 3이기 때문에 인덱스 번호는 2
      n++;
    } else {
      n = 0;
    }
  }, 1000);

  txtWrap[n].classList.add('active');
}

// setInterval(function(){실행문}, 시간); 시간마다 실행
setInterval(runTxt, 2000);



var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("gnb").style.top = "0";
  } else {
    document.getElementById("gnb").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}


// publising guide

const open = document.getElementById('open');
const close = document.getElementById('close');
const modal = document.querySelector('.modal_wrapper');

open.onclick = () => {
  modal.style.display = 'flex';
}
close.onclick = () => {
  modal.style.display = 'none';
}