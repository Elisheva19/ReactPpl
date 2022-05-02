import React from "react";
import PersonForm from './PersonForm';
import PersonRow from './PersonRow';

class PeopleTable extends React.Component {

    
        state = {
            people: [],
            firstName: '',
            lastName: '',
            age: ''
        

    }
    onFirstChange = e => {
        this.setState({ firstName: e.target.value });
    }
    onLastChange = e => {
        this.setState({ lastName: e.target.value });
    }
onAgeChange = e => {
    this.setState({  age: e.target.value } );
    }

    onClearClick = () => {
       
        this.setState({ people: []});

    }
    onAddClick = () => {
        
        const { people, firstName, lastName, age } = this.state;
        const person = {
            firstName,
            lastName,
            age
        }
        const copy = [person, ...people];
        this.setState({ people: copy,   firstName: '', lastName: '', age: '' });
    }

        generateTable = () => {
            if (this.state.people.length === 0) {
                return <h1> No People Added Yet!!!</h1>
            }
            else {
                return(
                <table className='table table-bordered table-striped'>
                    <thead>
                        <tr>
                            <td>FirstName</td>
                            <td>LastName</td>
                            <td>Age</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.people.map((p, i) => <PersonRow person={p} key={i} />)}
                        </tbody>
                  
                    </table>
                    )
            }
        }
    





    render() {
        return (

            <div className='container mt-5'>
                <PersonForm
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    age={this.state.age}
                    onFirstChange={this.onFirstChange}
                    onLastChange={this.onLastChange}
                    onAgeChange={this.onAgeChange}
                    onAddClick={this.onAddClick}
                    onClearClick={this.onClearClick}

                />
                {this.generateTable()}

            </div>
        )
    }
}

export default PeopleTable;