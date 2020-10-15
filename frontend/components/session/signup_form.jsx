import React from 'react';  

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.session;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const formUser = Object.assign({}, this.state)
        this.props.action(formUser)
            .then(this.props.closeModal); 
    }

    handleChange(type) {
        return (e) => {
            this.setState({ [type]: e.currentTarget.value})
        }
    }

    componentDidMount() {
        this.props.clear(); 
    }


    renderErrors() {
        
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={i}>{error}</li>
                ))}
            </ul>
        );
    }


    render() {
        // const firstNameError = this.props.errors.forEach(() ) ? ("firstNameError") : ("hidden")

        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className='login-form'>
                    <h1>Welcome to OpenStreetTable</h1>

                    <div onClick={this.props.closeModal}>
                    </div>

                    {this.renderErrors()} 

                    <label>
                        <input type="text" value={this.state.username} onChange={this.handleChange('username')} placeholder="Username*"/>
                    </label>
                    {/* <span className={firstNameError}>Please enter your first name</span> */}
                    <label>
                        <input type="text" value={this.state.email} onChange={this.handleChange('email')} placeholder="Email*"/>
                    </label>
                    <label>
                        <input type="password" value={this.state.password} onChange={this.handleChange('password')} placeholder="password*"/>
                    </label>

                    <button className="button-color">Create Account</button>
                </form>
            </div>
        )
    }
}; 

export default SignUpForm;