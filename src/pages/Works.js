import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import NavBar from "../components/NavBar";
import "../components/styles/Tbody.css";
import TableCustomers from "../components/TableCustomers";
import NewWork from "../components/NewWork"
import TableWork from "../components/TableWork";
import $ from "jquery"
import { confirmAlert } from 'react-confirm-alert'

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
    const [porcentaje, setPorcenataje] = useState(0);
    const [totalAyudante, SetTotalAyudante] = useState(0)

    useEffect(() => {
        loadCustomers();
        loadWorks();
        if (count < 2) {
            _cleanWork()
        }

    }, [count])


    //Esta funcion setea los campos de trabajo seleccionado solo con la fecha, y porcentajeAyudante
    function _cleanWork() {
        var f = new Date();
        var g = f;
        var fMes = f.getMonth() + 1;
        var gMes = g.getMonth() + 2;
        var gAño = f.getFullYear();
        if (fMes > 11) {
            gMes = 1;
            gAño = gAño + 1;
        }
        f = f.getDate() + "-" + (fMes) + "-" + f.getFullYear();
        g = g.getDate() + "-" + (gMes) + "-" + gAño;
        setFecha(f);
        setGarantia(g)
        setTrabajoSeleccionado({
            PorcentajeAyudante: porcentaje, Ayudante: totalAyudante,
            Garantia: g, Fecha: f, Ganancia: 0, Pago: 0
        })
    }


    //funcion que asigna almancena id y nombre del cliente seleccionado.
    function handleCustomer(id) {

        const customer = listaClientes.find(c => c.idCliente === id);
        setId(customer.idCliente);
        setNombre(customer.nombre);
        setHiddenForm(true);
        setHiddentable('hidden');
        setCount(count + 1);
    }

    //Evento retorna la comisión del ayudante
    function _returnAssistantTotal(porcentaje) {
        console.log("porcentaje: " + porcentaje + " importe: " + trabajoSeleccionado.Importe + " costo: " + trabajoSeleccionado.Costo)
        let total = trabajoSeleccionado.Importe - trabajoSeleccionado.Costo;
        total = total * porcentaje / 100
        return total
    }

    //lleva a la pagina de impresión con todos los datos para imprimir el comprobante
    function goToPrint() {
        const Detalle = trabajoSeleccionado.detalle +
            "\n" + "El trabajo cuenta con una garantía válida hasta " + trabajoSeleccionado.garantia
        history.push({
            pathname: '/comprobante',
            id: trabajoSeleccionado.ID,
            nombre: trabajoSeleccionado.Nombre,
            detalle: trabajoSeleccionado.Detalle,
            direccion: trabajoSeleccionado.Direccion,
            fecha: trabajoSeleccionado.Fecha,
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
            Ayudante: eleccion.costoAyudante,
            ID: eleccion.ID,
            Nombre: eleccion.Nombre,
            IdCliente: eleccion.idCliente,
            Direccion: eleccion.Direccion,
            Detalle: eleccion.Detalle,
            Importe: eleccion.Importe,
            Pago: eleccion.Pago,
            Costo: eleccion.Costo,
            Ganancia: eleccion.Ganancia,
            Proveedor: eleccion.Proveedor,
            Garantia: eleccion.Garantia,
            Fecha: eleccion.Fecha,
            PorcentajeAyudante: _percentajeAssistan(eleccion.Ganancia, eleccion.costoAyudante),
        })
        handleCustomer(eleccion.idCliente);


    }

    //Esta función setea el porcentaje de ayudante
    function _percentajeAssistan(ganancia, ayudante) {
        const gan = parseFloat(ganancia);
        const ayu = parseFloat(ayudante);
        let rta = gan + ayu;
        rta = ayu * 100 / rta;
        return rta;
    }

    /*
    *Esta función configura la fecha string en date para ser enviada al backend,
    utilizando un formato YYYY/MM//DD
    */
    function _setDate(fecha) {
        let divicion = fecha.split("-", 3)
        let dia = divicion[0];
        let mes = divicion[1];
        let año = divicion[2];
        return año + "/" + mes + "/" + dia;
    }


    //Esta función se encarga de guardar ayudante y trabajo
    function handleSaveWork() {
        let importe = trabajoSeleccionado.Importe;
        let costo = trabajoSeleccionado.Costo;
        if (!((importe === undefined) || (costo === undefined))) {         
            if (!((importe === "") || (costo === ""))) {
                console.log("importe:" + importe + " costo: " + costo)
                if (parseFloat(importe) > parseFloat(costo)) {
                    $.ajax({
                        url: "http://localhost/backend/Trabajos.php",
                        data: {
                            el: 4,
                            idCliente: id,
                            detalle: trabajoSeleccionado.Detalle,
                            precioTotal: trabajoSeleccionado.Importe,
                            precioPago: trabajoSeleccionado.Pago,
                            costo: trabajoSeleccionado.Costo,
                            proveedor: trabajoSeleccionado.Proveedor,
                            garantia: _setDate(trabajoSeleccionado.Garantia),
                            fecha: _setDate(trabajoSeleccionado.Fecha),
                            german: trabajoSeleccionado.Ayudante
                        },
                        dataType: 'json',
                        type: 'POST',
                        async: true,
                        success: (response) => {
                            setListaTrabajo(response)
                            setCount(count + 1);
                        }
                    })
                } else {
                    _noChange();
                }
            } else {
                _noChange();
            }
        } else {
            _noChange();
        }
        setCount(count + 1);
    }

    //Esta funcion es para mostrar un cartel si no se guardan cambios
    function _noChange() {
        confirmAlert({
            title: 'No se guardaran los cambios',
            message: 'Los datos ingresados son incorrectos',
            buttons: [
                {
                    label: 'Aceptar',
                },
            ]
        });

    }

    //Esta función se encarga de realizar cobros
    function handlePayment(e) {
        console.log(trabajoSeleccionado)

        if (e.key === "Enter") {
            $.ajax({
                url: "http://localhost/backend/Trabajos.php",
                data: {
                    el: 3,
                    id: trabajoSeleccionado.ID,
                    cobrar: trabajoSeleccionado.cobrar,
                },
                dataType: 'json',
                type: 'POST',
                async: true,
                success: (response) => {
                    console.log(response[0].ID)
                    setTrabajoSeleccionado(response[0])
                }
            })
            setTimeout(() => loadWorks(), 2000)
            setTrabajoSeleccionado({ ...trabajoSeleccionado, Cobrar: "" })
        }
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
        console.log("id: " + id + " value: " + value)

        if (id === "Porcentaje") {
            setPorcenataje(value)
        }
        setTrabajoSeleccionado({ ...trabajoSeleccionado, [id]: value });
        if (id === "PorcentajeAyudante") {

            let value2 = _returnAssistantTotal(value);

            setTrabajoSeleccionado({ ...trabajoSeleccionado, "Ayudante": value2, [id]: value });

        }
        console.log(trabajoSeleccionado)

    }

    //esta función setea los valores el importe a pagar del asistente
    function setAssistant() {
        let total = _returnAssistantTotal(trabajoSeleccionado.PorcentajeAyudante);
        setTrabajoSeleccionado({ ...trabajoSeleccionado, "Ayudante": total })

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
                    payment={handlePayment}
                    loadWorks={loadWorks}
                    setAssistant={setAssistant}
                    saveNewWork={handleSaveWork}
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