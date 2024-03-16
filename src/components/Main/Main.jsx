import { useState } from "react";
import PropTypes from 'prop-types';
import CookTable from "../CookTable/CookTable";
import Cookies from "../Coookies/Cookies";

export default function Main({ toast }) {
    const [cookData, setCookData] = useState([]);
    const [removeData, setRemove] = useState([]);
    const [time, setTime] = useState(0)
    const [calcium, setCalories] = useState(0);


    const handleCookData = (data) => {
        const isExist = cookData.find(item => item.recipe_id === data.recipe_id);
        if (!isExist) {
            setCookData([...cookData, data]);
            toast.success("Added Item To Cook");
        } else {
            toast.error("Already Exists This Item");


        }
    };


    const handleRemove = (data) => {
        const t = data.preparing_time.split(/\D/)[0];
        const c = data.calories.split(/\D/)[0];
        setRemove([...removeData, data]);
        const newItemForCookData = cookData.filter(rmv => rmv.recipe_id !== data.recipe_id);
        setCookData(newItemForCookData);
        setTime(time + parseInt(t));
        setCalories(calcium + parseInt(c));
    }
    return (
        <div>
            <div className="container m-auto p-4 lg:p-10 text-center space-y-5">
                <h1 className="text-4xl lg:text-7xl ">Our Recipes</h1>
                <p>
                    The kitchen is a sanctuary—a place where time slows down, and worries melt away. Whether you’re kneading dough for fresh bread, searing a steak to perfection, or simmering a comforting soup, you’re creating more than a meal. You’re creating memories—shared laughter around the dining table, secret family recipes passed down through generations, and the joy of nourishing others.
                </p>
            </div>
            <div id="cooking" className="flex flex-col lg:flex-row justify-around gap-5 p-4 container m-auto">
                <Cookies handleCookData={handleCookData}></Cookies>
                <CookTable cooks={cookData} handleRemove={handleRemove} removeData={removeData} time={time} calcium={calcium}></CookTable>
            </div>

        </div>
    )
}
Main.prototype = {
    toast: PropTypes.object
}
