import React, { useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';
import Chart from 'chart.js/auto';

const RealTimeChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      if (chartRef.current && !chartInstance.current) {
        // Inicializar el gráfico después de un pequeño retraso
        const ctx = chartRef.current.getContext('2d');
        chartInstance.current = new Chart(ctx, {
          type: 'line',
          data: {
            labels: [],
            datasets: [
              {
                label: 'Temperatura Promedio (°C)',
                data: [],
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderWidth: 1,
              },
              {
                label: 'Humedad Promedio (%)',
                data: [],
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderWidth: 1,
              },
              {
                label: 'Nivel de Agua Restante (cm)',
                data: [],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderWidth: 1,
              },
              {
                label: 'Nivel de Comida Restante (cm)',
                data: [],
                borderColor: 'rgba(153, 102, 255, 1)',
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderWidth: 1,
              },
            ],
          },
          options: {
            responsive: true,
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        });
      }
      console.log('Gráfico inicializado');
    }, 5000); // Ejecutar inmediatamente después del montaje del DOM
  }, []); // Solo al montar el componente

  useEffect(() => {
    const socket = io('http://localhost:4000'); // Conectar al servidor Socket.IO

    const updateChart = (data) => {
      const currentTime = new Date().toLocaleTimeString();
      const chart = chartInstance.current;

      if (chart) {
        chart.data.labels.push(currentTime);

        // Actualiza los datos con los valores de los nuevos datos
        chart.data.datasets[0].data.push(data.temperaturaPromedio);
        chart.data.datasets[1].data.push(data.humedadPromedio);
        chart.data.datasets[2].data.push(data.aguaRestante);
        chart.data.datasets[3].data.push(data.comidaRestante);

        if (chart.data.labels.length > 10) {
          chart.data.labels.shift();
          chart.data.datasets.forEach((dataset) => dataset.data.shift());
        }

        chart.update();
      }
    };

    socket.on('sensorData', (data) => {
      console.log('Datos recibidos:', data);
      setLoader(false); // Ocultar el cargador
      updateChart(data);
    });

    return () => {
      socket.disconnect();
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []); // Solo al montar el componente

  return (
    <div className="h-full w-full flex justify-center items-center">
      {loader ? (
        <p>Cargando datos en tiempo real...</p>
      ) : (
        <canvas ref={chartRef}></canvas>
      )}
    </div>
  );
};

export default RealTimeChart;
