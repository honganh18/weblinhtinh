import { firestore } from '../firebase';
import { useEffect, useState } from 'react';


export const Test = () => {
    useEffect(() => {
        getData();
    }, []);

    function getData() {
        firestore.get('test').then((data) => {
            setDatas(data)
        });
    }

    function handleAdd() {
        firestore.add('test', { name, date }).then(() => {
            getData();
        })
    }

    function handleDelete(id: any) {
        firestore.delete('test', id).then(() => {
            getData();
        })
    }

    const [datas, setDatas] = useState<{ id: string, src: string }[]>([])
    const [name, setName] = useState<any>('')
    const [date, setDate] = useState<any>('')
    return (
        <div className="App"

        >
            <div>
                <input type="text" value={name} onChange={({ target: { value } }) => {
                    setName(value);
                }} />
                <input type="date" value={date} onChange={({ target: { value } }) => {
                    setDate(value);
                }} />
                <button onClick={handleAdd}>Add</button>
            </div>
            <div className="brick-container">
                {
                    datas.map((data: any) => {
                        return (<div>
                            {
                                data.name
                            }
                            &nbsp;
                            -
                            &nbsp;
                            {
                                data.date
                            }
                            &nbsp;
                            <button onClick={()=>handleDelete(data.id)}>Xóa</button>
                        </div>)
                    })
                }
            </div>
        </div>
    )
}