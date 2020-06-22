

import React from 'react'
import '../ListRender.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import FlipMove from 'react-flip-move'


function ListRender(props) {

    const list = props.items.map( value => {
        return (
        <li key={value.key}><input value={value.item} 
        onChange={(e => props.setUpdate(e.target.value,value.key))} />
        <span><FontAwesomeIcon className="fontIconDelete" icon="trash" onClick={() => props.onDelete(value.key)}/></span>
        </li>
        
        )
    });

    
    return (
        <div className="list">
            <ul>
                <FlipMove>
                {
                    list
                }
                </FlipMove>
            </ul>
            
        </div>
    )
}

export default ListRender

