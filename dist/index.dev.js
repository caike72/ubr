"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Menu responsivo
onresize = function onresize() {
  if (window.innerWidth > 700) {
    document.querySelector(".menu").style.display = "block";
  } else {
    document.querySelector(".menu").style.display = "none";
  }
};

function responsiveMenu() {
  var x = document.querySelector(".menu");

  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
} // Atualiza o ano no rodapé


document.getElementById("year").innerHTML = new Date().getFullYear(); // Muda texto da primeira section quando clicado

function changeToText1() {
  document.getElementById('text').innerText = 'Bem-vindo(a)! A UBR (União Brasileira de Regiões) é um grupo brasileiro de geoficção, worldbuilding e roleplay. A atual versão da UBR fora fundada como substituta do fórum SCity em 2017. A União Brasileira de Regiões possui uma longa história, tendo sido fundada em 2009 por usuários do SimCityBrasil (2004 - 2017) como uma forma de interação entre regiões do jogo. Desde sua criação, a UBR eventualmente caminhou para tornar-se uma espécie de roleplay de geopolítica entre as nações de seus membros, além de ter formado uma antiga comunidade com vínculo único de amizade.';
}

function changeToText2() {
  document.getElementById('text').innerText = 'A UBR se passa em um universo paralelo. O planeta Adalar, pouco menor que a terra e de propriedades similares, é o lar de todas as nações da UBR. Durante os anos, desde 2009, o mapa da UBR sofreu diversas alterações, experimentando e melhorando gradativamente. Quando um país entra para a UBR, é como se estivesse se tornando membro da Liga das Nações de Adalar. Para aprender mais sobre o funcionamento, regras e possibilidades reservadas aos membros da UBR, consulte a Constituição da União Brasileira de Regiões e as regras em nosso Discord!';
}

function changeToText3() {
  document.getElementById('text').innerText = 'Aqui na UBR você pode criar uma nação com culturas, histórias, governos e territórios próprios e customizáveis. Novos membros são sempre bem vindos em todas as épocas do ano, e amizades de anos florescem no nosso cantinho da internet. Venha conhecer a gente, crie seu país, sempre há um administrador ativo para lhe dar boas vindas!';
} // Section dos países


var ubrCountries = function ubrCountries(simpleName, name, fullName, capital, continent, language, population) {
  _classCallCheck(this, ubrCountries);

  this.simpleName = simpleName;
  this.name = name;
  this.fullName = fullName;
  this.capital = capital;
  this.continent = continent;
  this.language = language;
  this.population = population;
};

var ubrCountriesList = Array();
ubrCountriesList.push(new ubrCountries('afkarth', 'Afkarth', 'Afkarth', "Sem informa\xE7\xE3o", 'Letânia', 'Sem informação', "Sem informa\xE7\xE3o"));
ubrCountriesList.push(new ubrCountries('arainn', 'Arainn', 'Árainn', "Sem informa\xE7\xE3o", 'Sem informação', 'Sem informação', "4.069.800"));
ubrCountriesList.push(new ubrCountries('aybras', 'Ay-Bras', 'Reino Unido de Ay-Bras', "Sem informa\xE7\xE3o", 'Sem informação', 'Sem informação', "4.069.800"));
ubrCountriesList.push(new ubrCountries('alaradmalik', 'Al-Aradmalik', 'Reino de Al-Aradmalik', "Ja'ahidah", 'Letânia Ocidental', 'Sukkhãs', "31.212.090"));
ubrCountriesList.push(new ubrCountries('auberon', 'Auberon', 'União de Auberon', 'Alastaire', 'Astarte', 'Alto-aubérico', "57.271.680"));
ubrCountriesList.push(new ubrCountries('damiakaren', 'Dämiakären', 'República Dämiakärense', 'Müshiden', 'Astarte', 'Dämiak', "33.491.654"));
ubrCountriesList.push(new ubrCountries('helgedoff', 'Helgedoff', 'Províncias de Helgedoff', 'Culverfurl', 'Eucadia', 'Helgen', "78.894.185"));
ubrCountriesList.push(new ubrCountries('kawsalpa', 'Kawsalpa', 'Republica de Kawsalpa', 'Tayekbant', 'Letânia Oriental', 'Keruwa e Auber', "28.038.982"));
ubrCountriesList.push(new ubrCountries('krasnaya', 'Krasnaya', 'República Totalitarista de Krasnaya', 'Oslograd', 'Irrula', 'Krasnayo', "75.600.605"));
ubrCountriesList.push(new ubrCountries('kylmatta', 'Kylmättä', 'Republica Federal de Kylmättä', '	Vosvamodan', 'Astarte', 'Mättä', "19.091.318"));
ubrCountriesList.push(new ubrCountries('sudvestia', 'Sudvestia', 'Konungsríkið Suðvestanleiðs', 'Gullnaborg', 'Astarte', 'Islenþýskur', "10.000.000"));
ubrCountriesList.push(new ubrCountries('ushkep', 'Ushktep', 'União do Ushktëp', 'Bïmesi', 'Astarte e Eucadia', 'Ndrita, hOuberi e Nemenoi', "40.883.114"));
ubrCountriesList.push(new ubrCountries('wainui', 'Wainui', 'República de Wainui', 'Nunoa', 'Letânia Oriental', 'Kerwa Wainu', "19.315.788")); // Gera a lista de países

var select = document.getElementById("selectCountry");

for (var i = 0; i < ubrCountriesList.length; i++) {
  var opt = ubrCountriesList[i].name;
  var el = document.createElement("option");
  el.textContent = opt;
  el.value = i;
  select.appendChild(el);
} // Coloca o primeiro país da lista no campo


window.onload = function firstCountry() {
  document.getElementById('country-fullname').innerHTML = ubrCountriesList[0].fullName;
  document.getElementById('country-capital').innerHTML = ubrCountriesList[0].capital;
  document.getElementById('country-continent').innerHTML = ubrCountriesList[0].continent;
  document.getElementById('country-language').innerHTML = ubrCountriesList[0].language;
  document.getElementById('country-population').innerHTML = ubrCountriesList[0].population;
  document.getElementById('flag').src = "/assets/flag/".concat(ubrCountriesList[0].simpleName, ".png");
  document.getElementById('flag').setAttribute('alt', "Bandeira de ".concat(ubrCountriesList[0].name));
  document.getElementById('map').src = "/assets/map/".concat(ubrCountriesList[0].simpleName, ".png");
  document.getElementById('map').setAttribute('alt', "Localiza\xE7\xE3o de ".concat(ubrCountriesList[0].name));
}; // Seleciona país e envia para a section


function selectCountry() {
  var getCountry = ubrCountriesList[document.getElementById('selectCountry').value];
  document.getElementById('country-fullname').innerHTML = getCountry.fullName;
  document.getElementById('country-capital').innerHTML = getCountry.capital;
  document.getElementById('country-continent').innerHTML = getCountry.continent;
  document.getElementById('country-language').innerHTML = getCountry.language;
  document.getElementById('country-population').innerHTML = getCountry.population;
  document.getElementById('flag').src = "/assets/flag/".concat(getCountry.simpleName, ".png");
  document.getElementById('flag').setAttribute('alt', "Bandeira de ".concat(getCountry.name));
  document.getElementById('map').src = "/assets/map/".concat(getCountry.simpleName, ".png");
  document.getElementById('map').setAttribute('alt', "Localiza\xE7\xE3o de ".concat(getCountry.simpleName));
}