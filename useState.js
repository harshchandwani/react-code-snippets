// ****************USESTATE****************

// **`useState([reslist])`**:

// - This is the actual usage of the **`useState`** hook. It takes an initial state value as an argument and returns an array with two elements:
//     - The first element (**`listOfRestaurants`**) is the current state value, initialized with the value **`[reslist]`**. This means that **`listOfRestaurants`** initially contains an array with a single element, which is the value of **`reslist`**.
//     - The second element (**`setListOfRestaurants`**) is a function that you can use to update the state value. When you call this function with a new value, it will trigger a re-render of your component with the updated state.


const [listOfRestaurants, setListOfRestraunt] = useState([]);
