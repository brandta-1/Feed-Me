import Select from 'react-select';

export default function SearchForm({ settings, addQuery }) {



    console.log("you re-rendered lol");
    return (
        <>

            {settings.map((i, j) => {


                if (i.type === 'select' || i.type === 'multiple') {
                    return (
                        <>
                            <p>{i.title}</p>
                            <Select
                                options={i.list}
                                onChange={e => addQuery(
                                    !Array.isArray(e) ? e.value : e.map(({ value }) => value)
                                )}
                                isMulti={i.type == 'multiple'}
                            />
                            <button>delete</button>
                        </>
                    )
                }

                return (
                    // <Select
                    // options={i.list}
                    // onChange={e => addQuery(e.target.value)}

                    // />
                    <p> hang on</p>

                )
            })}

        </>
    )


}