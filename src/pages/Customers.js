import React from 'react'
import NavBar from "../components/NavBar"
import $ from "jquery"
import "../components/styles/Tbody.css"
import CustomerTable from "../components/CustomerTable"



class Customers extends React.Component {
    state = {
        cliente:"",
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
    
    handleChange=e=>{ 
        this.setState({
            ...this.state.cliente,
            cliente:e.target.value
        })
        setTimeout(()=>this.loadCustomers(),2000)
    }
    handleCustomer = id =>{
       
        console.log(id)
        const customer = this.state.listaClientes.find(c => c.idCliente === id);
        console.log(customer.idCliente)
}   


    render() {
        const {history}=this.props
        return (

            <div>                
                <NavBar
                    txt="Clientes"
                    type="search"
                    history={history}
                    handleChange={this.handleChange}                                       
                />
                <div className="">
                <table className="table table-hover table-dark"
                cellSpacing="10" cellPadding="10" border="3"
                id="customers"
                
                >
                    <thead className="bg-danger">
                        <tr>
                            <th
                            className="text-center">ID</th>
                            <th
                            className="text-center">Nombre</th>
                            <th
                            className="text-center">Direccion</th>
                            <th
                            className="text-center">Telefono</th>
                        </tr>
                    </thead>
                    <tbody>
                       
                    {
            this.state.listaClientes.map(customer=>{
                return(
                    <CustomerTable
                    key={customer.idCliente}
                    handleCustomer={this.handleCustomer}
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
