import React from 'react'
import UsersForm from './components/usersComponents/UserForm'
import UsersList from './components/usersComponents/UsersList'
import UsersStatus from './components/usersComponents/UsersStatus'
import './components/usersComponents/style.css'

const App = () => {

    return(
        <div className="app-container">
            <h1 className="app-heading">Users dashboard</h1>
            <div className="app-form-status">
                <UsersForm />
                <UsersStatus />
            </div>
            <UsersList />
        </div>
        
    )
}

export default App