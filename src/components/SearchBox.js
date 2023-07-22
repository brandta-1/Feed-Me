import params from '../params';

export default function SearchBox({addParam}) {

    return (
        <>
            <div className="search-box" />

            <select onChange={e => addParam(e.target.value)}>
                <option disabled selected value> -- select an option -- </option>

                {Object.entries(params).map((i,j) => {
                    return (
                        <option key={j} id={i[0]}>{i[1].title} </option>
                    )

                })}

            </select>

            <div />
        </>
    )
}