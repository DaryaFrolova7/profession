let phrases = [
  { text: 'стоит спросить совета у других', image: '1.png' },
  { text: 'надо посмотреть статистику профессий в интернете', image: 'main.png' },
  { text: 'стоит разобраться в себе и в своих предпочтениях', image: 'app.png' },
  { text: 'стоит обсудть свое решение с родными', image: '5182-1-3.png' },
  { text: 'стоит поставить перед собой цель', image: '3.png' },
  { text: 'надо учить. более упорно, те предметы, что тебе пригодятся', image: '76.png' },
  { text: 'cтоит посмотреть полезные статьи в Интернете', image: '56.png' },
  { text: 'не стоит гнаться за престижем', image: '10.png' },
  { text: 'не стоит откладывать свои решения', image: '8.png' },
  { text: 'не стоит верить стереотипам', image: '9.png' }
];

function getRandomElement(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

let button = document.querySelector('.button');
let phrase = document.querySelector('.phrase');
let advice = document.querySelector('.advice');
let image = document.querySelector('.image');

button.addEventListener('click', function () {
  let randomElement = getRandomElement(phrases);
  smoothly(phrase, 'textContent', randomElement.text)
  smoothly(image, 'src', randomElement.image)

  if (randomElement.text.length > 40) {
    advice.style.fontSize = '33px';
  } else {
    advice.style.fontSize = '42px';
  }
});

for (let i = 0; i <= 2; i = i + 1) {
  // выводите элементы массива в консоль, используя i
 // console.log(phrases[i]);
  smoothly(phrase, 'textContent', phrases[i].text); 
  smoothly(image, 'src', phrases[i].image); 
} 