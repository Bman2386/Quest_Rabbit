import React from './react';

class PartOne extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.quest
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state)
        this.props.quest.status = 2
    }

    update(field){
        return e => this.setState({[field]: e.currentTarget.value})
    }

    render() {
       return (
        <div>
            <ul className='bar1'>
                <li className='current#'>1</li>
                <div className='line#'></div>
                <li className='grey-out'>2</li>
                <div className='line#'></div>
                <li className='grey-out'>3</li>
            </ul>
            <ul>
                <li className='current'>Describe your Quest</li>
                <li className='line'>Browse Adventurers</li>
                <li className='line'>Choose date {'&'} Time</li>
            </ul>
            <form onSubmit={this.handleSubmit}>
                <label>
                    QuestName
                    <text 
                    type="text"
                    value={this.state.quest_name}
                    onChange={this.update('quest_name')}
                    />
                </label>
                <label>
                    Quest Description
                    <textarea 
                    value={this.state.details}
                    onChange={this.update('details')}
                    />
                </label>
                <button type='submit' onClick={() => this.props.action()}></button>
            </form>
        </div>
        ) 
    }
    
}

export default PartOne;