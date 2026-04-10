


const ctx = document.getElementById('ticketChart').getContext('2d');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: [
      'Cheshire Phoenix (£17) At The Door',
      'Manchester Giants (£18)',
      'Cheshire Phoenix (£18.18) Online',
      'Bristol Flyers (£18.75)',
       'Surrey 89ers (£18.75) Standard',
      'Sheffield Sharks (£20)',
      'Leicester Riders (£20)',
      'Newcastle Eagles (£20) End View',
      'Bristol Flyers (£20.25)',
      'Caledonia Gladiators (£22) Gold Ticket',
      'Newcastle Eagles (£23.50) Side View',
      'Caledonia Gladiators (£24) Platinum Ticket',
      'Surrey 89ers (£25) Premium',
      'Surrey 89ers (£25) Pod',
      'London Lions (~£27.50)'
    ],
    datasets: [{
      label: 'Ticket Price (£)',
      data: [17, 18, 18.18, 18.75, 18.75, 20, 20, 20, 20.25, 22, 23.5, 24, 25, 25, 27.5],
      backgroundColor: 'rgba(54, 162, 235, 0.7)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false, 
    scales: {
      y: {
        beginAtZero: false,
        title: {
          display: true,
          text: 'Price (£)'
        }
      },
      x: {
        ticks: {
          maxRotation: 90,
          minRotation: 45
        }
      }
    }
  }
});




const ctx2 = document.getElementById('ticketChart2').getContext('2d');
new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: [
      'Cheshire Phoenix (£13) At The Door',
      'Cheshire Phoenix (£13.93) Online',
      'Newcaslte Eagles (£14) End View', 
      'Manchester Giants (£15)',
      'Sheffield Sharks (16)',
      'Leicester Riders (£16)',
      'Surrey 89ers £16.50',
      'Bristol Flyers (£16.75)',
      'Newcastle Eagles (£17.50) Side View',
      'Caledonia Gladiators (£18) Gold Ticket',
      'Bristol Flyers (£18.75)',
      'Caledonia Gladiators (£20) Platnium Ticket',
      'London Lions (~£21)'
    ],
    datasets: [{
      label: 'Ticket Price (£)',
      data: [13, 13.93, 14, 15, 16, 16, 16.50, 16.75, 17.50, 18, 18.75, 20, 21],
      backgroundColor: 'rgba(54, 162, 235, 0.7)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: false,
        title: {
          display: true,
          text: 'Price (£)'
        }
      },
      x: {
        ticks: {
          maxRotation: 90,
          minRotation: 45
        }
      }
    }
  }
});




const ctx3 = document.getElementById('ticketChart3').getContext('2d');
new Chart(ctx3, {
  type: 'bar',
  data: {
    labels: [
      'Leicester Riders (£10)', 
      'Bristol Flyers (£10.50)',
      'Manchester Giants (£12)',
      'Cheshire Phoenix (£12) At The Door',
      'Surrey 89ers (£12.50)',
      'Newcastle Eagles (£12) End View',
      'Caledonia Gladiators (£12) Gold Ticket',
      'Surrey 89ers (£12.50) Standard',
      'Cheshire Phoenix (£12.87) Online',
      'Caledonia Gladiators (£13) Platinum Ticket',
      'London Lions (~£13.50)',
      'Newcastle Eagles (£15.50) Side View',
      'Sheffield Shark (£16)',
      'Surrey 89ers (£17.50) Premium',
      'Surrey 89ers (17.50) Pod'

    
    ],
    datasets: [{
      label: 'Ticket Price (£)',
      data: [10, 10.50, 12, 12, 12, 12, 12, 12.50,  12.87, 13, 13.50, 15.50, 16, 16, 17.50, 17.50],
      backgroundColor: 'rgba(54, 162, 235, 0.7)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: false,
        title: {
          display: true,
          text: 'Price (£)'
        }
      },
      x: {
        ticks: {
          maxRotation: 90,
          minRotation: 45
        }
      }
    }
  }
});
