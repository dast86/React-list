import { Provider } from "react-redux";
import { store } from "../store";
import React, { ReactNode } from "react";




const StoreProvider:React.FC<{ children: ReactNode }> = ({children}) => (
    <Provider store={store}>{children}</Provider>
)

export default StoreProvider




