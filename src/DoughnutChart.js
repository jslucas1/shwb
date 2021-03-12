import React from 'react'
import { Doughnut, defaults } from 'react-chartjs-2'
//to install the necessary packages for chartsjs, enter npm 'install chart.js --save' in the terminal


defaults.global.tooltips.enabled = false
defaults.global.legend.position = 'bottom'

const DoughnutChart = () => {
  return <div>
  <Doughnut
  data={{
      labels: ['ACADEMIC', 'CAREER', 'FINANCIAL', 'PSYCHOLOGICAL', 'PHYSICAL', 'SOCIAL', 'SPIRITUAL'],
      datasets: [{
          cutoutPercentage: [50],
          label: 'Wellness Doughnut',
          data: [10, 10, 10, 10, 10, 10, 10],
          backgroundColor: [
            'rgba(181, 224, 57, 0.2)',
            'rgba(147, 216, 197, 0.2)',
            'rgba(181, 224, 57, 0.2)',
            'rgba(147, 216, 197, 0.2)',
            'rgba(181, 224, 57, 0.2)',
            'rgba(147, 216, 197, 0.2)',
            'rgba(181, 224, 57, 0.2)'
          ],
          borderColor: [
            'rgba(181, 224, 57, 1)',
            'rgba(147, 216, 197, 1)',
            'rgba(181, 224, 57, 1)',
            'rgba(147, 216, 197, 1)',
            'rgba(181, 224, 57, 1)',
            'rgba(147, 216, 197, 1)',
            'rgba(181, 224, 57, 1)''
          ],
          
          
          hoverBorderColor: [
            'rgbargba(191, 191, 191, 1)',
            'rgbargba(191, 191, 191, 1)',
            'rgbargba(191, 191, 191, 1)',
            'rgbargba(191, 191, 191, 1)',
            'rgbargba(191, 191, 191, 1)',
            'rgbargba(191, 191, 191, 1)',
            'rgbargba(191, 191, 191, 1)',
          ],
          borderWidth: 5
      }]
  }}
      height={400}
      width={400}
      options={{
          maintainAspectRatio: false
      }}
      
       //onclick event function
      //the code is currently broken with the onclick events but if you comment out lines 60-94, the doughnut chart will run
      //I used https://stackoverflow.com/questions/45980436/chart-js-link-to-other-page-when-click-on-specific-section-in-chart and
      // https://stackoverflow.com/questions/26257268/click-events-on-pie-charts-in-chart-js as resources
      // DoughnutChart.onclick = function(e) {
      //   var slice = DoughnutChart.getElementAtEvent(e);
      //   if (!slice.length) return; // return if not clicked on slice
      //   var label = slice[0]._model.label;
      //   switch (label) {
      //      // add case for each label/slice
      //      //the links route to Google for testing
      //      case 'ACADEMIC':
      //         alert('clicked on ACADEMIC');
      //         window.open('www.google.com/');
      //         break;
      //      case 'CAREER':
      //         alert('clicked on CAREER');
      //         window.open('www.google.com/');
      //         break;
      //       case 'FINANCIAL':
      //         alert('clicked on FINANCIAL');
      //         window.open('www.google.com/');
      //         break;
      //       case 'PSYCHOLOGICAL':
      //         alert('clicked on PSYCHOLOGICAL');
      //         window.open('www.google.com/');
      //         break;
      //       case 'PHYSICAL':
      //         alert('clicked on PHYSICAL');
      //         window.open('www.google.com/');
      //         break;
      //       case 'SOCIAL':
      //         alert('clicked on SOCIAL');
      //         window.open('www.google.com/');
      //         break;
      //       case 'SPIRITUAL':
      //         alert('clicked on CAREER');
      //         window.open('www.google.com/');
      //         break;
        
  />
  </div>





}

export default DoughnutChart
