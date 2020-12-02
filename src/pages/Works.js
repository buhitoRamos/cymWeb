import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import NavBar from "../components/NavBar";
import "../components/styles/Tbody.css";
import TableCustomers from "../components/TableCustomers";
import NewWork from "../components/NewWork"
import TableWork from "../components/TableWork";
import $ from "jquery"

function Works() {
    const history = useHistory();
    const [listaClientes, setListaClientes] = useState([]);
    const [cliente, setCliente] = useState("");
    const [id, setId] = useState(0);
    const [nombre, setNombre] = useState("");
    const [hiddenForm, setHiddenForm] = useState(false);
    const [hiddenTable, setHiddentable] = useState(false);
    const [fecha, setFecha] = useState("");
    const [garantia, setGarantia] = useState("");
    const [trabajoSeleccionado, setTrabajoSeleccionado] = useState([]);
    const [listaTrabajo, setListaTrabajo] = useState([]);
    const [count, setCount] = useState(1);
    const [porcentaje, setPorcenataje]=useState(50)

    /*Hook de efecto similar a componentDidMount/DidUpdate,
    funadamental poner ,[] asi funciona como componentDidMount
    */
    useEffect(() => {
        _cleanWork()

    }, [])

    //Esta funcion setea los campos de trabajo seleccionado solo con la fecha, y porcentajeAyudante
    function _cleanWork() {
        var f = new Date();
        var g = f;
        f = f.getDate() + "-" + (f.getMonth() + 1) + "-" + f.getFullYear();
        g = g.getDate() + "-" + (g.getMonth() + 2) + "-" + g.getFullYear();
        setFecha(f);
        setGarantia(g)
        let trabajo = {
            id: "", nombre: "", direccion: "", detalle: "", importe: "", pago: "", costo: "", deuda: "",
            ganancia: "", proveedor: "", ayudante: "", porcentajeAyudante:porcentaje,
            garantia: g, fecha: f
        }
        setTrabajoSeleccionado(trabajo)

    }

    useEffect(() => {
        loadCustomers();
        loadWorks();

    }, [count])

    //funcion que asigna almancena id y nombre del cliente seleccionado.
    function handleCustomer(id) {

        const customer = listaClientes.find(c => c.idCliente === id);
        setId(customer.idCliente);
        setNombre(customer.nombre);
        setHiddenForm(true);
        setHiddentable('hidden');
        setCount(count + 1);
    }

    

    //Eevento setea la comisión del ayudante
function loadAssistant(e){


}

    //lleva a la pagina de impresión con todos los datos para imprimir el comprobante
    function goToPrint() {
        const Detalle = trabajoSeleccionado.detalle +
            "\n" + "El trabajo cuenta con una garantía válida hasta " + trabajoSeleccionado.garantia
        history.push({
            pathname: '/comprobante',
            id: trabajoSeleccionado.id,
            nombre: trabajoSeleccionado.nombre,
            detalle: Detalle,
            direccion: trabajoSeleccionado.direccion,
            fecha: trabajoSeleccionado.fecha,
            tipo: "Remito N°:",
            detalleTipo: "Detalle de Trabajo",
            tyc: "hidden",
            verGarantia: true
        })
    }

    //Esconde cancela el formulario actual.
    function handleCancelNewWork() {
        setHiddenForm(false);
        setHiddentable(false);
        setId(0);
        setCliente("");
        setCount(count + 1);
        _cleanWork();
    }

    /*
    Esta funcnion selecciona el trabajo, compara con la lista de trabajos del
    cliente con el id seleccionado para asignar mediante setTrabajos que viene de works 
    (props) y asi en Works ya tenga el trabajo para enviarlo a NewWork
    */
    function handleClickWork(id) {

        const eleccion = listaTrabajo.find(t => t.ID === id);
        setTrabajoSeleccionado({
            id: eleccion.ID,
            nombre: eleccion.Nombre,
            idCliente: eleccion.idCliente,
            direccion: eleccion.Direccion,
            detalle: eleccion.Detalle,
            importe: eleccion.Importe,
            pago: eleccion.Pago,
            costo: eleccion.Costo,
            deuda: eleccion.Costo,
            ganancia: eleccion.Ganancia,
            proveedor: eleccion.Proveedor,
            ayudante: eleccion.costoAyudante,
            porcentajeAyudante:_percentajeAssistan(eleccion.Ganancia, eleccion.costoAyudante),
            garantia: eleccion.Garantia,
            fecha: eleccion.Fecha,
        })
        setPorcenataje(trabajoSeleccionado.porcentajeAyudante);
        console.log(trabajoSeleccionado)
        
        handleCustomer(eleccion.idCliente)
    }

    //Esta función setea el porcentaje de ayudante
    function _percentajeAssistan(ganancia, ayudante){
        let gan=parseFloat(ganancia);
        let ayu=parseFloat(ayudante);        
        let rta=gan+ayu;
        rta=ayu*100/rta;    
        return rta;
    }


    //Esta función carga los trabajos.
    function loadWorks() {
        var ELECCION;

        if (id > 0) {
            ELECCION = 2;
            setFecha(trabajoSeleccionado.fecha);
            setGarantia(trabajoSeleccionado.garantia)
        } else {
            ELECCION = 1
        }

        $.ajax({
            url: "http://localhost/backend/Trabajos.php",
            data: { el: ELECCION, id: id },
            dataType: 'json',
            type: 'POST',
            async: true,
            success: (response) => {
                setListaTrabajo(response)

            }
        })
    }

    //Este evento onChange setea los nuevos valores de fecha, garantia y detalles del trabajo
    function handleOnChangeNewWork(e) {
        const { id, value } = e.target;
        if(id==="porcentaje"){
            setPorcenataje(value)            
        }
        setTrabajoSeleccionado({ ...trabajoSeleccionado, [id]: value });
        

      console.log(trabajoSeleccionado)
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
        <div>
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
            <div>
                <NewWork
                    hiddenForm={hiddenForm}
                    nombre={nombre}
                    garantia={garantia}
                    fecha={fecha}
                    id={id}
                    trabajoSeleccionado={trabajoSeleccionado}
                    handleCancelNewWork={handleCancelNewWork}
                    goToPrint={goToPrint}
                    onChange={handleOnChangeNewWork}
                />
            </div>
            <div className="Work"
                hidden={hiddenTable}>
                <TableCustomers
                    listaClientes={listaClientes}
                    handleCustomer={handleCustomer}
                />
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