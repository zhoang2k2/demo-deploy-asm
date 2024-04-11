import React from 'react';
import EmployeeApi from '../api/EmployeeApi';

class CreateEmployee extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };
    }

    changeName = (event) => {
        this.setState({
            name: event.target.value
        });
    }

    handleSubmitEvent = async (event) => {
        event.preventDefault();

        const body = {
            name: this.state.name
        }
        try {
            // call api
            await EmployeeApi.create(body);
            // reset form
            event.target.reset();
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <form onSubmit={(e) => this.handleSubmitEvent(e)}>
                <label>
                    Name:
                    <input
                        type="text"
                        onChange={(e) => this.changeName(e)} />
                </label>

                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default CreateEmployee;
