import React from 'react'
import NavBar from "../components/NavBar"
import $ from "jquery"
import "../components/styles/Tbody.css"
import CustomerTable from "../components/CustomerTable"


class Customers extends React.Component {



    state = {
        cliente: '',
        listaClientes: [
            {
                idCliente: "",
                nombre: "",
                direccion: "",
                telefono: ""
            }

        ],
        id: '',
        nombre: '',
        direccion: '',
        telefono: ''
    }
    componentDidMount() {
        this.loadCustomers();
    }


    loadCustomers = () => {
        $.ajax({
            url: "http://localhost/backend/Clientes.php",
            data: { cl: this.state.cliente },
            dataType: 'json',
            type: 'POST',
            async: true,
            success: (response) => {
                this.setState({
                    listaClientes: response,
                })
            }
        })
    }


    render() {
        return (

            <div>

                <NavBar
                    txt="Clientes"
                    type="search"
                />
                <div className="">
                <table className="table table-bordered ">
                    <thead className="thead-dark">
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Direccion</th>
                            <th>Telefono</th>
                        </tr>
                    </thead>
                    <tbody>
                       
                    {
            this.state.listaClientes.map(customer=>{
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
                        
                    </tbody>
                    </table>

               
                </div>

            </div>

        )

    }

}
export default Customers

// En esta pagina utilizare hooks
