import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import NavBar from "../components/NavBar";
import "../components/styles/Tbody.css";
import CustomerTable from "../components/CustomerTable";
import $ from "jquery"

function Works() {
    const history = useHistory();
    const [listaClientes, setListaClientes] = useState([]);
    const [cliente, setCliente] = useState("");
    const [id, setId] = useState(0);
    const [nombre, setNombre] = useState("");
    const [hiddenForm, sethiddenForm] = useState('hidden');
    const [hiddenTable, setHiddentable] = useState(false);
    const [fecha, setFecha] = useState("");
    const [garantia, setGarantia] = useState("");

    //Hook de efecto similar a componentDidMount/DidUpdate
    useEffect(() => {
        loadCustomers();
        var f = new Date();
        var g = f;
        f = f.getDate() + "-" + (f.getMonth() + 1) + "-" + f.getFullYear();
        g = g.getDate() + "-" + (g.getMonth() + 2) + "-" + g.getFullYear();
        setFecha(f);
        setGarantia(g)

    })

    //funcion que asigna almancena id y nombre del cliente seleccionado.
    function handleCustomer(id) {
        const customer = listaClientes.find(c => c.idCliente === id);
        setId(customer.idCliente);
        setNombre(customer.nombre);
        sethiddenForm(false)
        setHiddentable('hidden')
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


        //  setTimeout(() => loadCustomers(), 2000)
    }

    //Deja de mostrar el formulario de ingreso y muestra clientes.
    function handleCancel() {
        setHiddentable(false)
        sethiddenForm("hidden")
    }

    return (
        <div>
            <NavBar
                txt="Trabajos"
                type="search"
                history={history}
                NewCustomer="hidden"
                newEntry="hidden"
                handleChange={handleChange}

            />
            <div hidden={hiddenForm}
            className="container">
                <br></br>
                <form className="form-inline">
                    <div className="form-group">
                        <label for="nombreCliente"
                            className="form-control form-input bg-primary text-white rounded-pill form-line">
                            Nombre</label>
                        <input type="text"
                            id="nombreCliente"
                            class="form-control ml-1 mr-2"
                            aria-describedby="nombreCliente"
                            value={nombre} />
                        <button className="btn btn-info mr-3 ml-2"
                            onClick="">limpiar Datos</button>
                        <label for="garantia"
                            className="form-control form-input bg-primary text-white rounded-pill form-line">
                            Garantía</label>
                        <input type="text"
                            id="garantia"
                            class="form-control ml-1 mr-2"
                            aria-describedby="garantia"
                            defaultValue={garantia} />
                        <label for="fecha"
                            className="form-control form-input bg-primary text-white rounded-pill form-line ml-2">
                            Fecha</label>
                        <input type="text"
                            id="fecha"
                            class="form-control ml-1 mr-2"
                            aria-describedby="fecha"
                            defaultValue={fecha} />
                        <button className="btn btn-info ml-2"
                            onClick={handleCancel}>Cancelar</button>

                    </div>
                    
                    
                </form>
                <div className="container text-center">

                        <label className="form-control form-input bg-primary text-white rounded-pill form-line mr-3">
                            Detalle</label>
                        <textarea className="col col-10" id="detalle" rows="7"
                            defaultValue=""
                            onChange=""
                        />
                    </div>
            </div>

            <div className="Work"
                hidden={hiddenTable}>
                <table className="table table-hover table-dark"
                    cellSpacing="5" cellPadding="10" border="3"
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

        </div>
    )

}
export default Works