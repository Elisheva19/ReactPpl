import React from "react";


class PersonRow extends React.Component{
    checkAge = (age) => {
        let className = ' ';
        if (age > 65) {

            className += ' bg-danger';
        }
            return className;
        
    }

    render() {
       
        const { person} = this.props;
    
        return (
            <tr  className={this.checkAge(person.age)}>
                <td>{person.firstName}</td>
                <td>{person.lastName}</td>
                <td>{person.age}</td>
        </tr>
            )
    }
}

export default PersonRow;

