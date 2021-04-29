
document.addEventListener('DOMContentLoaded', function(){

//piechart on frequency of views
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawFrequencyChart);
  function drawFrequencyChart() {
    let data = google.visualization.arrayToDataTable([
      ['Frequency', 'Times per period'],
      ['Very often (each time I visit Amway Online)', 58],
      ['Often (few times a week)', 22],
      ['Frequently (few times a month)', 17],
      ['Not frequently (few times a year)', 3],
      ['I do not visit this section', 0.5]
    ]);

    let options = {
      title: 'How often do you visit Amway Business Info section on Amway Online? (one choice)',
      colors: ['#4F81BE', '#C0504C', '#9BBB58', '#8165A2', '#91CAD6'],
      pieSliceBorderColor: 'none',
      titleTextStyle: {
        color: 'rgb(51, 51, 51)',
        fontName: 'Montserrat',
        fontSize: 16,
        bold: false,
        italic: false
      }
    };

    let chart = new google.visualization.PieChart(document.getElementById('frequency-piechart'));

    chart.draw(data, options);
  }

// Chart on nuber of page views
  google.charts.load('current', {'packages':['corechart', 'bar']});
  google.charts.setOnLoadCallback(drawPagesViewed);

  function drawPagesViewed() {
    let chartDiv = document.getElementById('pages-viewed-chart');
    let data = google.visualization.arrayToDataTable([
      ['', 'Minutes', 'Page Viewed'],
      ['Old Design', 11, 24],
      ['New Design', 5, 6],
    ]);

    let classicOptions = {
      width: 500,
      legend: {
        position: 'bottom'
      },
      colors: ['#d1bf4e', '#628cbb'],
      vAxis: {
        maxValue: 25
      }
    };

    function drawClassicChart() {
      let classicChart = new google.visualization.ColumnChart(chartDiv);
      classicChart.draw(data, classicOptions);
    }

    drawClassicChart();
  }

//Chart on number of calls
  google.charts.load('current', {'packages':['corechart', 'bar']});
  google.charts.setOnLoadCallback(drawCallNumber);

  function drawCallNumber() {
    let chartDiv = document.getElementById('call-number-chart');
    let data = google.visualization.arrayToDataTable([
      ['', 'Number of Calls' ],
      ['2015 (1st qtr)', 312789],
      ['2016 (1st qtr)', 77255],
    ]);

    let classicOptions = {
      width: 500,
      legend: {
        position: 'none'
      },
      colors: ['#628cbb'],
      vAxis: {
        maxValue: 400000
      }
    };

    function drawClassicChart() {
      let classicChart = new google.visualization.ColumnChart(chartDiv);
      classicChart.draw(data, classicOptions);

    }

    drawClassicChart();
  }

// Chart on number of donloaed Files
  google.charts.load('current', {'packages':['corechart', 'bar']});
  google.charts.setOnLoadCallback(drawDownloadedFiles);
  function drawDownloadedFiles() {
    let chartDiv = document.getElementById('downloaded-files-chart');
    let data = google.visualization.arrayToDataTable([
      ['', '2015 (1st qtr)', '2016 (1st qtr)' ],
      ['Forms', 40258, 92577],
      ['Catalogues', 72951, 180379],
      ['Brochures', 27854, 83718]
    ]);

    let classicOptions = {
      width: 500,
      legend: {
        position: 'bottom'
      },
      colors: ['#d1bf4e', '#628cbb'],
    };

    function drawClassicChart() {
      let classicChart = new google.visualization.ColumnChart(chartDiv);
      classicChart.draw(data, classicOptions);
    }

    drawClassicChart();
  }

// Chart on average time spent
  google.charts.load('current', {'packages':['corechart', 'bar']});
  google.charts.setOnLoadCallback(drawTimeSpentChart);

  function drawTimeSpentChart() {
    let chartDiv = document.getElementById('time-spent-chart');
    let data = google.visualization.arrayToDataTable([
      ['', 'AVG time spent (minutes)' ],
      ['2015 (1st qtr)', 4],
      ['2016 (1st qtr)', 17],
    ]);

    let classicOptions = {
      width: 500,
      legend: {
        position: 'bottom'
      },
      colors: ['#628cbb'],
      vAxis: {
        maxValue: 20
      }
    };

    function drawClassicChart() {
      let classicChart = new google.visualization.ColumnChart(chartDiv);
      classicChart.draw(data, classicOptions);
    }

    drawClassicChart();
  }
});
