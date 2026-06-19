import { getUserSession } from '@/lib/api/session';
import { getAllUser } from '@/lib/api/users';
import { Avatar, Card, Chip } from '@heroui/react';
import React from 'react';

const AdminProfilePage = async () => {
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
        <div className='flex justify-center items-center h-150'>
            <Card className="max-w-xl mx-auto p-6 h-100">
                <div className="flex flex-col justify-center gap-4 items-center">

                    <Avatar className='w-32 h-32'>
                        <Avatar.Image alt={currentUser.name} src={currentUser.image} />
                        <Avatar.Fallback>{currentUser.name}</Avatar.Fallback>
                    </Avatar>
                    <div>
                        <h2 className="text-xl font-bold">
                            {currentUser.name}
                        </h2>
                        <p className="text-gray-500">
                            {currentUser.email}
                        </p>
                        <div className="flex gap-2 mt-2">
                            <Chip color="primary">
                                {currentUser.role}
                            </Chip>
                            <Chip color="success">
                                {currentUser.status}
                            </Chip>
                            <Chip color="success">
                                {formattedDate}
                            </Chip>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default AdminProfilePage;