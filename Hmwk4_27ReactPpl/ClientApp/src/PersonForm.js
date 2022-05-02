import React  from "react";

class PersonForm extends React.Component{
    render(){

        const { firstName, lastName, age, onFirstChange, onLastChange, onAgeChange, onAddClick, onClearClick } = this.props;
       

        return(
        
                <div className='container' mt-8>
                    <div className='jumbotron'>
         <div className='row'>
            
            <div className = 'col-md-3'>
                <input type='text' value={firstName} onChange={ onFirstChange} className='form-control' placeholder="First Name" />
            
            </div>
            <div className = 'col-md-3'>
                            <input type='text' value= {lastName} onChange={onLastChange} className='form-control' placeholder="Last Name" />
            
            </div>
            <div className = 'col-md-3'>
                            <input value={age} onChange={onAgeChange} className='form-control' placeholder="Age" />
              </div>
              <div className="col-md-2">
                  <button onClick={onAddClick} className='btn btn-primary btn block'>Add:</button>
              </div>
              <div className="col-md-2">
                  <button onClick={onClearClick} className='btn btn-warning btn block'>ClearAll:</button>
              </div>
            </div>
        </div>
            </div>
            )
    }
}

export default PersonForm;