import React from "react";

class LoginModal extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state);
        this.props.closeModal();
    }

    handleChange(field) {
        return e => this.setState({[field]: e.currentTarget.value})
    }

    handleDemoUser(e) {
        e.preventDefault();
        const demo = {email: 'demouser@gmail.com', password: 'demouser'}
        this.props.login(demo);
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
                        placeholder='Email'
                        onChange={this.handleChange('email')}    
                    />
                
                    <input 
                        type="password"
                        value={this.state.password}
                        placeholder='Password'
                        onChange={this.handleChange('password')}    
                    />
                <button>Log In</button>
            </form>
            <button onClick={(e) => this.handleDemoUser(e)}>Log in as Demo User</button>
        </div>
    }
}

export default LoginModal