import React from 'react';

class CreateListing extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.listing;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state.longitude = 2; // temp until map api
        this.state.latitude = 1; // temp until map api
    }

    handleChange(field) {
        return e => this.setState({[field]: e.currentTarget.value})
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.createListing(this.state)
    }

    render() {

        return (
            <form className='listing-form' onSubmit={this.handleSubmit}>
                <h3>Create your new Listing</h3>

                <input 
                    className='listing-input'
                    type="text" 
                    value = {this.state.title} 
                    onChange= {this.handleChange('title')} 
                    placeholder = 'Title'
                />
                <textarea 
                    className='listing-input'
                    value = {this.state.description} 
                    onChange= {this.handleChange('description')} 
                    placeholder = 'Description'
                />
                <input
                    className='listing-input' 
                    type="text" 
                    value = {this.state.address} 
                    onChange= {this.handleChange('address')} 
                    placeholder = 'Address'
                />
                <input 
                    className='listing-input'
                    type="text" 
                    value = {this.state.city} 
                    onChange= {this.handleChange('city')} 
                    placeholder = 'City'
                />
                <input 
                    type="text" 
                    value = {this.state.state} 
                    onChange= {this.handleChange('state')} 
                    placeholder = 'State'
                />
                <input 
                    className='listing-input'
                    type="number" 
                    value = {this.state.zip_code} 
                    onChange= {this.handleChange('zip_code')} 
                    placeholder = 'Zip Code'
                />
                <input 
                    className='listing-input'
                    type="number" 
                    value = {this.state.num_beds} 
                    onChange= {this.handleChange('num_beds')} 
                    placeholder = 'Number of Beds'
                />
                <input 
                    className='listing-input'
                    type="number" 
                    value = {this.state.price} 
                    onChange= {this.handleChange('price')} 
                    placeholder = 'Price'
                />
                <button>Create Listing</button>
            </form>
        )
    }
}

export default CreateListing;