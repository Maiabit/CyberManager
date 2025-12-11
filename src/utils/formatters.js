
export const formatCurrency = (amount) => {
    const num = Number(amount);
    
    if (isNaN(num)) return '$0.00';

    
    return `$${num.toFixed(2)}`;
};


export const getCurrentTime = () => {
    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};


export const calculateTotal = (horas, precioHora = 5) => {
    return horas * precioHora;
};
