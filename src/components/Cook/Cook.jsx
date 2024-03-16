import PropTypes from 'prop-types';
export default function Cook({ cooks, handleCookData }) {
    const { recipe_name, recipe_image, short_description, ingredients, preparing_time, calories } = cooks;
    return (
        <div>
            <div className="card w-80 glass p-4">
                <figure><img src={recipe_image} alt={recipe_name} /></figure>
                <div className="p-2">
                    <h2 className="card-title">{recipe_name}</h2>
                    <p>{short_description}</p>
                </div>
                <div className="p-4">
                    <h1>Ingredients: {ingredients.length}</h1>
                    <ul className="list-disc px-6">
                        {ingredients.map((item, idx) => <li key={idx}>{item}</li>)}
                    </ul>
                </div>
                <div className="flex justify-between p-4">
                    <p><i className="fa-solid fa-clock"></i> {preparing_time}</p>
                    <p><i className="fa-solid fa-fire"></i> {calories}</p>
                </div>
                <button className="btn btn-primary" onClick={() => handleCookData(cooks)}>Want to cook</button>
            </div>

        </div>
    )

}
Cook.propTypes = {
    cooks: PropTypes.object,
    handleCookData: PropTypes.func
}
