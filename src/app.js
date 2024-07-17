/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#excusa").innerHTML = generarExcusa();
};

let generarExcusa = () => {
  let pronombre = ["A", "The", "My", "Your"];
  let sujeto = [
    "dog",
    "cat",
    "fish",
    "parrot",
    "hamster",
    "P.E teacher",
    "psychologist",
    "therapist",
    "colleague"
  ];
  let verbo = [
    "ate my",
    "stole my",
    "lost my",
    "bought my",
    "laughed at my",
    "sold my",
    "cried looking at my",
    "ruined my",
    "forgot my",
    "spat on my"
  ];
  let objeto = [
    "homework",
    "food",
    "car",
    "project",
    "gift",
    "clock",
    "computer",
    "book",
    "phone",
    "breakfast"
  ];
  let cuando = [
    "today",
    "yesterday",
    "last night",
    "this morning",
    "last week",
    "last Sunday night",
    "five minutes ago",
    "just before I came here",
    "last Monday",
    "last Sunday"
  ];

  let pronombreIndex = Math.floor(Math.random() * pronombre.length);
  let sujetoIndex = Math.floor(Math.random() * sujeto.length);
  let verboIndex = Math.floor(Math.random() * verbo.length);
  let objetoIndex = Math.floor(Math.random() * objeto.length);
  let cuandoIndex = Math.floor(Math.random() * cuando.length);

  return (
    pronombre[pronombreIndex] +
    " " +
    sujeto[sujetoIndex] +
    " " +
    verbo[verboIndex] +
    " " +
    objeto[objetoIndex] +
    " " +
    cuando[cuandoIndex] +
    "!"
  );
};
