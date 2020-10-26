import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import NavBar from "../components/NavBar";

function Works (){

    return(
        <div>
            <NavBar
                    txt="Trabajos"
                    type="search"
                   // history={history}
                    NewCustomer="hidden"
                    newEntry="hidden"
                />

        </div>
    )

}
export default Works