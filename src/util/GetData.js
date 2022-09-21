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
                    time: getTime(),
                    ip: response.data.IPv4,
                    country: response.data.country_code,
                    state: response.data.state,
                    city: response.data.city,
                    zip: response.data.postal,
                    latitude: response.data.latitude,
                    longitude: response.data.longitude,
                    status:'success',
                    reason: '-'
                })
            }).catch((error) => {
                setData({
                    time: getTime(),
                    ip: '-',
                    country: '-',
                    state: '-',
                    city: '-',
                    zip: '-',
                    latitude: '-',
                    longitude: '-',
                    status:'error',
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
        const yyyymmdd = date.getFullYear()*10000+(date.getMonth()+1)*100+date.getDate();
        const hhmmss = date.getHours()*10000+date.getMinutes()*100+date.getSeconds();
        return `${yyyymmdd}${hhmmss}`;
    }

    return (
        <p>Hello world</p>
    )
}

export default GetData;