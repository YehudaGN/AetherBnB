import React from "react";

class SignupModal extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            fname: '',
            lname: '',
            email: '',
            password: '',
            bio: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.signup(this.state);
        this.props.closeModal();
    }

    handleChange(field) {
        return e => this.setState({[field]: e.currentTarget.value})
    }

    renderErrors() {
        const mappedErrors = this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>{error}</li>
        ))

        return (
            <ul className='errors-ul'>
                {mappedErrors}
            </ul>
        )
    }

    render() {
        return <div className='signup-container'>
            <div onClick={this.props.closeModal} className="close-x">X</div>
            <h3 className='signup-welcome'>Welcome!</h3>
            <form className='signup-form' onSubmit={this.handleSubmit}>
            {this.renderErrors()}
                
                    <input 
                        id='rounded-email'
                        className='signup-input'
                        type="email"
                        value={this.state.email}
                        onChange={this.handleChange('email')}   
                        placeholder='Email' 
                    />
                
                    <input 
                        className='signup-input'
                        type="text"
                        value={this.state.fname}
                        onChange={this.handleChange('fname')}    
                        placeholder='First Name' 
                    />
                
                    <input 
                        className='signup-input'
                        type="text"
                        value={this.state.lname}
                        onChange={this.handleChange('lname')}   
                        placeholder='Last Name'  
                    />
                
                    <textarea
                        className='signup-input'
                        value={this.state.bio}
                        onChange={this.handleChange('bio')}  
                        placeholder='Bio'   
                    />
                
                    <input 
                        id='rounded-password'
                        className='signup-input'
                        type="password"
                        value={this.state.password}
                        onChange={this.handleChange('password')}  
                        placeholder='Password'  
                    />
                <button className='signup-button'>Sign Up</button>
            </form>
        </div>
    }
}

export default SignupModal;