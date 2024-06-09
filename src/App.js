import React, {Component} from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Plan from './plan'
import axios from 'axios';


class App extends Component{
  state = {
    items : [],
    text : ""
  }

  showPlan = () => {
    axios.get('http://127.0.0.1:8000/api/list/')
      .then((res) => {
        // console.log(res.data)
        this.setState({items : res.data})
      })
  }

  addPlan = (d) => {
    if(this.state.text !== ""){
      axios.post("http://127.0.0.1:8000/api/create/", d)
      .then((res) => {
        this.setState({ text : '' })
        this.showPlan()
      })
    }
  }

  handleChange = (e) =>{
    this.setState({text: e.target.value})
  }
  // Hellow
  handleAdd = (e) => {
    let dt = { items: this.state.text }
    this.addPlan(dt)

    // if (this.state.text !== ""){
    //   const items = [...this.state.items, this.state.text];
    //   this.setState({items: items, text:""});
    // }
  }

  handleDelete = (id) =>{
    // console.log('Deleted', id);
    const OldItems = [...this.state.items]
    const items = OldItems.filter((element,i)=>{
      return i !== id

    })
    this.setState({items:items});
  }


  componentDidMount(){
    this.showPlan()
  }
  render(){

    return (
      <div className='container-fluid my-5'>

        <div className='row'>
          <div className="col-sm-6 mx-auto text-white shadow-lg p-3">
            <h1 className="text-center">Today's Plan</h1>

            <div className="row my-3">

              <div className="col-9">
                <input type="text" className="form-control" placeholder='Write your today plan ' value={this.state.text} onChange={this.handleChange}/>
              </div>

              <div className='col-3'>
                <button type="button" className='btn btn-warning px-5 font-weight-bold' onClick={this.handleAdd}>Add</button>
              </div>

              <div className="container-fluid">
                <ul className='list-unstyled row my-5'>
                  {
                    this.state.items.map((value, i) => {
                      return < Plan key={i} id={value.i} value={value.items} sendData={this.handleDelete} />
                    })
                  }
                </ul>
              </div>

            </div>

          
          </div>
        </div>

      </div>
    )
  }
}

export default App
