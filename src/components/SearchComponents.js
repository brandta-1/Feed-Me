import Select from 'react-select';
import { useState, useEffect } from "react"

export function SearchSelect({ i, f }) {

    return (
        <>
            <Select
                options={i.list}
                onChange={e => f(i.index, i.param, e)}
                isMulti={i.type == 'multiple'}
            />
        </>
    )
}

export function SearchRange({ i, f }) {

    const [newRange, setNewRange] = useState(i.max / 2);

    useEffect(() => {
        f(i.index, i.param, { value: newRange });
    }, [])

    return (

        <input
            type='range'
            min={i.min}
            max={i.max}
            value={newRange}
            onChange={(e) => {
                f(i.index, i.param, e.target);
                setNewRange(e.target.value);
            }}
        />
    )
}

export function SearchText({ i, f }) {

    const [newText, setNewText] = useState("")

    return (
        <input
            value={newText}
            onChange={(e) => {
                f(i.index, i.param, e.target);
                setNewText(e.target.value);
            }}
            type="text" id="item"
        />
    )
}