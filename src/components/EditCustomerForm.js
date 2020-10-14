import React from 'react'

class EditCustomerForm extends React.Component {

    render() {
        const { nombre, direccion, telefono, handleAcepted,
            handleCancel, handleOnChangeValue, handleDeleted, handleEntry } = this.props

        return (
            <div>
                <form>
                    <input
                        id="nombre"
                        defaultValue={nombre}
                        type="text"
                        onChange={handleOnChangeValue}
                        className="form-control form-input rounded-pill form-line"
                    />

                    <input
                        id="direccion"
                        defaultValue={direccion}
                        type="text"
                        onChange={handleOnChangeValue}
                        className="form-control form-input rounded-pill form-line"
                    />                    
                    <input
                        id="telefono"
                        defaultValue={telefono}
                        type="text"
                        onChange={handleOnChangeValue}
                        className="form-control form-input rounded-pill form-line"
                    />
                    <div className="container p-1">
                        <input
                            id="aceptar"
                            className="btn btn-primary btn-line m-2"
                            value="Aceptar"
                            onClick={handleAcepted}
                            type="button"
                        />

                        <input
                            id="cancelar"
                            className="btn btn-primary btn-line m-2"
                            value="Cancelar"
                            onClick={handleCancel}
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
                            id="ingreso"
                            className="btn btn-success btn-line m-2"
                            value="Ingreso"
                            onClick={handleEntry}
                            type="button"
                        />
                    </div>
                </form>
            </div>


        )
    }

}
export default EditCustomerForm