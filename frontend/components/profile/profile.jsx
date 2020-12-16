import React from 'react';
import { Link } from 'react-router-dom';

class ProfileComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state ={
            username: '',
            family_crest: '',
            realm: '',
            star_sign: '',
            edit: false
        }
        this.formHandle = this.formHandle.bind(this);
        this.setUser = this.setUser.bind(this);
        this.edit = this.edit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    componentDidMount(){
        this.props.getUser(this.props.id)
    }

    edit(){
        return this.setState({edit: true})
    }

    setUser(){
        const {
            username,
            family_crest,
            realm,
            star_sign
        } = this.props;

         this.setState({
            username,
            family_crest,
            realm,
            star_sign,
            edit: false
        })
    }

    handleChange(type){
        return (e) => {
            this.setState({ [type]: e.target.value });
          };
    }

    cancel(){
        return this.setState({edit: false})
    }

    handleSubmit(){
        const {username, star_sign, family_crest, realm} = this.state;
        const user ={
            id: this.props.id,
            username: username,
            family_crest: family_crest,
            realm: realm,
            star_sign: star_sign
        }
        this.props.update(user);
        return this.setState({edit: false})
    }

    formHandle(){
        const {logout} = this.props;
        const {username, family_crest, realm, star_sign} = this.state;
        if (!!this.props.family_crest && family_crest === ''){
            this.setUser()
        }
        if (this.state.edit === false){
            return(
               <div className='width'>
                   <div className='row'>
                <h1 className='h1'>Account</h1>
                <button  id='right' onClick={this.edit}>Edit</button>
                   </div>
                 <hr className='hr'/>
                
                <div className='p'>
                    Username: {`${username}`}  
                </div>
                <div className='p'>
                    Family Crest: {`${family_crest}`}
                </div>
                <div className='p'>
                    Realm: {`${realm}`}
                </div>
                <div className='p'>
                    Star Sign: {`${star_sign}`}
                </div>
                <br/>
                <div className='row'>
                    <Link onClick={logout} className='btn-4' to='/' id='margin'>Logout</Link>
                </div>
                
            </div> 
            )
            
        } else {
            return (
                <div className='width'>
                    <h1 className='h1'>Update Account</h1>
                    <hr className='hr'/>
                    <label className='p'>Username:</label>
                    <input 
                    type="text" 
                    value={this.state.username}
                    onChange={this.handleChange('username')}
                    className='input'
                    placeholder={`${this.state.username}`}/>
                    <label className='p'>Family Crest:</label>
                    <input 
                    type="text" 
                    value={this.state.family_crest}
                    onChange={this.handleChange('family_crest')}
                    className='input'
                    placeholder={`${this.state.family_crest}`}/>
                    <label className='p'>Realm:</label>
                    <input 
                    type="text" 
                    value={this.state.realm}
                    onChange={this.handleChange('realm')}
                    className='input'
                    placeholder={`${this.state.realm}`}/>
                    <label className='p'>Star Sign:</label>
                    <input 
                    type="text" 
                    value={this.state.star_sign}
                    onChange={this.handleChange('star_sign')}
                    className='input'
                    placeholder={`${this.state.star_sign}`}/>
                    <div className='buttons'>
                        <button className='btn-5' onClick={() => this.cancel()}>Cancel</button>
                        <button onClick={() => this.handleSubmit()}>Submit</button>
                    </div>
                    
                </div>
            )
        }
    }

    render() {
        
        return (
            <div className="quest-form">
                <div className='box'> 
                {this.formHandle()}
            </div>
            </div>
            
        )
    
    }
}

export default ProfileComponent