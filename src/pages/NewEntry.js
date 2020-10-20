import React from "react"
import NavBar from "../components/NavBar"
import $ from "jquery"
import EntryForm from "../components/EntryForm"

//Esta es la pagina donse se generan/actualizan/borran ingresos.

class NewEntry extends React.Component {

    state = {
        id:"",
        fecha:"",
        formUpdate:true,
        idCliente: this.props.location.idCliente,
        detalle:"",
        ingresoElejido:{
            id:"",
            detalle:'',
            fecha:""
        },        
        listaIngreso: [
            {
                idingreso: "",
                detalle: "",
                fecha: ""
            }
        ]
    }

    //El metodo load se carga al renderizar el componente
    componentDidMount() {
          this.load()    
    }

    //Este evento se da cuando se preciona el boton cancelar
    handleCancel = () => {
        this.setState({
            formUpdate:true,
            ingresoElejido:{
                id:"",
                detalle:'',
                fecha:""
            },
        })
        
    }

    //Evento que escucha todo lo que se tipea y guarda los valores en el estado.
    handleOnChangeValue = e => {
        e.preventDefault();

        this.setState({
            
            ...this.state,
            [e.target.id]: e.target.value
        })
        console.log(e.target.id + " valor: "+e.target.value)
    }
    
    /*
    Este evento se dispara cuando se clickea un ingreso ya generado
    muestra el formulario para editar o visyalizar en detalle el ingreso.
    */
    handleClick = id =>{
        console.log(id)
        const ingreso = this.state.listaIngreso.find(i => i.idingreso === id);
        this.setState({
            formUpdate:false,
            ingresoElejido:{
                id:ingreso.idingreso,
                detalle:ingreso.detalle,
                fecha:ingreso.fecha                
            }
        })        
        console.log("detalle: "+this.state.ingresoElejido.detalle)
        

    }

    //Esta funcion carga la base de datos.
    load = () => {
        $.ajax({
            url: "http://localhost/backend/Ingreso.php",
            data: { id: this.state.idCliente,
                    el:1 
                },
            dataType: 'json',
            type: 'POST',
            async: true,
            success: (response) => {
                this.setState({
                    listaIngreso: response
                })
            }
        })
    }

    //Guarda un nuevo ingreso
    handleSubmitNewEntry=()=>{
        /*
        En detalle utilizo this.state.detalle que se genera por el handleOnchangeValue
        */
        
        $.ajax({
            url: "http://localhost/backend/Ingreso.php",
            data: { id: this.state.idCliente,
                    el:2,
                    fe:this.state.ingresoElejido.fecha,
                    de: this.state.detalle,
                },
            dataType: 'json',
            type: 'POST',
            async: true,
            success: (response) => {
                this.setState({
                    listaIngreso: response
                })
            }
        })
    }

    /*Este evento setea los detalles que requiere un nuevo ingreso,
    muestra la fecha y los valores de detalle por default
    */
    handleNewEntry=()=>{
        var f= new Date()
        this.setState({
            formUpdate:false,
            ingresoElejido:{
                id:"",
                detalle:"* INGRESO:\n* MARCA:\n* MODELO:\n* CARGADOR:\n* FALLA:",
                fecha: f.getDate() +"-"+ (f.getMonth() + 1 )+"-" +f.getFullYear()
            }
        })        
    }

    render() {
        const { history } = this.props
        return (
            <div>
                <NavBar
                    txt="Ingreso"
                    type="hidden"
                    history={history}
                    NewCustomer="hidden"
                    handleNewEntry={this.handleNewEntry}
                />

                <div className="container bg-light"
                    hidden={this.state.formUpdate}>
                    <EntryForm
                        ing={this.state.ingresoElejido}                        
                        handleCancel={this.handleCancel}
                        handleAcepted=""
                        handleOnChangeValue={this.handleOnChangeValue}
                        handleDeleted=""
                        handleEntry={this.handleSubmitNewEntry}
                                                
                    />
                </div>
                <div className="">
                    <table className="table table-hover table-dark"
                        cellSpacing="10" cellPadding="10" border="3"
                        id="customers"
                    >
                        <thead className="bg-danger">
                            <tr>
                                <th className="text-center">ID</th>
                                <th className="text-center">Detalle</th>
                                <th className="text-center">Fecha</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.listaIngreso.map(customer => {
                                    return (
                                        <tr
                                            key={customer.idingreso}                                            
                                            onClick={() => this.handleClick(customer.idingreso)}>
                                            <th scope="row">{customer.idingreso}</th>
                                            <td><p>{customer.detalle}</p></td>
                                            <td>{customer.fecha}</td>
                                        </tr>
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
export default NewEntry