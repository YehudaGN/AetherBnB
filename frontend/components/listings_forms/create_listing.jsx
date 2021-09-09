import React from 'react';

class CreateListing extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.listing;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state.longitute = 2; // temp until map api
        this.state.latitude = 1; // temp until map api
    }

    handleChange(field) {
        return e => this.setState({[field]: e.currentTarget.value})
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.action(this.state)
    }

    render() {

        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Create your new Listing</h3>

                <input type="text" value = {this.state.title} onChange= {this.handleChange('title')} placeholder = 'Title'/>
                <textarea value = {this.state.description} onChange= {this.handleChange('description')} placeholder = 'Description'/>
                <input type="text" value = {this.state.address} onChange= {this.handleChange('address')} placeholder = 'Address'/>
                <input type="text" value = {this.state.city} onChange= {this.handleChange('city')} placeholder = 'City'/>
                <input type="text" value = {this.state.state} onChange= {this.handleChange('state')} placeholder = 'State'/>
                <input type="number" value = {this.state.zipCode} onChange= {this.handleChange('zipCode')} placeholder = 'Zip Code'/>
                <input type="number" value = {this.state.numBeds} onChange= {this.handleChange('numBeds')} placeholder = 'Number of Beds'/>
                <input type="number" value = {this.state.price} onChange= {this.handleChange('price')} placeholder = 'Price'/>
                <button>Create Listing</button>
            </form>
        )
    }
}

export default CreateListing;