import axios from "axios";
import React, { useEffect,useState } from "react";

const GetData = () => {
    const [data, setData] = useState(null);
    const [time, setTime] = useState(null);

    // get data from api
    useEffect(() => {
        // setTime(getTime())
        axios.get('https://geolocation-db.com/json')
            .then((response) => {
                setData({
                    timestemap: getTime(),
                    ip: response.data.IPv4,
                    country: response.data.country_code,
                    state: response.data.state,
                    city: response.data.city,
                    zip: response.data.postal,
                    latitude: response.data.latitude,
                    longitude: response.data.longitude,
                    data: true,
                    reason: '-'
                })
            }).catch((error) => {
                setData({
                    timestemap: getTime(),
                    ip: null,
                    country: null,
                    state: null,
                    city: null,
                    zip: null,
                    latitude: null,
                    longitude: null,
                    data: false,
                    reason: error.code
                });
        })

    }, []);

    useEffect(() => {
        if (data === null)
            return;

        console.log(data);

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

    return (
        <p>Hello world</p>
    )
}

export default GetData;