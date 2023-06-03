import { useEffect } from 'react';

export default function TableRenderReceitas(setReceitaTableRow) {
    return(
    useEffect(() => {
        fetch('http://localhost:5000/receitas', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            setReceitaTableRow(data)
        })
        .catch((err) => console.log(err))
    }, [setReceitaTableRow])
)}