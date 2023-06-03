import { useEffect } from 'react';

export default function TableRenderDespesas(setDespesaTableRow) {
    return(
    useEffect(() => {
        fetch('http://localhost:5000/despesas', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            setDespesaTableRow(data)
        })
        .catch((err) => console.log(err))
    }, [setDespesaTableRow])
)}