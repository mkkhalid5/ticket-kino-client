'use client'
import { updateUserDetails } from '@/lib/api/users';
import { Shield } from '@gravity-ui/icons';
import { Button } from '@heroui/react';
import React from 'react';
import toast from 'react-hot-toast';

const AdminAdd = ({ user }) => {
    const handleAdmin = async () => {
        updateUserDetails(user._id, "admin",`${user.status}`)
        toast.success("Making Admin Successfull");
        window.location.reload();
    }
    return (
        <div>
            <Button onClick={handleAdmin} className="bg-accent-soft text-accent-soft-foreground "><Shield /> Admin</Button>
        </div>
    );
};

export default AdminAdd;