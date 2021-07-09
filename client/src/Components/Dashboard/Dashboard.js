import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import ChatRoom from '../ChatRoom/ChatRoom';
import Profile from '../Profile/Profile';
const Dashboard = () => {
    return (
        <main>
            <Sidebar />
            <ChatRoom />
            <Profile />
        </main>
    );
};

export default Dashboard;