import React from 'react'
import CustomerTable from '../components/CustomerTable'


const CustoList =({ customer }) =>(
    <div>
        {
            customer.map(customer=>{
                return(
                    <CustomerTable
                    id={customer.idCliente}
                    nombre={customer.nombre}
                    direccion={customer.direccion}
                    telefono={customer.telefono}
                    />
                )
            })
        }

    </div>
)
export default CustoList