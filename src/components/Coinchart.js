import { Line } from 'react-chartjs-2';
import { useParams } from "react-router-dom";
import 'chart.js/auto';
import useFetch from './useFetch';

const Coinchart = () => {
    const { id } = useParams();
    const { data: coins, error, isLoading } = useFetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=eur&days=7`)

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    if (!coins || !coins.prices) return <div>No data available</div>;

    const chartData = {
        labels: coins.prices.map(price => new Date(price[0]).toLocaleDateString()),
        datasets: [{
            label: 'Price (EUR)',
            data: coins.prices.map(price => price[1]),
            borderColor: 'rgba(255,255,255, 1)',
            backgroundColor: 'rgba(255,255,255, 0.2)',
            fill: true,
            pointRadius: window.innerWidth < 768 ? 0 : 3,
        }],
    };

    const options = {
        layout: {
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }
        },
        scales: {
            x: {
                grid: {
                    display: true,
                },
                ticks: {
                    color: 'white',
                },
            },
            y: {
                grid: {
                    color: 'white',
                },
                ticks: {
                    color: 'white',
                },
            },
        },
        plugins: {
            legend: {
                labels: {
                    color: 'rgba(255,255,255, 1)',
                },
            },
            tooltip: {
                backgroundColor: 'rgba(black, 0.8)',
                titleColor: '#fff',
                bodyColor: '#fff',
                borderColor: 'white',
            },
        },
    };

    return (
        <div className="chart-container">
            <Line data={chartData} options={options} />
        </div>);

}

export default Coinchart;