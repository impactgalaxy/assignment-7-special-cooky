import PropTypes from 'prop-types';
import { useState } from 'react';

function CookTable({ cooks }) {
    const [removeData, setRemove] = useState([]);

    const handleRemove = (id) => {
        //const newArr = cooks.filter(item => item.recipe_id !== id);
        console.log(id);
        setRemove([...removeData, id]);
    }

    return (
        <div className='p-4 border lg:w-1/2 rounded-lg'>
            <table className='w-full *:font-normal'>
                <caption>Want to cook {cooks.length}</caption>
                <thead>
                    <tr className='*:font-normal'>
                        <th></th>
                        <th>Name</th>
                        <th>Times</th>
                        <th>Calories</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody className='space-y-4'>
                    {cooks.map((data, index) => {
                        return (
                            <tr key={index} className=' shadow-sm *:font-normal border'>
                                <th>{index + 1}</th>
                                <th>{data.recipe_name}</th>
                                <th>{data.preparing_time}</th>
                                <th>{data.calories}</th>
                                <th className='btn btn-primary' onClick={() => handleRemove(data)}>Prepare</th>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            <div>
                <table className='w-full *:font-normal'>
                    <caption>Currently Cooking Item {removeData.length < 10 ? "0" + removeData.length : removeData.length}</caption>
                    <thead>
                        <tr className='*:font-normal'>
                            <th></th>
                            <th>Name</th>
                            <th>Times</th>
                            <th>Calories</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody className='space-y-4'>
                        {removeData.map((data, index) => {
                            return (
                                <tr key={index} className=' shadow-sm *:font-normal border'>
                                    <th>{index + 1}</th>
                                    <th>{data.recipe_name}</th>
                                    <th>{data.preparing_time}</th>
                                    <th>{data.calories}</th>

                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

CookTable.propTypes = {
    cooks: PropTypes.array

}

export default CookTable

