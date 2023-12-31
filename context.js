//from UserContext.j
//created
import { createContext } from "react";
const UserContext = createContext({
    loggedInUser: "Default User"
});

export default UserContext;

//in function based component
//used as a hook

//consuming
const data = useContext(UserContext);
console.log(data.loggedInUser);


//in class based Component
//used as a component
<UserContext.Cusumer>
  {(data) => console.log(data)};
</UserContext.Cusumer>




//providing
<UserContext.Provider value = {{loggedInUser : someName}}>
all the data here where you wanted to update loggedInUser
    </UserContext.Provider>
