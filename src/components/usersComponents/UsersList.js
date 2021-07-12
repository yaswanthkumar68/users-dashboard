import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch} from 'react-redux'

import UserInfo from './UserInfo'

const UsersList = (props) => {

    const [ searchName, setSearchName ] = useState('')
    const [ data, setData ] = useState([])

    const users = useSelector((state) => {
        return state.users
    })
    //console.log(users)
    localStorage.setItem('usersData', JSON.stringify(users))

    useEffect(() => {
        if(searchName === ''){
            setData(users)
        }
        else{
            const searchResult = users.filter((ele) => {
                return ele.username.toLowerCase().includes(searchName.toLowerCase().trim())
            })
            setData(searchResult)
        }
    }, [searchName, users])

    //console.log(data, 'data')

    const handleSearchName = (e) => {
        const result = e.target.value
        setSearchName(result)
    }

    const handleSet = () => {
        setSearchName('')
    }


    return(
        <div className="userslist-container">
            <div className="userlist-heading-input">
                <h1 className="userlist-heading">Listing Users - {data.length}</h1>
                <input 
                    className="userlist-search"
                    type="text" 
                    placeholder="search by username"
                    value={searchName}
                    onChange={handleSearchName}
                />
            </div>
            <UserInfo arr={data} handleSet={handleSet}/>
        </div>
    )
}

export default UsersList