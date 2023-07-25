import Select from 'react-select';
import params from '../params';

export default function SearchBox({ addParam }) {

    const theParams = Object.values(params).map((i, j) => {
        return {
            value: j,
            label: i.title
        }
    })

    return (
        <>
            <Select
                options={theParams}
                onChange={e => addParam(e)}
                isMulti={true}
            />
        </>
    )
}