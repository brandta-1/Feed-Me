import { SearchSelect, SearchRange, SearchText } from './SearchComponents';
import React from 'react';

export default function SearchForm({ settings, addQuery, tf }) {

    console.log("you re-rendered lol");

    return (
        <>
            {settings.map((i, j) => {
                console.log(i);
                return (
                    <>
                        <p>{i.title}</p>
                        {React.createElement(i.type === 'select' || i.type === 'multiple' ?
                            SearchSelect : (i.type === 'range' ? SearchRange : SearchText), {
                            i: i,
                            f: addQuery
                        })}
                    </>
                )
            })}

            {settings.length > 0 &&
                <button onClick={(e) => tf(e)}>Search</button>
            }
        </>
    )
}