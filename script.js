const dice = document.querySelector('.dice');

let randomNumber = () => Math.ceil(Math.random() * 6);

let diceRolled = [];
let rolled = {one: 0, two: 0, three: 0, four: 0, five: 0, six: 0};

let populateData = () => {
  rolled = {one: 0, two: 0, three: 0, four: 0, five: 0, six: 0};
  diceRolled = [];
  for (let i = 0; i < 200; i++) {
    let ran = randomNumber();
    if (ran === 1) {
      rolled.one++;
    } else if (ran === 2) {
      rolled.two++;
    } else if (ran === 3) {
      rolled.three++;
    } else if (ran === 4) {
      rolled.four++;
    } else if (ran === 5) {
      rolled.five++;
    } else if (ran === 6) {
      rolled.six++;
    }
  }
  diceRolled = Object.values(rolled);
};

let ctx = document.getElementById('myChart').getContext('2d');

dice.addEventListener('click', (e) => {
  dice.classList.add('rotate');

  populateData();

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['1', '2', '3', '4', '5', '6'],
      datasets: [
        {
          label: 'Number of times a number was chosen',
          data: diceRolled,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });
  setTimeout(() => {
    dice.classList.remove('rotate');
  }, 500);
});
