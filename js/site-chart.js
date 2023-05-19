const myCatagory = document.getElementById('myCatagory');

  new Chart(myCatagory, {
    type: 'bar',
    data: {
      labels: ['courses', 'script', 'expert', 'indicator', 'books'],
      datasets: [{
        label: '# of Catagories',
        data: [12, 19, 3, 5, 2],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

const myRequested = document.getElementById('myRequested');

new Chart(myRequested, {
    type: 'pie',
    data: {
      labels: ['product 1', 'product 2', 'product 3', 'product 4'],
      datasets: [{
        label: '# of Requesed',
        data: [12, 19, 3, 5],
        borderWidth: 1
      }]
    },
    options: {
       
    }
  });
