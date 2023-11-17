import Select from 'react-select';
import { useState, useEffect } from "react"

export function SearchSelect({ i, f }) {

    return (
        <>
            <Select
                options={i.list}
                onChange={e => f(e, i.index, i.param)}
                isMulti={i.type === 'multiple'}
            />
        </>
    )
}

export function SearchRange({ i, f }) {

    const [newRange, setNewRange] = useState(i.max / 2);

    useEffect(() => {
        f({ value: newRange }, i.index, i.param);
    }, [])

    return (

        <input
            type='range'
            min={i.min}
            max={i.max}
            value={newRange}
            onChange={(e) => {
                f(e.target, i.index, i.param);
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
                f(e.target, i.index, i.param);
                setNewText(e.target.value);
            }}
            type="text" id="item"
        />
    )
}