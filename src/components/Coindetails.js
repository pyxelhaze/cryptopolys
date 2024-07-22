import Coinchart from "./Coinchart";



const Coindetails = () => {

    return (
        <div className="detail-container">
            <div className="coinname"></div>
            <div className="price-chart">
                <Coinchart />
            </div>
        </div>

    );
}

export default Coindetails;