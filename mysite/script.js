var button = document.querySelector(".show-more");
var content = document.getElementById("content");
//переписывала этот код несколько раз - сначала это была просто кнопка "показать больше" только открывающая контент
//Но по тз текст должен не только появляться но и исчезать при нажатии на кнопку (а я тестировщик - тз наше все)
// затем кнопка превратилась в один раз открывающую и один раз скрывающую контент
// и только в третий раз я смогла это действие зациклить

button.addEventListener("click", function(){
  if(content.hidden === true){
    content.hidden = false;
    button.textContent = "Скрыть";
  } else {
    content.hidden = true;
    button.textContent = "Показать больше";
  }
}); 