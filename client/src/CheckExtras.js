const CheckExtras = props => {

const Extras = [
    {nombre:"Extra 1", valor:100},
    {nombre:"Extra 2", valor:200},
    {nombre:"Extra 3", valor:300},
    {nombre:"Extra 4", valor:400},
];
const {
    Check,
    setCheck,
    setChecked
    }  = props;

const handleChange = e => {
    console.log("Name  = "+ e.target.value);
    console.log("Value = "+ e.target.dataset.valor);
}

return(
    
    <>

<table>
    <thead>
        <tr>
            <th>Extra</th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            {Extras.map((m,i) => (
                <tr>
                    <td><label htmlFor="">{m.nombre}</label></td>
                    <td>
                    <input type="checkbox"             
                            onChange={handleChange}
                            value={m.nombre}
                            data-valor={m.valor}
                            checked={Check === m.nombre ? true : false} /></td>
                </tr>
            ))}
        </tr>
    </tbody>
</table>


</>
);
}

export default CheckExtras;