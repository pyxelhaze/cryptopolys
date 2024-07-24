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
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            fill: true,
            pointRadius: window.innerWidth < 768 ? 0 : 5,
        }],
    };

    const options = {
        scales: {
            x: {
                grid: {
                    display: true,
                },
                ticks: {
                    color: 'black',
                },
            },
            y: {
                grid: {
                    color: 'rgba(75, 192, 192, 0.2)',
                },
                ticks: {
                    color: 'black',
                },
            },
        },
        plugins: {
            legend: {
                labels: {
                    color: 'rgba(75, 192, 192, 1)',
                },
            },
            tooltip: {
                backgroundColor: 'rgba(75, 192, 192, 0.8)',
                titleColor: '#fff',
                bodyColor: '#fff',
            },
        },
    };

    return <Line data={chartData} options={options} />;
}

export default Coinchart;