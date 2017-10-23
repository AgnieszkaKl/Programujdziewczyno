'use strict'; // prośba o JS o wyrzuwanie błędów wszystkich

console.log("Warsztaty");

document.addEventListener('DOMContentLoaded', function() {
      // tutaj będziemy umieszczać kod ze wszystkich zadań
      //mam 100% pewności, że cały HTML się wczytał, a potem wykonał się nasz skrypy
      var menuList = document.querySelectorAll(".nav-list > li"); //znajdz wszystkie el li ktore maja rodzina nav-list., a ze znakiem > tylko bezposrednie dzieci
      console.log(menuList); // sprawdzamy, tutaj mamy tablicę!! więc pętla

      for(var i = 0; i<menuList.length; i++) {
        menuList[i].addEventListener("mouseover", function() { //nasłuchiwacz //zamiast mouseover moze byc click
          // console.log("huraaaa"); // działa
          //"this" to taka zmienna, ktora jest tym, na co najechał użytkownik, w co kliknął, zawsze w AssEventListener uzywamy this
          // this.style.font-size = 100px;
          var dropdown = this.querySelector(".dropdown")
          console.log(dropdown);

          if (dropdown != null){
            dropdown.style.display = "block"
          }


        } )
      }

      for(var i = 0; i<menuList.length; i++) {
        menuList[i].addEventListener("mouseout", function() { //nasłuchiwacz
          // console.log("huraaaa"); // działa
          //"this" to taka zmienna, ktora jest tym, na co najechał użytkownik, w co kliknął, zawsze w AssEventListener uzywamy this
          var dropdown = this.querySelector(".dropdown")
          console.log(dropdown);

          if (dropdown != null){
            dropdown.style.display = "none"
          }


        } )
      }

// ZADANIE 2

    var buttons = document.querySelectorAll('.read-more');
    console.log(buttons);
    console.log(buttons[0].previousElementSibling);

    for (var i=0; i<buttons.length; i++) {
        buttons[i].addEventListener("click", function() { //0 dla jednego przyciski, zmieniamy na i dla for
          var textArea = this.previousElementSibling;
          if (textArea.style.display === 'none' || textArea.style.display === '') {
                textArea.style.display = 'block';
                this.innerHTML = 'MNIEJ <span class="glyphicon glyphicon-chevron-up"></span>';
          } else {
                textArea.style.display = "none";
                this.innerHTML = 'WIĘCEJ <span class="glyphicon glyphicon-chevron-up"></span>';
            }

        });
    }


// ZADANIE 3

var krawedz = document.querySelector(".collapse");
console.log("krawedz");

window.addEventListener("scroll", function () {
  krawedz.style.borderBottom = '1px solid #7f7f7f';
});


// ZADANIE 4

var wroc = document.querySelector(".btn btn-dark");
console.log("wroc");

window.addEventListener("click", function (){
  window.scroll( 0, 0);
});



  });
