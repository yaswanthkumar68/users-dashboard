import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { removeUser, changeUserStatus } from '../../actions/usersActions'

const UserInfo = ({arr, handleSet}) => {
    
    const dispatch = useDispatch()

    const handleRemove = (id) => {
        dispatch(removeUser(id))
        handleSet()
    }

    const handleChange = (id) => {
        dispatch(changeUserStatus(id))
        // handleSet()
    }

    return(
        
        <div className="userinfo-container">
            {arr.map((ele) => {
                return(
                    <div key={ele.id} className="userinfo-details" style={!ele.isActive ? {backgroundColor:"#878490", boxShadow:"0px 0px 15px red"} : {backgroundColor:"#D9DDFB", boxShadow:"0px 0px 15px green"}} >
                        <input 
                            type="checkbox" 
                            checked={ele.isActive} 
                            onChange={() => {handleChange(ele.id)}} 
                        /><br/>
                        <i className="far fa-user fa-5x" style={ele.isActive ? {color: "#1E201D"} : {color:"white"}}></i>
                        <h2 className="userinfo-name" style={ele.isActive ? {color: "#1E201D"} : {color:"white"}}>{ele.username}</h2>
                        <button onClick={() => {handleRemove(ele.id)}} className="userinfo-button-delete">Delete</button>   
                    </div>
                )
            })}

        </div>

    
        
    )
}

export default UserInfo