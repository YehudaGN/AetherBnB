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
                {this.renderErrors()}
                <label>Email
                    <input 
                        type="text"
                        value={this.state.email}
                        onChange={this.handleChange('email')}    
                    />
                </label>
                <label>First Name
                    <input 
                        type="text"
                        value={this.state.fname}
                        onChange={this.handleChange('fname')}    
                    />
                </label>
                <label>Last Name
                    <input 
                        type="text"
                        value={this.state.lname}
                        onChange={this.handleChange('lname')}    
                    />
                </label>
                <label>Bio
                    <textarea
                        value={this.state.bio}
                        onChange={this.handleChange('bio')}    
                    />
                </label>
                <label>Password
                    <input 
                        type="password"
                        value={this.state.password}
                        onChange={this.handleChange('password')}    
                    />
                </label>
                <button>Sign Up</button>
            </form>
        </div>
    }
}

export default SignupModal;