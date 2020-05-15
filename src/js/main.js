import artist1 from "../img/Fav-artiste-1.png";

import artist3 from "../img/Fav-artiste-3.png";



const $biography = document.getElementById("biography");

const $artistImg = document.getElementById("artist__img");

const $artistName = document.getElementById("artist__name");

const $bio = document.getElementById("biography__description");

const $arrowRight = document.getElementById("arrow-right");

const $arrowRight2 = document.getElementById("arrowRight2");

const $artist = document.getElementById("artist");






//Objet fiche artistes 

const bioArtist2 = {
  title: "ARTIST NAME ",
  biography : "Description>Description>Description>Description>Description>Description>Description>Description>Description>Description>Description>Description>Description>Description>Description>Description>Description>Description>Description>Description>Description>Description>Description>Description>Description>Description>Description>Description>Description>Description>Description>Description>Description>Description>Description>Description>Description>Description>Description>Description>Description>Description>Description2"
};

const bioArtist3 = {
  title:"ARTIST NAME ",
  biography : "Description>Description>Description>Description>Description>Description>Description>Description>Description>Description>Description>Description>Description>Description>Description>Description>Description>Description>Description>Description>Description>Description>Description>Description>Description>Description>Description>Description>Description>Description>Description>Description>Description>Description>Description>Description>Description>Description>Description>Description>Description>Description>Description3"
};

$arrowRight.addEventListener("click",function(){
  $biography.style.backgroundColor = "#A38771";
  $artistImg.setAttribute("src",artist1)
  $artistName.textContent = bioArtist2.title;
  $bio.textContent = bioArtist2.biography;
  $artist.style.display = "flex";
  $arrowRight.style.display= "none";
  $arrowRight2.style.display = "flex"
  console.log("$arrowRight");
});


$arrowRight2.addEventListener("click",function(){
    $biography.style.backgroundColor = "#AB9EBA";
    $artist.style.display = "none";
    $artistImg.setAttribute("src",artist3);
    $artistName.textContent = bioArtist3.title;
    $bio.textContent = bioArtist3.biography;
    $artist.style.display = "flex";
});

  
