function ResultCard({ item }) {
    console.log("hi")
    console.log(item);
    const {
        images: {
            REGULAR: { url: imageUrl, width, height },
        },
        label,
        url: recipeUrl,
    } = item;

    return (
        <div className="recipe-card">
            <h1>{label}</h1>
            <img src={imageUrl} wdith={width} height={height} />
            <a href={recipeUrl}>View Recipe</a>
        </div>
    )
}

export default function Results({ hits }) {

    if (hits == null) {
        return
    }

    if (hits.length < 1) {
        return (
            <h2>no results!</h2>
        )
    }

    return (
        <>
            {hits.map(({ recipe }, j) => {
                return (
                    <ResultCard key={j} item={recipe} />
                )
            })}
        </>
    )
}


