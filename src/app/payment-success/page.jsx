"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

const PaymentSuccess = () => {
    const searchParams = useSearchParams();
    const sessionId = searchParams.get("session_id");
    useEffect(() => {
        if (!sessionId) return;
        const updatePayment = async () => {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/api/payment-success`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    sessionId,
                }),
            });
            const data = await res.json();
            console.log(data);
        };
        updatePayment();
    }, [sessionId]);
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-white shadow-lg rounded-xl p-8 text-center">
                <h1 className="text-4xl font-bold text-green-600">
                    ✅ Payment Successful
                </h1>
                <p className="mt-4 text-gray-600">
                    Your payment has been received successfully.
                </p>
                <p className="mt-2 text-gray-500">
                    Your ticket is now confirmed.
                </p>
            </div>
        </div>
    );
};

export default PaymentSuccess;