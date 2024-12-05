import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import axios from 'axios';
import ReactLoading from 'react-loading';

const Grafica = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          console.error('No se encontró un token en localStorage');
          return;
        }

        const response = await axios.get('http://localhost:4000/consumo_agua', {
          headers: {
            'Token': `${token}`,
            'apikey': 'l%!43Bki6hh$%3$Zb$orn9Q9Ke832mSL'
          }
        });

        const data = response.data.Consumo_de_agua; // Acceder al array de consumo de agua
        console.log(data);

        const labels = data.map(item => new Date(item.fecha).toLocaleDateString());
        const values = data.map(item => item.cantidad);

        setLoader(false);

        if (chartRef && chartRef.current) {
          if (chartInstance.current) {
            chartInstance.current.destroy();
          }

          const ctx = chartRef.current.getContext('2d');
          chartInstance.current = new Chart(ctx, {
            type: 'bar',
            data: {
              labels: labels,
              datasets: [{
                label: 'Agua consumido diario (litros)',
                data: values,
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
              }]
            },
            options: {
              scales: {
                y: {
                  beginAtZero: true
                }
              },
              plugins: {
                tooltip: {
                  enabled: true,
                },
                legend: {
                  labels: {
                    font: {
                      size: 18,
                    },
                  },
                },
              },
            },
          });
        }
      } catch (error) {
        setLoader(true);
        console.error('Error al obtener datos de la API:', error);
      }
    };

    fetchData();

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className='h-full w-full flex justify-center items-center'>
      {loader ? (
        <ReactLoading type='bars' color='#000' height={50} width={50} />
      ) : (
        <canvas ref={chartRef}></canvas>
      )}
    </div>
  );
};

export default Grafica;
