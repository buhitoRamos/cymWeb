import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { TableCustomers } from '../../components/TableCustomers';

describe('TableCustomers', ()=> {
    it('customerList render sin problemas', ()=>{
        
            listaClientes: [
                {
                    idCliente: "",
                    nombre: "",
                    direccion: "",
                    telefono: ""
                }
            ]
        
        
        const wrapper = mount(<TableCustomers props={props} />); 
        expect(wrapper).toMachSnapshot();
   
    })

})

 