import React from 'react';
import './App.css';

class App extends React.Component{

  constructor(props){
    super(props)

    this.state = {
      employees: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:3005/getSogetiEmployees')
    .then(employees => employees.json())
    .then(_employees => {
      console.log(_employees)
      this.setState({
        employees: _employees
      })
    })
    .catch(err => console.log(err))
  }

  render(){
    return (
      <div className="App container">
        <h1>Sogeti Employee Directory</h1>
        <div className="row">
          { this.state.employees.map((employee, index) => {
            return (
              <div className="card mb-4 p-3 directory-entry">
                <img src={employee.image} class="directory-image" alt="..."/>
                <div class="card-body">
                    <h5 className="card-title">{employee.name}</h5>
                    <p class="card-text">{employee.location}</p>
                    {/* <p className="card-text2">{employee.phone}</p> */}
                    <a href="#" class="btn btn-primary">See more</a>
                </div>
              </div>

              /* <div className="media col-12 mb-4 p-3 directory-entry">
                <img src={employee.image} className="mr-3 directory-image" alt="..."/>
                  <div className="media-body">
                    <h5 className="mt-0">{employee.name}</h5>
                    {employee.location}
                    {employee.phone}
                  </div>
              </div> */
            )
          })
          }
        </div>
      </div>
    );
  }
}

export default App;
