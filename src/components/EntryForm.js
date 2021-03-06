import React from 'react'


//Componente formulario para crear nuevos/editar/borrar ingresos.
class EntryForm extends React.Component {

    render() {

        const { handleOnChangeValue, handleCancel, hiddenPrint,
            handleDeleted, handleEntry, handleUpdate, ing, toPrint } = this.props

        return (
            <div>
                <form className="form">
                    <div className="form-group">
                        <label className="p-1  bg-primary text-white rounded-pill">ID</label>
                        <input
                            id="id"
                            value={ing.id}
                            type="text"
                            onChange={handleOnChangeValue}
                            className="ml-1 form-input rounded-pill form-line text-center text-primary"
                        />
                        <div className="float-right">
                            <label className=" ml-2 p-1  bg-primary text-white rounded-pill">Fecha</label>
                            <input
                                id="fecha"
                                defaultValue={ing.fecha}
                                type="text"
                                onChange={handleOnChangeValue}
                                className="ml-1 form-input rounded-pill form-line text-center text-primary"
                            />
                        </div>
                    </div>
                    <div className="form-group text-center">
                        <label className="form-control form-input bg-primary text-white rounded-pill form-line">Detalle</label>
                        <textarea className="form-control" id="detalle" rows="5"
                            defaultValue={ing.detalle}
                            onChange={handleOnChangeValue}
                        />
                    </div>
                    <input
                        id="cancelar"
                        className="btn btn-primary btn-line m-2"
                        value="Cancelar"
                        onClick={handleCancel}
                        type="button"
                    />
                    <input
                        id="ingreso"
                        className="btn btn-success btn-line m-2"
                        value="Ingreso"
                        onClick={handleEntry}
                        type="button"
                    />
                    <input
                        id="actualizar"
                        className="btn btn-dark btn-line m-2"
                        value="Actualizar"
                        onClick={handleUpdate}
                        type="button"
                    />
                    <input
                        id="borrar"
                        className="btn btn-danger btn-line m-2"
                        value="Borrar"
                        onClick={handleDeleted}
                        type="button"
                    />
                    <input
                        id="imprimir"
                        className="btn btn-warning btn-line m-2"
                        value="imprimir"
                        onClick={toPrint}
                        type="button"
                        hidden={hiddenPrint}
                    />
                </form>
            </div>
        )
    }
}
export default EntryForm