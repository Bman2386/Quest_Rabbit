import React from 'react'

const PartThree = props => {
    const {values, handleChange, back, submit} = props

    return (
        
        <div className="quest-container">
            <ul className='bar1'>
                <li className='grey-out'>1</li>
                <div className='lineN'></div>
                <li className='grey-out'>2</li>
                <div className='lineN'></div>
                <li className='currentN'>3</li>
            </ul>
            <ul className='bar2'>
                <li className='line'>Describe your Quest</li>
                <li className='line'>Browse Adventurers</li>
                <li className='current'>Choose date {'&'} Time</li>
            </ul>
            <hr/>
            <p>Select a time to start your quest</p>
            <button onClick={() => back()}>Back</button><br />
            <button onclick={() => submit()}>Submit</button>
        </div>
    )

}

export default PartThree;