import axios from "axios";
import React, { useEffect,useState } from "react";

const GetData = () => {
    const [data, setData] = useState(null);

    // get data from api
    useEffect(() => {
        axios.get('https://geolocation-db.com/json/')
            .then((response) => {
                setData({
                    "time": getTime(),
                    "ip": response.data.IPv4,
                    "country": response.data.country_code,
                    "state": response.data.state,
                    "city": response.data.city,
                    "zip": response.data.postal,
                    "lat": response.data.latitude,
                    "lon": response.data.longitude,
                    "reason": '-',
                    "page": window.location.pathname
                })
            }).catch((error) => {
                setData({
                    "time": getTime(),
                    "reason": error.code,
                    "page": window.location.pathname
                });
        })

    }, []);

    // store data on api
    useEffect(() => {
        if (data === null)
            return;

        axios.post('https://24fd7p0csd.execute-api.us-east-1.amazonaws.com/Prod/logingest/',data).
        then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        })

    }, [data]);

    const getTime = () => {
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const hour = date.getHours();
        const minute = date.getMinutes();
        const second = date.getSeconds();
        return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
    }

    return(
        <div></div>
    )
}

export default GetData;