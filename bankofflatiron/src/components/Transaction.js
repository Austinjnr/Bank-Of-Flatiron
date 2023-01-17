import React, { useEffect, useState } from "react"
import TransactionItem from "./TransactionItem"

function Transaction (){

    const [transaction, setTransaction] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/transactions")
        .then(r => r.json())
        .then(transc => setTransaction(transc))
        .catch(kaws => console.log(kaws))
    },[])

    return(
        <div>
            <table>
                <tr>
                    
                </tr>
            </table>
        </div>
    )
}