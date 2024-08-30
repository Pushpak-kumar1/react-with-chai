
import { useEffect, useState } from "react";


function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect( () => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency])) // ager dot use nhi krna toh [] ye bhi use kr skte hai data fetch krne k liye
        console.log(data);
    }, [currency])
    return data
}


export default function useCurrencyInfo();