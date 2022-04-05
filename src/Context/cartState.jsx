import cartContext from "./cartContext";
import Header from "../Header/header.component";

export const CartState= (props)=>{
    const state=7;

return (
    <cartContext.Provider value={state}>
        {/* <Header/> */}

    </cartContext.Provider>
)
}