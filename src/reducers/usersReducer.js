const initialStatevalue = JSON.parse(localStorage.getItem('usersData'))||[]

const usersReducer = (state=initialStatevalue, action) => {
    switch (action.type) {
        case 'ADD_USERS' : {
            return [...state, action.payload]
        }
        
        case 'CHANGE_STATUS' : {
            const res = state.map((ele) => {
                if(ele.id === action.payload){
                    return {...ele, isActive : !ele.isActive}
                }
                else{
                    return {...ele}
                }
            })

            return res
        }
        case 'REMOVE_USER' : {
            const res = state.filter((ele) => {
                return ele.id !== action.payload
            })
            return res
        }

        case 'ACTIVATE_ALL' : {
            const res = state.map((ele) => {
                return {...ele, isActive : true}
            })
            return res
        }

        case 'DEACTIVATE_ALL' : {
            const res = state.map((ele) => {
                return {...ele, isActive : false}
            })
            return res
        }
        default : {
            return [...state]
        }
    }
}

export default usersReducer