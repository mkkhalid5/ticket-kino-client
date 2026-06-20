import { getUserSession } from '@/lib/api/session';
import { getAllUser } from '@/lib/api/users';
import { Avatar, Card, Chip } from '@heroui/react';
import React from 'react';

const VendorProfile = async () => {
    const allUser = await getAllUser();
    console.log('al', allUser);
    const user = await getUserSession();
    console.log('u', user);
    const formattedDate = new Date(user.createdAt).toLocaleDateString(
        "en-GB"
    ).replace(/\//g, ".");

    const currentUser = allUser.find(
        (u) => u.email === user.email
    );

    console.log(currentUser);
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 p-4">
            <Card className="w-full max-w-lg rounded-3xl shadow-xl overflow-hidden">

                {/* Top Banner */}
                <div className="h-24 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>

                <div className="p-6 flex flex-col items-center -mt-12">

                    {/* Avatar */}
                    <div className="relative">
                        <Avatar className="w-28 h-28 ring-4 ring-white shadow-lg">
                            <Avatar.Image
                                alt={currentUser.name}
                                src={currentUser.image}
                            />
                            <Avatar.Fallback>
                                {currentUser.name?.charAt(0)}
                            </Avatar.Fallback>
                        </Avatar>

                        {/* online dot */}
                        <span className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
                    </div>

                    {/* Name + Email */}
                    <div className="text-center mt-4 space-y-1">
                        <h2 className="text-2xl font-bold text-gray-800">
                            {currentUser.name}
                        </h2>
                        <p className="text-gray-500 text-sm">
                            {currentUser.email}
                        </p>
                    </div>

                    {/* Chips */}
                    <div className="flex flex-wrap justify-center gap-2 mt-4">
                        <Chip color="primary" variant="soft">
                            👤 {currentUser.role}
                        </Chip>

                        <Chip color={currentUser.status === "active" ? "success" : "danger"} variant="soft">
                            {currentUser.status}
                        </Chip>

                        <Chip color="warning" variant="soft">
                            📅 {formattedDate}
                        </Chip>
                    </div>

                    {/* Extra Info Section */}
                    <div className="w-full mt-6 grid grid-cols-2 gap-3 text-center">
                        <div className="p-3 rounded-xl bg-gray-50">
                            <p className="text-xs text-gray-500">Role</p>
                            <p className="font-semibold capitalize">
                                {currentUser.role}
                            </p>
                        </div>

                        <div className="p-3 rounded-xl bg-gray-50">
                            <p className="text-xs text-gray-500">Status</p>
                            <p className={`font-semibold ${currentUser.status === "active"
                                ? "text-green-600"
                                : "text-red-500"
                                }`}>
                                {currentUser.status}
                            </p>
                        </div>
                    </div>

                    {/* Footer vibe */}
                    <p className="text-xs text-gray-400 mt-6">
                        Member since {formattedDate}
                    </p>
                </div>
            </Card>
        </div>
    );
};

export default VendorProfile;