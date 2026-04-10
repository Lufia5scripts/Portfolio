/* -------------------------
   PAPER 1 — 20 attempts
   Range 40–61 (with anomalies)
------------------------- */
const ctx = document.getElementById('ticketChart').getContext('2d');
new Chart(ctx, {
  type: 'line',
  data: {
    labels: [
      'Attempt 1','Attempt 2','Attempt 3','Attempt 4','Attempt 5',
      'Attempt 6','Attempt 7','Attempt 8','Attempt 9','Attempt 10',
      'Attempt 11','Attempt 12','Attempt 13','Attempt 14','Attempt 15',
      'Attempt 16','Attempt 17','Attempt 18','Attempt 19','Attempt 20'
    ],
    datasets: [{
      label: 'Paper 1 Marks (out of 100)',
      data: [
        42, 45, 41, 48, 44,
        50, 46, 40, 52, 47,
        55, 49, 43, 48, 56,  
        58, 45, 51, 53, 61  
      ],
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 2,
      tension: 0.4,
      fill: true
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: false,
        min: 35,
        max: 75,
        title: { display: true, text: 'Marks' }
      },
      x: {
        title: { display: true, text: 'Attempt Number' },
        ticks: { maxRotation: 45, minRotation: 45 }
      }
    },
    plugins: { legend: { display: true } }
  }
});



const ctx2 = document.getElementById('ticketChart2').getContext('2d');
new Chart(ctx2, {
  type: 'line',
  data: {
    labels: [
      'Attempt 1','Attempt 2','Attempt 3','Attempt 4','Attempt 5',
      'Attempt 6','Attempt 7','Attempt 8','Attempt 9','Attempt 10',
      'Attempt 11','Attempt 12','Attempt 13','Attempt 14','Attempt 15',
      'Attempt 16','Attempt 17','Attempt 18','Attempt 19','Attempt 20'
    ],
    datasets: [{
      label: 'Paper 2 Marks (out of 100)',
      data: [
        36, 38, 34, 40, 37,
        42, 39, 35, 43, 40,
        44, 41, 44, 45, 34,  
        42, 39, 43, 46, 40    
      ],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 2,
      tension: 0.4,
      fill: true
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: false,
        min: 25,
        max: 75,
        title: { display: true, text: 'Marks' }
      },
      x: {
        title: { display: true, text: 'Attempt Number' },
        ticks: { maxRotation: 45, minRotation: 45 }
      }
    },
    plugins: { legend: { display: true } }
  }
});



const ctx3 = document.getElementById('ticketChart3').getContext('2d');
new Chart(ctx3, {
  type: 'line',
  data: {
    labels: [
      'Attempt 1','Attempt 2','Attempt 3','Attempt 4','Attempt 5',
      'Attempt 6','Attempt 7','Attempt 8','Attempt 9','Attempt 10',
      'Attempt 11','Attempt 12','Attempt 13','Attempt 14','Attempt 15',
      'Attempt 16','Attempt 17','Attempt 18','Attempt 19','Attempt 20'
    ],
    datasets: [{
      label: 'Paper 3 Marks (out of 100)',
      data: [
        39, 42, 38, 45, 41,
        47, 43, 37, 48, 44,
        46, 42, 50, 45, 53,   
        47, 44, 41, 51, 46  
      ],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 2,
      tension: 0.4,
      fill: true
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: false,
        min: 35,
        max: 75,
        title: { display: true, text: 'Marks' }
      },
      x: {
        title: { display: true, text: 'Attempt Number' },
        ticks: { maxRotation: 45, minRotation: 45 }
      }
    },
    plugins: { legend: { display: true } }
  }
});
