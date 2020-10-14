import React from 'react'


class CustomerTable extends React.Component {
    

    render() {
        const { id, nombre, direccion, telefono, handleCustomer } = this.props
        return (
            <tr
            onClick={() => handleCustomer(id)}
            id={id}
            key={id.toString()}>            
                <th scope="row">{id}</th>
                <td>{nombre}</td>
                <td>{direccion}</td>
                <td>{telefono}</td>
                </tr>
        )

    }



}
export default CustomerTable
