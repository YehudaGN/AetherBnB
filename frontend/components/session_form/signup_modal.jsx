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
            <ul>
                {mappedErrors}
            </ul>
        )
    }

    render() {
        return <div>
            <form onSubmit={this.handleSubmit}>
            <div onClick={this.props.closeModal} className="close-x">X</div>
            {this.renderErrors()}
                
                    <input 
                        type="email"
                        value={this.state.email}
                        onChange={this.handleChange('email')}   
                        placeholder='Email' 
                    />
                
                    <input 
                        type="text"
                        value={this.state.fname}
                        onChange={this.handleChange('fname')}    
                        placeholder='First Name' 
                    />
                
                    <input 
                        type="text"
                        value={this.state.lname}
                        onChange={this.handleChange('lname')}   
                        placeholder='Last Name'  
                    />
                
                    <textarea
                        value={this.state.bio}
                        onChange={this.handleChange('bio')}  
                        placeholder='Bio'   
                    />
                
                    <input 
                        type="password"
                        value={this.state.password}
                        onChange={this.handleChange('password')}  
                        placeholder='Password'  
                    />
                <button>Sign Up</button>
            </form>
        </div>
    }
}

export default SignupModal;