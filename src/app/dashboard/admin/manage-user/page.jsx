import AdminAdd from '@/components/dashboard/admin/AdminAdd';
import FraudAdd from '@/components/dashboard/admin/FraudAdd';
import VendorAdd from '@/components/dashboard/admin/VendorAdd';
import { getAllUser } from '@/lib/api/users';
import { Table } from '@heroui/react';
import React from 'react';

const AdminUserManage = async () => {
    const users = await getAllUser();
    console.log("users", users);
    return (
        <div className='p-5'>
            <div className='py-10'>
                <span className='px-2 rounded-2xl bg-red-100 text-red-500'>Admin Access</span>
                <h2 className='text-2xl font-bold'>Admin Control Center</h2>
            </div>
            <Table variant="secondary">
                <h2 className='text-lg font-bold p-5 border rounded-2xl'>User Management</h2>
                <Table.ScrollContainer>
                    <Table.Content aria-label="Team members" className="min-w-150">
                        <Table.Header>
                            <Table.Column isRowHeader>USER</Table.Column>
                            <Table.Column>EMAIL</Table.Column>
                            <Table.Column>ROLE</Table.Column>
                            <Table.Column>STATUS</Table.Column>
                            <Table.Column>JOINED</Table.Column>
                            <Table.Column>ACTIONS</Table.Column>
                        </Table.Header>
                        <Table.Body>
                            {
                                users.map(user => <Table.Row key={user._id}>
                                    <Table.Cell>{user.name}</Table.Cell>
                                    <Table.Cell>{user.email}</Table.Cell>
                                    <Table.Cell><span className={`px-2 rounded-2xl ${user.role === "admin" ? "bg-accent-soft text-accent-soft-foreground" : user.role === "vendor" ? "bg-cyan-100 text-cyan-500" : "bg-sky-100"}`}>{user.role}</span></Table.Cell>
                                    <Table.Cell className={`${user.status === "active" ? "text-green-500" : "text-red-500"}`}>{user.status}</Table.Cell>
                                    <Table.Cell>
                                        {new Date(user.createdAt).toLocaleDateString("en-GB").replace(/\//g, ".")}
                                    </Table.Cell>
                                    <Table.Cell>
                                        <div className='flex gap-2'>
                                            <AdminAdd user={user} />
                                            <VendorAdd user={user} />
                                            <FraudAdd user={user} />
                                        </div>
                                    </Table.Cell>
                                </Table.Row>)}
                        </Table.Body>
                    </Table.Content>
                </Table.ScrollContainer>
            </Table>
        </div>
    );
};

export default AdminUserManage;