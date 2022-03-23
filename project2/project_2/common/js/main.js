const tabBtn = document.querySelectorAll('.tab_btn'); // h2
const li = document.querySelectorAll('li');

tabBtn.forEach(function (item) {
    item.addEventListener('click', function() {
        // 순서 중요. 먼저 모든 li의 '.on' 삭제
        for (let tab of li) {
            tab.classList.remove('on');
        }
        // 내가 클릭한 tabBtn에만 '.on' 추가
        this.parentNode.classList.add('on');
    });
});

const default_option = document.querySelector('.default_option');
default_option.addEventListener('click',function(){
  this.parentNode.classList.toggle('active');
});


$('#menu_open').on('click', () => {
  $('.nav_wrapper').animate({ right: 0 }, 500);
});
$('#menu_close').on('click', () => {
  $('.nav_wrapper').animate({ right: -412 }, 500);
});

// kakao map

var container = document.getElementById('kakao_map'); //지도를 담을 영역의 DOM 레퍼런스
var options = { //지도를 생성할 때 필요한 기본 옵션
  center: new kakao.maps.LatLng(37.26661908407658, 126.99937551169113), //지도의 중심좌표.
  level: 3 //지도의 레벨(확대, 축소 정도)
};

var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
var markerPosition  = new kakao.maps.LatLng(37.26661908407658, 126.99937551169113); 
var marker = new kakao.maps.Marker({
position: markerPosition
});
marker.setMap(map);

iwPosition = new kakao.maps.LatLng(37.26661908407658, 126.99937551169113); //인포윈도우 표시 위치입니다

// 인포윈도우를 생성합니다
var infowindow = new kakao.maps.InfoWindow({
    position : iwPosition, 
    content : iwContent 
});

infowindow.open(map, marker);


