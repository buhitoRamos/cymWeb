import React from 'react'


class CustomerTable extends React.Component {

    render() {
        const { id, nombre, direccion, telefono } = this.props
        return (
            <tr>
            
                <th scope="row"
                id="id" >{id}</th>
                <td>{nombre}</td>
                <td>{direccion}</td>
                <td>{telefono}</td>
            

                </tr>
        )

    }



}
export default CustomerTable
