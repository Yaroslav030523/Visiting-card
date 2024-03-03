function toggleText(blockNumber) {
  // Отримуємо всі блоки тексту
 let textBlocks = document.querySelectorAll('.text-block');

 
  // Ховаємо всі блоки тексту
  textBlocks.forEach(function(block) {
      block.style.display = 'none';
  });

  // Відображаємо тільки вибраний блок тексту
  let selectedBlock = document.getElementById('textBlock' + blockNumber);
  if (selectedBlock) {
      selectedBlock.style.display = 'block';
  }
}
function toggleCwich(){
  let textBlock4 =document.querySelector(".textBlock4")
  let background = document.querySelector('body')
  textBlock4.classList.toggle('color')
  background.classList.toggle('white')
}
document.addEventListener('DOMContentLoaded', function () {
  const image1 = document.getElementById('image1');
  const image2 = document.getElementById('image2');

  function toggleImages() {
    if (image1.classList.contains('none')) {
      image1.classList.remove('none');
      image1.classList.add('hidden');
      image2.classList.remove('hidden');
      image2.classList.add('none');
    } else {
      image2.classList.remove('none');
      image2.classList.add('hidden');
      image1.classList.remove('hidden');
      image1.classList.add('none');
    }
  }

  image1.addEventListener('click', toggleImages);
  image2.addEventListener('click', toggleImages);
});


document.addEventListener("DOMContentLoaded", function() {
  // Отримуємо елемент div за його id
  var myDiv = document.getElementById("myDiv");

  // Показуємо елемент div при відкритті сторінки
  myDiv.style.display = "block";

  // Зникаємо через 3 секунди
  setTimeout(function() {
    myDiv.style.display = "none";
     
  }, 4600);
});

document.addEventListener("DOMContentLoaded", function() {
let main = document.getElementById("main");
setTimeout(function() {
  main.style.display ="flex"
   }, 4600);
});
document.addEventListener("DOMContentLoaded", function() {

  var contentDiv = document.getElementById("content");
  contentDiv.style.display = "block";
});