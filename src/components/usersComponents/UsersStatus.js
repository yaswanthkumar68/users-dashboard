import React from 'react'
import { useDispatch } from 'react-redux'
import { activateAll, deactivateAll } from '../../actions/usersActions'
import './style.css'

const UsersStatus = (props) => {
    const dispatch = useDispatch()

    const handleActivate = () => {
        dispatch(activateAll())
    }

    const handleDeactivate = () => {
        dispatch(deactivateAll())
    }

    return(
        <div className="userstatus-container">
            <button className="userstatus-button-activate" onClick={handleActivate}>Activate all</button>
            <button className="userstatus-button-deactivate" onClick={handleDeactivate}>Deactivate all</button>
        </div>
    )
}

export default UsersStatus