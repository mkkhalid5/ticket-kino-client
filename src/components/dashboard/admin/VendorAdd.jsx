'use client'
import { updateUserDetails } from '@/lib/api/users';
import { PersonPlus } from '@gravity-ui/icons';
import { Button } from '@heroui/react';
import React from 'react';
import toast from 'react-hot-toast';

const VendorAdd = ({user}) => {
    const handleVendor = async () => {
            updateUserDetails(user._id, "vendor",`${user.status}`)
            toast.success("Vendor role added");
            window.location.reload();
        }
    return (
        <div>
            <Button onClick={handleVendor} className="bg-cyan-100 text-cyan-500"><PersonPlus /> Vendor</Button>
        </div>
    );
};

export default VendorAdd;