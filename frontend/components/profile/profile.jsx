import React from 'react';
import { Link } from 'react-router-dom';

class ProfileComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state ={
            id: this.props.id,
            username: '',
            family_crest: '',
            realm: '',
            star_sign: '',
            edit: false,
            error: ''
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
        if (this.state.id == this.props.details){
            this.setState({
            username,
            family_crest,
            realm,
            star_sign,
            edit: false
        })  
        }
        
    }

    handleChange(type){
        if(this.state.username !== 'Guest'){
            return (e) => {
            this.setState({ [type]: e.target.value });
          };
        }
        
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
        if(this.state.username === 'Guest'){
           return this.setState({error: "You don't have permission to edit Guest User info"})
        }else{
        this.props.update(user);
        return this.setState({edit: false})
        }
        
    }

    formHandle(){
        const {logout} = this.props;
        const {username, family_crest, realm, star_sign} = this.state;
        if (!!this.props.family_crest && family_crest === '' && realm === '' && star_sign === ''){
            this.setUser()
        }
        if (this.state.edit === false){
            return(
               <div className='width'>
                   <div className='row'>
                <h1 className='h1'>Account</h1>
                <button className='btn-6' id='right' onClick={this.edit}>Edit</button>
                   </div>
                 <hr className='hr'/>
                
                <div className='p3'>
                   <i className='fas fa-user-alt'></i>   Username: {`${username}`}  
                </div>
                <div className='p3'>
                <i className="fas fa-shield-alt"></i>   Family Crest: {`${family_crest}`}
                </div>
                <div className='p3'>
                <i className="fas fa-map"></i>   Realm: {`${realm}`}
                </div>
                <div className='p4'>
                    <div className='icon'>&#x2638;</div>   Star Sign: {`${star_sign}`}
                </div>
                <br/>
                <div className='row'>
                    <Link onClick={logout} className='btn-5' to='/' id='margin'>Logout</Link>
                </div>
                
            </div> 
            )
            
        } else {
            return (
                <div className='width'>
                    <h1 className='h1'>Update Account</h1>
                    <hr className='hr'/>
                    <div className='edit-user'>
                        <div className='error'>{`${this.state.error}`}</div>
                    <label className='p2'>Username: </label>
                    <input 
                    type="text" 
                    value={this.state.username}
                    onChange={this.handleChange('username')}
                    className='input3'
                    placeholder={`${this.state.username}`}/>
                   
                    <label className='p2'>Family Crest:</label>
                    <input 
                    type="text" 
                    value={this.state.family_crest}
                    onChange={this.handleChange('family_crest')}
                    className='input3'
                    placeholder={`${this.state.family_crest}`}/>
                    
                    <label className='p2'>Realm: </label>
                    <input 
                    type="text" 
                    value={this.state.realm}
                    onChange={this.handleChange('realm')}
                    className='input3'
                    placeholder={`${this.state.realm}`}/>
                   
                    <label className='p2'>Star Sign:</label>
                    <input 
                    type="text" 
                    value={this.state.star_sign}
                    onChange={this.handleChange('star_sign')}
                    className='input3'
                    placeholder={`${this.state.star_sign}`}/>
                     </div>
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