import { useEffect, useState } from "react";

export const useCountdown = () => {
    const [now, setNow] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setNow(Date.now());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formatTime = (time) => {
        if (!time) return "";

        return new Date(`2000-01-01T${time}`).toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
        });
    };

    const getCountdown = (date, time) => {
        if (!date || !time) return "";
        const departure = new Date(`${date}T${time}`);
        const diff = departure.getTime() - now;
        if (diff <= 0) return "Expired";
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        return `${days}D ${hours}H ${minutes}M ${seconds}S`;
    };

    return { now, formatTime, getCountdown };
};