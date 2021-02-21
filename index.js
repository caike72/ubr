// Atualiza o ano no rodapé
document.getElementById("year").innerHTML = new Date().getFullYear();

// Muda texto da primeira section quando clicado
function changeToText1() {
  document.getElementById('text').innerText = 'Bem-vindo(a)! A UBR (União Brasileira de Regiões) é uma um grupo brasileiro de geoficção, worldbuilding e roleplay. A atual versão da UBR fora fundado como substituto do fórum SCity em 2017. A União Brasileira de Regiões possui uma longa história, tendo sido fundada em 2009 por usuários do SimCityBrasil (2004-2017) como uma forma de interação entre regiões do jogo. Desde sua criação, a UBR eventualmente caminhou para tornar-se uma espécie de roleplay de geopolítica entre as nações de seus membros, além de ter formado uma antiga comunidade com vínculo único de amizade.'
}

function changeToText2() {
  document.getElementById('text').innerText = 'A UBR se passa em um universo paralelo. O planeta Adalar, pouco menor que a terra e de propriedades similares, é o lar de todas as nações da UBR. Durante os anos, desde 2009, o mapa da UBR sofreu diversas alterações, experimentando e melhorando gradativamente. Quando um país entra para a UBR, é como se estivesse se tornando membro da Liga das Nações de Adalar. Para aprender mais sobre o funcionamento, regras e possibilidades reservadas aos membros da UBR, consulte a Constituição da União Brasileira de Regiões e as regras em nosso Discord!'
}

function changeToText3() {
  document.getElementById('text').innerText = 'Aqui na UBR você pode criar uma nação com culturas, histórias, governos e territórios próprios e customizáveis. Novos membros são sempre bem vindos em todas as épocas do ano, e amizades de anos florescem no nosso cantinho da internet. Venha conhecer a gente, crie seu país, sempre há um administrador ativo para lhe dar boas vindas!'
}

// Section dos países
class ubrCountries {
  constructor(name, capital, continent, language, flag, population, map) {
    this.name = name
    this.capital = capital
    this.continent = continent
    this.language = language
    this.flag = flag
    this.population = population
    this.map = map
  }
}

let ubrCountriesList = Array()
ubrCountriesList.push(new ubrCountries('República de Wainui', 'Nunoa', 'Letânia Oriental', 'Kerwa Wainu', 'https://static.miraheze.org/ubrwikiwiki/0/03/Bandeira_de_Wainui.png', `19.315.788`, 'https://static.miraheze.org/ubrwikiwiki/d/d6/Wainui_no_mundo.png'))
ubrCountriesList.push(new ubrCountries('República de Kawsalpa', 'Tayekbant', 'Letânia Oriental', 'Keruwa e Auber', 'https://static.miraheze.org/ubrwikiwiki/3/34/Kawsalpa.png', `28.038.982`, 'https://static.miraheze.org/ubrwikiwiki/d/d9/Kawsalpa_no_mundo.png'))

// Seleciona país e envia para a section
function selectCountry() {
  const getCountry = (ubrCountriesList[document.getElementById('country-selector').value])

  document.getElementById('country-name').innerHTML = getCountry.name
  document.getElementById('country-capital').innerHTML = getCountry.capital
  document.getElementById('country-continent').innerHTML = getCountry.continent
  document.getElementById('country-language').innerHTML = getCountry.language
  document.getElementById('country-population').innerHTML = getCountry.population

  document.getElementById('flag').src = getCountry.flag
  document.getElementById('map').src = getCountry.map
}