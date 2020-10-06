import React from 'react'


class CustomerTable extends React.Component {

    render() {
        const { id, nombre, direccion, telefono } = this.props
        return (
            <div>

                
                    <tbody>
                        <tr className= "col">
                            <th scope="row">{id}</th>
                            <td>{nombre}</td>
                            <td>{direccion}</td>
                            <td>{telefono}</td>
                        </tr>
                    </tbody>
               
            </div>


        )

    }



}
export default CustomerTable
