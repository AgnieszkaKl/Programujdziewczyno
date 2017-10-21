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



    });
