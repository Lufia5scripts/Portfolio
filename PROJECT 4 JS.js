const ctx = document.getElementById('ticketChart').getContext('2d');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: [
      
      'Leicester Riders (£34) Monthly Installments',
      'Sheffield Sharks (£200) Existing ',
      'Cheshire Phoenix (£280)',
      'Manchester Giants (£285) ',
      '--Sheffield Shark  (£288) New',
      'Newcastle Eagles (£290)',
      'Leicester Riders (£295) "Early Bird"',
      'London Lions (£295)',
      'Surrey 89ers - (£305) Standard',
      'Leicester Riders (£325) Standard',
      'Caledonia Gladiators (£330) Gold Ticket',
      'Caledonia Gladiators (£345) Platinum Ticket',
      'Surrey 89ers - (£369) Premium',
      'Surrey 89ers - (£369) Pod', 

    ],
    datasets: [{
      label: 'Ticket Price (£)',
      data: [34, 200, 280, 285, 288, 290, 295, 295, 305, 325, 330, 345, 369, 369],
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
    'Surrey 89ers N/A',
    'Leicester Riders £25 (Monthly Instalments)',
    '--Sheffield Sharks £180 (Existing)',
    'London Lions £195',
    'Cheshire Phoenix £200',
    'Leicester Riders £215 (Early Bird)',
    'Bristol Flyers £231.25 (Unreserved Seating)',
    'Leicester Riders £235 (Standard)',
    '--Sheffield Sharks £262 (New)',
    'Caledonia Gladiators £264 (Gold)',
    'Caledonia Gladiators £276 (Platinum)',
    'Newcastle Eagles £280',
    

    ],
    datasets: [{
      label: 'Ticket Price (£)',
      data: [0, 25, 180, 195, 200, 215, 231.25, 235, 262, 264, 276, 280],
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
'--Sheffield Sharks No child season ticket available',
'Leicester Riders £11.50 (Monthly Instalments)',
'London Lions £50 (Cheapest in the league)',
'Bristol Flyers £65 (U12)',
'Leicester Riders £100 (Early Bird)',
'Leicester Riders £110 (Standard)',
'Bristol Flyers £120 (U19)',
'Cheshire Phoenix £160',
'Caledonia Gladiators £165 (Gold)',
'Caledonia Gladiators £172.50 (Platinum)',
'Surrey 89ers £205 (Standard)',
'Bristol Flyers £231.25 (U22)',
'Newcastle Eagles £240',
'Surrey 89ers £285 (Premium)',
'Surrey 89ers £285 (Pod)',

       

    ],
    datasets: [{
      label: 'Ticket Price (£)',
      data: [0, 11.50, 50, 65, 100, 110, 120, 160, 165, 172.50, 205, 231.25, 240, 285, 285],
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

