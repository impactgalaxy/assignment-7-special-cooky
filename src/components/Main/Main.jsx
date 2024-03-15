import { useState } from "react";
import CookTable from "../CookTable/CookTable";
import Cookies from "../Coookies/Cookies";

export default function Main() {
    const [cookData, setCookData] = useState([]);

    const handleCookData = (data) => {
        const isExist = cookData.find(item => item.recipe_id === data.recipe_id);
        if (!isExist) {
            setCookData([...cookData, data]);
        } else {
            alert("Already Exist")
        }
    }
    return (
        <div>
            <div className="container m-auto p-4 lg:p-10 text-center space-y-5">
                <h1 className="text-4xl lg:text-7xl ">Our Recipes</h1>
                <p>
                    The kitchen is a sanctuary—a place where time slows down, and worries melt away. Whether you’re kneading dough for fresh bread, searing a steak to perfection, or simmering a comforting soup, you’re creating more than a meal. You’re creating memories—shared laughter around the dining table, secret family recipes passed down through generations, and the joy of nourishing others.
                </p>
            </div>
            <div className="flex flex-col lg:flex-row justify-around gap-5 p-4 container m-auto">
                <Cookies handleCookData={handleCookData}></Cookies>
                <CookTable cooks={cookData}></CookTable>
            </div>

        </div>
    )
}
