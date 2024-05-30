import React, { Component } from 'react';

export default class NLDTProductlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderProducts: this.props.renderProducts,
      newProduct: { id: '', title: '', status: 1 }
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      newProduct: {
        ...prevState.newProduct,
        [name]: value
      }
    }));
  }

  handleAdd = () => {
    this.setState((prevState) => ({
      renderProducts: [...prevState.renderProducts, prevState.newProduct],
      newProduct: { id: '', title: '', status: 1 }
    }));
  }

  handleDelete = (id) => {
    this.setState((prevState) => ({
      renderProducts: prevState.renderProducts.filter(product => product.id !== id)
    }));
  }

  handleEdit = (id) => {
    const product = this.state.renderProducts.find(product => product.id === id);
    this.setState({ newProduct: { ...product } });
  }

  handleUpdate = () => {
    this.setState((prevState) => ({
      renderProducts: prevState.renderProducts.map(product =>
        product.id === prevState.newProduct.id ? prevState.newProduct : product
      ),
      newProduct: { id: '', title: '', status: 1 }
    }));
  }

  fnStatus = (param) => {
    return param === 1 ? 'Active' : 'NonActive';
  }

  render() {
    const { newProduct, renderProducts } = this.state;
    const elementProduct = renderProducts.map((item, index) => (
      <tr key={index}>
        <td>{item.id}</td>
        <td>{item.title}</td>
        <td>{this.fnStatus(item.status)}</td>
        <td>
          <button onClick={() => this.handleEdit(item.id)} className="btn btn-warning">Edit</button>
          <button onClick={() => this.handleDelete(item.id)} className="btn btn-danger">Delete</button>
        </td>
      </tr>
    ));

    return (
      <div>
        <h2>Danh sách sản phẩm</h2>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>id</th>
              <th>title</th>
              <th>status</th>
              <th>actions</th>
            </tr>
          </thead>
          <tbody>
            {elementProduct}
          </tbody>
        </table>

        
      </div>
    );
  }
}
