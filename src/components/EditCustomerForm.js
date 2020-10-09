import React from 'react'

class EditCustomerForm extends React.Component {
   
    render() {
        const { nombre, direccion, telefono, handleAcepted, handleCancel, handleOnChangeValue } = this.props

        return (
            <div>
                <form>
                <input
                    id="nombre"
                    placeholder={nombre}                    
                    type="text"
                    onChange={handleOnChangeValue}
                    className="form-control form-input rounded-pill form-line"
                />

                <input
                    id="direccion"
                    placeholder={direccion}
                    type="text"
                    onChange={handleOnChangeValue}
                    className="form-control form-input rounded-pill form-line"
                />
                <input
                    id="telefono"
                    placeholder={telefono}
                    type="text"
                    onChange={handleOnChangeValue}                    
                    className="form-control form-input rounded-pill form-line"
                />
                <input
                    id="aceptar"
                    className="btn btn-primary btn-line"
                    value="Aceptar"
                    onClick={handleAcepted}
                    type="button"
                />

                <input
                    id="cancelar"
                    className="btn btn-primary btn-line "
                    value="Cancelar"
                    onClick={handleCancel}
                    type="button"
                />
                </form>
            </div>


        )
    }

}
export default EditCustomerForm