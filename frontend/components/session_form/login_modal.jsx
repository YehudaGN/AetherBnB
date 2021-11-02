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
        this.props.login(this.state)
        .then(this.props.closeModal);
    }

    handleChange(field) {
        return e => this.setState({[field]: e.currentTarget.value})
    }

    handleDemoUser(e) {
        e.preventDefault();
        const demo = {email: 'demouser@gmail.com', password: 'demouser'}
        this.props.login(demo)
        .then(this.props.closeModal);
    }

    renderErrors() {
        // debugger
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
        return <div className='login-container'>
            <div onClick={this.props.closeModal} className="close-x">X</div>
            <h3 className='login-welcome'>Welcome back!</h3>
            <form onSubmit={this.handleSubmit} className='login-form'>
            {this.renderErrors()}
     
                    <input 
                        id ='rounded-email'
                        className='login-input'
                        type="email"
                        value={this.state.email}
                        placeholder='Email'
                        onChange={this.handleChange('email')}    
                    />
                
                    <input 
                        id ='rounded-password'
                        className='login-input'
                        type="password"
                        value={this.state.password}
                        placeholder='Password'
                        onChange={this.handleChange('password')}    
                    />
                <button className='login-button'>Log In</button>
            </form>
            <button className='demo-button' onClick={(e) => this.handleDemoUser(e)}>Log in as Demo User</button>
        </div>
    }
}

export default LoginModal