import React from 'react'
//Componente formulario que utilizo para generar un nuevo ingreso/editarlo/borrarlo.

class EditCustomerForm extends React.Component {

    state={
        nombre:this.props.nombre,
        direccion:this.props.direccion,
        telefono:this.props.telefono
    }

    render() {
        
        const { nombre, direccion, telefono, handleAcepted,
            handleCancel, handleOnChangeValue, handleDeleted, handleEntry } = this.props

        return (
            <div>
                <form>
                    <input
                        id="nombre"
                        defaultValue={this.state.nombre}
                        placeholder={nombre}
                        type="text"
                        onChange={handleOnChangeValue}
                        className="form-control form-input rounded-pill form-line"
                    />

                    <input
                        id="direccion"
                        defaultValue={this.state.direccion}
                        placeholder={direccion}
                        type="text"
                        onChange={handleOnChangeValue}
                        className="form-control form-input rounded-pill form-line"
                    />                    
                    <input
                        id="telefono"
                        defaultValue={this.state.telefono}
                        placeholder={telefono}
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