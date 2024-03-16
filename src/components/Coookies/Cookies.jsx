import { useEffect } from "react";
import { useState } from "react"
import Cook from "../Cook/Cook";
import PropTypes from 'prop-types';
export default function Cookies({ handleCookData }) {
    const [myData, setData] = useState([]);

    useEffect(() => {
        fetch("./myData.json")
            .then(res => res.json())
            .then(data => setData(data));
    }, [])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 p-3 lg:w-2/4">
            {myData.map(cook => <Cook key={cook.recipe_id}
                cooks={cook}
                handleCookData={handleCookData}></Cook>)}


        </div>
    )
}
Cookies.propTypes = {
    handleCookData: PropTypes.func
}
