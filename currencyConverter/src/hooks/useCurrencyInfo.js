// CUSTOM HOOK

    import {useEffect, useState} from "react"


    function useCurrencyInfo(currency){
            // we have given empty object so that it won't show error

        const [data, setData] = useState({})
        useEffect(() => {
            fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => setData(res[currency]))
            .catch(`unexpected error caught`)
            console.log(data);
        }, [currency])
        console.log(data);
        return data
    }
    
    export default useCurrencyInfo;