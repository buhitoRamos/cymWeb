import React from 'react'
import NavBar from "../components/NavBar"
import CustoList from "../components/CustoList"
import $ from "jquery"


class Customers extends React.Component {



    state = {
        cliente: '',
        listaClientes: [
            {
                idCliente: "     ",
                nombre: "       ",
                direccion: "          ",
                telefono: "           "
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

            <div onClick={this.loadCustomers}>

                <NavBar
                    txt="Clientes"
                />
                <div className="table-responsive">
                <table className="table table-bordered ">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Direccion</th>
                                <th scope="col">Telefono</th>
                            </tr>
                        </thead>
                        <CustoList
                            customer={this.state.listaClientes}
                        />
                    </table>

                </div>
                
                   
                </div>


           
        )



    }

}
export default Customers

// En esta pagina utilizare hooks
