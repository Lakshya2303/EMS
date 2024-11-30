import React, { useState } from 'react'
import Login from './components/Auth/Login.jsx'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard.jsx'
import AdminDashboard from './components/Dashboard/AdminDashboard.jsx'


const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [role, setRole] = useState('');
    const [username, setUsername] = useState('')

    function handleLogin(userRole, userName) {
        setIsLoggedIn(true);
        setRole(userRole);
        setUsername(userName);
    }

    // if (!isLoggedIn) {
    //     return <Login onLogin={handleLogin} />;
    // } else if (role === 'admin') {
    //     return <AdminDashboard username={username}/>;
    // } else if (role === 'employee') {
    //     return <EmployeeDashboard username={username}/>;
    // } else {
    //     return <div>Invalid Role</div>;
    // }
    return <EmployeeDashboard username={username}/>
}

export default App