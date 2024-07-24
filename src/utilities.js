
export const formatMarketCap = (num) => {
    if (num >= 1.0e+9) {
        return (num / 1.0e+9).toFixed(2) + "B";
    } else if (num >= 1.0e+6) {
        return (num / 1.0e+6).toFixed(2) + "M";
    } else if (num >= 1.0e+3) {
        return (num / 1.0e+3).toFixed(2) + "K";
    } else {
        return num.toString();
    }
}

export const getChangeClass = (change) => {
    if (change > 0) {
        return 'positive';
    } else if (change < 0) {
        return 'negative';
    } else {
        return 'neutral';
    }
}

