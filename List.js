import React, { Component } from 'react';
import './List.css';

//Ejemplo: https://www.robinwieruch.de/react-fetching-data

export default class List extends Component{
    constructor(props) {
        super(props);
        this.state = {
            arreglo: [],
        };
      }
    
    componentDidMount() {
        fetch('http://dummy.restapiexample.com/api/v1/employees')
        .then(response => response.json())
        .then(data => this.setState({ arreglo: data.data }));
    }

    render() {
        const { arreglo } = this.state;
        return (
            <select name="select" className='selection-list'>
            {arreglo.map(arreglo =>
              <option  key={arreglo.id} className='text-list'>{arreglo.employee_name}</option >
            )}
          </select>
        );
      }
}