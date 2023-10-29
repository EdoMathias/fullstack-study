import { CoinsMngr, DataPoint } from '../types/Coin-type.js';

let singleInterval = 0;

export function getChartsPage(cMngr: CoinsMngr) {
  const pageMainSection = document.querySelector('#page-contents-section');
  const chartsPageData = `
    <section class="d-flex justify-content-center align-items-center mt-5">
    <div id="chartContainer" style="height: 370px; width: 100%"></div>
  </section>
  `;
  if (pageMainSection) {
    pageMainSection.innerHTML = chartsPageData;
    let options = {
      exportEnabled: true,
      animationEnabled: true,
      title: {
        text: 'Units Sold VS Profit',
      },
      subtitles: [
        {
          text: 'Click Legend to Hide or Unhide Data Series',
        },
      ],
      axisX: {
        title: 'States',
      },
      axisY: {
        title: 'USD',
        titleFontColor: '#4F81BC',
        lineColor: '#4F81BC',
        labelFontColor: '#4F81BC',
        tickColor: '#4F81BC',
      },
      axisY2: {
        title: 'EUR',
        titleFontColor: '#C0504E',
        lineColor: '#C0504E',
        labelFontColor: '#C0504E',
        tickColor: '#C0504E',
      },
      toolTip: {
        shared: true,
      },
      legend: {
        cursor: 'pointer',
        // itemclick: toggleDataSeries,
      },
      data: [
        {
          type: 'spline',
          color: 'green',
          name: 'Units Sold',
          showInLegend: true,
          xValueType: 'dateTime',
          dataPoints: [],
        },
        {
          type: 'spline',
          name: 'Profit',
          axisYType: 'secondary',
          showInLegend: true,
          xValueType: 'dateTime',
          dataPoints: [],
        },
      ],
    };
    (async function () {
      ($('#chartContainer') as any).CanvasJSChart(options);

      function toggleDataSeries(e) {
        if (
          typeof e.dataSeries.visible === 'undefined' ||
          e.dataSeries.visible
        ) {
          e.dataSeries.visible = false;
        } else {
          e.dataSeries.visible = true;
        }
        e.chart.render();
      }
    })();
    const realTimeChartsButton = document.querySelector(
      '#real-time-charts-button'
    );
    let selectedCoins = cMngr.selectedSymbols.join(',');
    if (singleInterval === 0) {
      // Create interval only when needed and only one if needed
      setInterval(async () => {
        if (realTimeChartsButton?.classList.contains('active')) {
          const result = await fetch(
            `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${selectedCoins.toUpperCase()}&tsyms=USD`
          );
          let data = await result.json();

          // Loop through the data object and push the USD values into the 'Profit' dataPoints array
          let dataIdx = 0;
          for (let symbol of cMngr.selectedSymbols) {
            let symbolUpper = symbol.toUpperCase();
            if (data.hasOwnProperty(symbolUpper)) {
              console.log(data[symbolUpper]);
              let usdValue = data[symbolUpper]['USD'];
              console.log(usdValue);

              if (usdValue !== undefined) {
                let time = new Date();
                let point = {
                  x: time.getTime(),
                  y: usdValue,
                };
                console.log(point);
                (options.data[dataIdx].dataPoints as DataPoint[]).push(point);
              }

              // Push the point to the dataPoints array of the 'Profit' series
              dataIdx++;
            }

            // Render the chart to reflect the updated data
            ($('#chartContainer') as any).CanvasJSChart().render();
          }
        }
      }, 2000);
      singleInterval = 1;
    }
  }
}
