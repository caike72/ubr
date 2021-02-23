// Atualiza o ano no rodapé
document.getElementById("year").innerHTML = new Date().getFullYear();

// Muda texto da primeira section quando clicado
function changeToText1() {
  document.getElementById('text').innerText = 'Bem-vindo(a)! A UBR (União Brasileira de Regiões) é um grupo brasileiro de geoficção, worldbuilding e roleplay. A atual versão da UBR fora fundada como substituta do fórum SCity em 2017. A União Brasileira de Regiões possui uma longa história, tendo sido fundada em 2009 por usuários do SimCityBrasil (2004 - 2017) como uma forma de interação entre regiões do jogo. Desde sua criação, a UBR eventualmente caminhou para tornar-se uma espécie de roleplay de geopolítica entre as nações de seus membros, além de ter formado uma antiga comunidade com vínculo único de amizade.'
}

function changeToText2() {
  document.getElementById('text').innerText = 'A UBR se passa em um universo paralelo. O planeta Adalar, pouco menor que a terra e de propriedades similares, é o lar de todas as nações da UBR. Durante os anos, desde 2009, o mapa da UBR sofreu diversas alterações, experimentando e melhorando gradativamente. Quando um país entra para a UBR, é como se estivesse se tornando membro da Liga das Nações de Adalar. Para aprender mais sobre o funcionamento, regras e possibilidades reservadas aos membros da UBR, consulte a Constituição da União Brasileira de Regiões e as regras em nosso Discord!'
}

function changeToText3() {
  document.getElementById('text').innerText = 'Aqui na UBR você pode criar uma nação com culturas, histórias, governos e territórios próprios e customizáveis. Novos membros são sempre bem vindos em todas as épocas do ano, e amizades de anos florescem no nosso cantinho da internet. Venha conhecer a gente, crie seu país, sempre há um administrador ativo para lhe dar boas vindas!'
}

// Section dos países
class ubrCountries {
  constructor(name, fullName, capital, continent, language, population) {
    this.name = name
    this.fullName = fullName
    this.capital = capital
    this.continent = continent
    this.language = language
    this.population = population
  }
}

let ubrCountriesList = Array()
ubrCountriesList.push(new ubrCountries('Auberon', 'União de Auberon', 'Alastaire', 'Astarte', 'Alto-aubérico', `57.271.680`))
ubrCountriesList.push(new ubrCountries('Helgedoff', 'Províncias de Helgedoff', 'Culverfurl', 'Eucadia', 'Helgen', `78.894.185`))
ubrCountriesList.push(new ubrCountries('Kawsalpa', 'Republica de Kawsalpa', 'Tayekbant', 'Letânia Oriental', 'Keruwa e Auber', `28.038.982`))
ubrCountriesList.push(new ubrCountries('Ushktep', 'União do Ushktëp', 'Bïmesi', 'Astarte e Eucadia', 'Ndrita, hOuberi e Nemenoi', `40.883.114`))
ubrCountriesList.push(new ubrCountries('Uttakham', 'Reino de Uttakham', `Ja'ahidah`, 'Letânia Ocidental', 'Uttakh', `31.212.090`))
ubrCountriesList.push(new ubrCountries('Wainui', 'República de Wainui', 'Nunoa', 'Letânia Oriental', 'Kerwa Wainu', `19.315.788`))

// Gera a lista de países
var select = document.getElementById("selectCountry");

for (var i = 0; i < ubrCountriesList.length; i++) {
  var opt = ubrCountriesList[i].name;
  var el = document.createElement("option");
  el.textContent = opt;
  el.value = (i);
  select.appendChild(el);
}

// Coloca o primeiro país da lista no campo

window.onload = function firstCountry() {
  document.getElementById('country-fullname').innerHTML = ubrCountriesList[0].fullName
  document.getElementById('country-capital').innerHTML = ubrCountriesList[0].capital
  document.getElementById('country-continent').innerHTML = ubrCountriesList[0].continent
  document.getElementById('country-language').innerHTML = ubrCountriesList[0].language
  document.getElementById('country-population').innerHTML = ubrCountriesList[0].population

  document.getElementById('flag').src = `/assets/flag/${ubrCountriesList[0].name}.png`
  document.getElementById('map').src = `/assets/map/${ubrCountriesList[0].name}.png`
}

// Seleciona país e envia para a section
function selectCountry() {
  const getCountry = (ubrCountriesList[document.getElementById('selectCountry').value])

  document.getElementById('country-fullname').innerHTML = getCountry.fullName
  document.getElementById('country-capital').innerHTML = getCountry.capital
  document.getElementById('country-continent').innerHTML = getCountry.continent
  document.getElementById('country-language').innerHTML = getCountry.language
  document.getElementById('country-population').innerHTML = getCountry.population

  document.getElementById('flag').src = `/assets/flag/${getCountry.name}.png`
  document.getElementById('map').src = `/assets/map/${getCountry.name}.png`
}