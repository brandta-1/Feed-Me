import { SearchSelect, SearchRange, SearchText } from './SearchComponents';

export default function SearchForm({ settings, addQuery }) {

    console.log("you re-rendered lol");

    function RenderForm(i) {
        if (i.type === 'select' || i.type === 'multiple') {
            return (
                <SearchSelect i={i} f={addQuery} />
            )
        }
        if (i.type === 'range') {
            return (
                <SearchRange i={i} f={addQuery} />
            )
        }
        if (i.type === 'text') {
            return (
                <SearchText i={i} f={addQuery} />
            )
        }
    }

    return (
        <>
            {settings.map((i, j) => {
                console.log(i);
                return (
                    <>
                        <p>{i.title}</p>
                        {RenderForm(i)}
                        <button>delete</button>
                    </>
                )
            })}

            {settings.length > 0 &&
                <button>Search</button>
            }
        </>
    )
}