import AdminAdd from '@/components/dashboard/admin/AdminAdd';
import FraudAdd from '@/components/dashboard/admin/FraudAdd';
import VendorAdd from '@/components/dashboard/admin/VendorAdd';
import { getAllUser } from '@/lib/api/users';
import { Shield } from '@gravity-ui/icons';
import { Table } from '@heroui/react';
import React from 'react';

const AdminUserManage = async () => {
    const users = await getAllUser();
    console.log("users", users);
    return (
        <div className='p-5'>
            <div className='py-10'>
                <span className='px-2 rounded-2xl bg-red-100 text-red-500 flex justify-center items-center w-max gap-1'><Shield />Admin Access</span>
                <h2 className='text-2xl font-bold'>Admin Control Center</h2>
            </div>
            <div className="hidden md:block">
                <Table className="rounded-2xl overflow-hidden border shadow-sm bg-white">
                    <div className="flex items-center justify-between px-6 py-4 border-b bg-gray-50">
                        <h2 className="text-lg font-bold text-gray-800">
                            User Management
                        </h2>
                        <span className="text-xs text-gray-500">
                            Total: {users.length}
                        </span>
                    </div>
                    <Table.ScrollContainer>
                        <Table.Content aria-label="Team members">
                            <Table.Header className="bg-gray-100 text-gray-700">
                                <Table.Column isRowHeader minWidth={160}>User</Table.Column>
                                <Table.Column minWidth={200}>Email</Table.Column>
                                <Table.Column minWidth={120}>Role</Table.Column>
                                <Table.Column minWidth={120}>Status</Table.Column>
                                <Table.Column minWidth={140}>Joined</Table.Column>
                                <Table.Column minWidth={160}>Actions</Table.Column>
                            </Table.Header>
                            <Table.Body>
                                {users.map((user) => (
                                    <Table.Row
                                        key={user._id}
                                        className="hover:bg-gray-50 transition"
                                    >
                                        <Table.Cell className="font-medium text-gray-800">
                                            {user.name}
                                        </Table.Cell>
                                        <Table.Cell className="text-gray-600">
                                            {user.email}
                                        </Table.Cell>
                                        <Table.Cell>
                                            <span
                                                className={`px-3 py-1 rounded-full text-xs font-medium ${user.role === "admin"
                                                    ? "bg-purple-100 text-purple-600"
                                                    : user.role === "vendor"
                                                        ? "bg-cyan-100 text-cyan-600"
                                                        : "bg-sky-100 text-sky-600"
                                                    }`}
                                            >
                                                {user.role}
                                            </span>
                                        </Table.Cell>
                                        <Table.Cell>
                                            <span
                                                className={`font-medium ${user.status === "active"
                                                    ? "text-green-500"
                                                    : "text-red-500"
                                                    }`}
                                            >
                                                {user.status}
                                            </span>
                                        </Table.Cell>
                                        <Table.Cell className="text-gray-600">
                                            {new Date(user.createdAt)
                                                .toLocaleDateString("en-GB")
                                                .replace(/\//g, ".")}
                                        </Table.Cell>
                                        <Table.Cell>
                                            <div className="flex gap-2">
                                                <AdminAdd user={user} />
                                                <VendorAdd user={user} />
                                                {
                                                    user.role === "vendor" ?  <FraudAdd user={user} /> : user.role === "admin" ? <FraudAdd user={user} /> : ""
                                                }
                                            </div>
                                        </Table.Cell>
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        </Table.Content>
                    </Table.ScrollContainer>
                </Table>
            </div>
            <div className="md:hidden space-y-4 p-3">
                <div className="flex items-center justify-between p-4 border rounded-xl bg-white shadow-sm">
                    <h2 className="text-lg font-bold">
                        User Management
                    </h2>
                    <span className="text-xs text-gray-500">
                        {users.length} users
                    </span>
                </div>
                {users.map((user) => (
                    <div
                        key={user._id}
                        className="bg-white border rounded-2xl p-4 shadow-sm space-y-3 hover:shadow-md transition"
                    >
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="font-semibold text-lg">
                                    {user.name}
                                </h3>
                                <p className="text-sm text-gray-500 break-all">
                                    {user.email}
                                </p>
                            </div>
                            <span
                                className={`px-2 py-1 rounded-full text-xs font-medium ${user.role === "admin"
                                    ? "bg-purple-100 text-purple-600"
                                    : user.role === "vendor"
                                        ? "bg-cyan-100 text-cyan-600"
                                        : "bg-sky-100 text-sky-600"
                                    }`}
                            >
                                {user.role}
                            </span>
                        </div>
                        <div className="grid grid-cols-2 gap-3 text-sm">
                            <div>
                                <p className="text-gray-400 text-xs">Status</p>
                                <p
                                    className={`font-medium ${user.status === "active"
                                        ? "text-green-500"
                                        : "text-red-500"
                                        }`}
                                >
                                    {user.status}
                                </p>
                            </div>
                            <div>
                                <p className="text-gray-400 text-xs">Joined</p>
                                <p className="font-medium">
                                    {new Date(user.createdAt)
                                        .toLocaleDateString("en-GB")
                                        .replace(/\//g, ".")}
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-2 pt-3 border-t">
                            <AdminAdd user={user} />
                            <VendorAdd user={user} />
                            {
                                user.role === "vendor" ? <FraudAdd user={user} /> : ""
                            }
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminUserManage;