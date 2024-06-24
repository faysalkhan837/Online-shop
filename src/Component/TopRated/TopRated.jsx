

const TopRated = ({rating}) => {
    const {name, image, price} = rating;
    return (
        <div className="">
            <img className="rounded-lg" src={image} />
            <h1>{name}</h1>
            <p>{price}</p>
        </div>
    );
};

export default TopRated;