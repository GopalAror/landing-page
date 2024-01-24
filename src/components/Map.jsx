import React from 'react'
import timer from "../assets/images/timer.svg";
import cloud from "../assets/images/cloud.svg";
import certificates from "../assets/images/certificates.svg";
import fram from "../assets/images/Frame 2.svg";
import MapCard from './MapCard';

const Map = () => {
    const part = [
        {
            id:1,
            svg: timer,
            work: "99.9% Uptime",
            para: "We Keep Your Web build Online 24x7x365. Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.",
            data:"fade-up",
        },
        {
            id:2,
            svg: cloud,
            work: "Blazing Fast Web Hosting",
            para: "We Keep Your Web build Online 24x7x365. Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.",
            data:"fade-down",
        },
        {
            id:3,
            svg: certificates,
            work: "Free SSL Certificates",
            para: "We Keep Your Web build Online 24x7x365. Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.",
            data:"fade-up",
        },
        {
            id:4,
            svg: fram,
            work: "24x7 Friendly Support",
            para: "We Keep Your Web build Online 24x7x365. Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.",
            data:"fade-down",
        },
    ]
    return (
        <div>
            <div className="max-w-[1284px] mx-auto px-3">
                <div className="flex flex-row flex-wrap -mx-3">
                    {part.map((k) => <MapCard key={k.id} img={k.svg} heading={k.work} animate={k.data} para={k.para} />)}
                </div>
            </div>
        </div>
    )
}

export default Map
