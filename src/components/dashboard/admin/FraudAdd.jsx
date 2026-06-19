'use client'
import { updateUserDetails } from '@/lib/api/users';
import { PersonXmark } from '@gravity-ui/icons';
import { Button } from '@heroui/react';
import React from 'react';

const FraudAdd = ({user}) => {
    const handleFraud = async () => {
            updateUserDetails(user.id,`${user.role}`,"fraud")
            alert("Mark as Fraud Successfull");
            window.location.reload();
        }
    return (
        <div>
            <Button onClick={handleFraud} className="bg-danger-soft text-danger-soft-foreground"><PersonXmark /> Fraud</Button>
        </div>
    );
};

export default FraudAdd;