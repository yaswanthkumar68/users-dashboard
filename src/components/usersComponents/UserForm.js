import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUsers } from '../../actions/usersActions'
import './style.css'


const UsersForm = (props) => {
    const [ username, setUsername ] = useState('')
    const [ isActive, setIsActive ] = useState(false)

    const dispatch = useDispatch()

    const handleUsername = (e) => {
        setUsername(e.target.value)
    }

    const handlecheck = (e) => {
        setIsActive(e.target.checked)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(username){
            const details = {
                id : Number( new Date()),
                username : username,
                isActive : isActive
            }
            //console.log(details)
            if(localStorage.getItem('usersData')){
                const storedData = JSON.parse(localStorage.getItem('usersData'))
                //console.log(storedData, 'ls')
                const userData = [...storedData, {...details}]
                localStorage.setItem('usersData', JSON.stringify(userData))
            }
            else{
                const userData = []
                userData.push(details)
                localStorage.setItem('usersData', JSON.stringify(userData))
            }
            dispatch(addUsers(details))
            setUsername('')
            setIsActive(false)
        }
        else{
            alert('Name cannot be blank')
        }
        
    }

    return(
        <div >
            <form onSubmit={handleSubmit} className="userform-container">
                <input
                    className="userform-input" 
                    type="text"
                    placeholder="Enter username"
                    value={username}
                    onChange={handleUsername}
                /> 
                <div className="userform-checkbox-text">
                <input
                    className="userform-checkbox"
                    type="checkbox"
                    checked={isActive}
                    onChange={handlecheck}
                    /><span className="userform-checkbox-text">active</span>
                </div>
                <input 
                    className="userform-button-save"
                    type="submit" 
                    value="save" 
                />
            </form>
        </div>
    )
}

export default UsersForm