//5. Use Slice => collection of name, initialState, reducers and Actions
import { createSlice } from "@reduxjs/toolkit";
//8. import initialSTATE userList
import { userList } from "./Data";


//6. initiallizing userSlice
const userSlice = createSlice({
    name: 'user',
    initialState: userList,
    reducers: {
        //All actions here...
        addUser: (state, action) => {  //For Creation
            //16. Action Performed
            state.push(action.payload) //Updates STATE and push new details to table
        },
        //18. 
        updtUser : (state, action) =>{   //For Updation
            //21.
            const {id, name, mail} = action.payload
            const u = state.find(user => user.id == id)
            if(u){
                u.name = name;
                u.mail = mail;
            }
        },
        dltUser : (state, action) => {
            //24.
            const {id} = action.payload
            const u = state.find(user => user.id == id)
            if(u){
                return state.filter( f => f.id !== id);
            }
        }
    }
})

//Make reducer accessable
export default userSlice.reducer;
//export action
export const {addUser, updtUser, dltUser} = userSlice.actions