import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import NavBar from "../components/NavBar";
import "../components/styles/Tbody.css";
import CustomerTable from "../components/CustomerTable";
import NewWork from "../components/NewWork"
import TableWork from "../components/TableWork";
import $ from "jquery"

function Works() {
    const history = useHistory();
    const [listaClientes, setListaClientes] = useState([]);
    const [cliente, setCliente] = useState("");
    const [id, setId] = useState(0);
    const [nombre, setNombre] = useState("");
    const [hiddenForm, setHiddenForm] = useState('hidden');
    const [hiddenTable, setHiddentable] = useState(false);
    const [fecha, setFecha] = useState("");
    const [garantia, setGarantia] = useState("");
    const [trabajoSeleccionado, setTrabajoSeleccionado] = useState([]);
    const [listaTrabajo, setListaTrabajo] = useState([]);
    const [contador, setContador] =useState(0);

    /*Hook de efecto similar a componentDidMount/DidUpdate,
    funadamental poner ,[] asi funciona como componentDidMount
    */
    useEffect(() => {
        loadCustomers();
        loadWorks();
        
        var f = new Date();
        var g = f;
        f = f.getDate() + "-" + (f.getMonth() + 1) + "-" + f.getFullYear();
        g = g.getDate() + "-" + (g.getMonth() + 2) + "-" + g.getFullYear();
        setFecha(f);
        setGarantia(g)
        let trabajo = {
            id: "", nombre: "", detalle: "", importe: "", pago: "", costo: "", ayudante: "",
            garantia: g, fecha: f
        }
        setTrabajoSeleccionado(trabajo)

    },[])
   

    //funcion que asigna almancena id y nombre del cliente seleccionado.
    function handleCustomer(id) {
        const customer = listaClientes.find(c => c.idCliente === id);
        setId(customer.idCliente);
        setNombre(customer.nombre);
        setHiddenForm(false);
        setHiddentable('hidden');

    }

    function handleCancelNewWork() {
        setHiddenForm("hidden");
        setHiddentable(false);
        setId(0);
        setCliente("");
        loadCustomers();
    }

    /*
    Esta funcnion selecciona el trabajo, compara con la lista de trabajos del
    cliente con el id seleccionado para asignar mediante setTrabajos que viene de works 
    (props) y asi en Works ya tenga el trabajo para enviarlo a NewWork
    */
   function handleClickWork(id){        
    const eleccion = listaTrabajo.find(t => t.ID === id);
    setTrabajoSeleccionado({
      id:eleccion.ID,
      nombre:eleccion.Nombre,
      detalle:eleccion.Detalle,
      importe:eleccion.Importe,
      pago:eleccion.Pago,
      costo:eleccion.Costo,
      ayudante:eleccion.costoAyudante,
     garantia:eleccion.Garantia, 
     fecha:eleccion.Fecha})  
           
 }


    //Esta función carga los trabajos.
    function loadWorks() {        
        var ELECCION;        

        if(id>0){            
            ELECCION=2;
        setFecha(trabajoSeleccionado.fecha);
        setGarantia(trabajoSeleccionado.garantia)
        } else{
            ELECCION=1

        }  
        $.ajax({
            url: "http://localhost/backend/Trabajos.php",
            data: { el: ELECCION, id:id },
            dataType: 'json',
            type: 'POST',
            success: (response) => {
                setListaTrabajo(response)
            }
        })
    }
   


    //Carga la lista de clientes completa o filtrada.
    function loadCustomers() {
        $.ajax({
            url: "http://localhost/backend/Clientes.php",
            data: { cl: cliente, el: 1 },
            dataType: 'json',
            type: 'POST',
            async: true,
            success: (response) => {
                setListaClientes(response)
            }
        })
    }

    //Evento que escucha todo lo que se tipea y guarda en estado.
    function handleChange(e) {
        e.preventDefault();
        setCliente(e.target.value)
        setTimeout(() => loadCustomers(), 2000)
    }



    return (
        <div
        onClick={loadWorks}>
            <div>
            <NavBar
                txt="Trabajos"
                type="search"
                history={history}
                NewCustomer="hidden"
                newEntry="hidden"
                handleChange={handleChange}
            />
            </div>
            <NewWork
                hiddenForm={hiddenForm}
                nombre={nombre}
                garantia={garantia}
                fecha={fecha}
                id={id}
                trabajoSeleccionado={trabajoSeleccionado}
                handleCancelNewWork={handleCancelNewWork} />

            <div className="Work"
                hidden={hiddenTable}>
                    
                <table className="table table-hover table-dark"
                    cellSpacing="5" cellPadding="10" border="3"
                    id="customers"
                >
                    <thead className="bg-danger">
                        <h6>Clientes</h6>
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
                            listaClientes.map(customer => {
                                return (
                                    <CustomerTable
                                        key={customer.idCliente}
                                        handleCustomer={handleCustomer}
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
            
            <TableWork           
                idCliente={id}                
                listaTrabajo={listaTrabajo}
                handleClickWork={handleClickWork}
            />
            

        </div>
    )

}
export default Works