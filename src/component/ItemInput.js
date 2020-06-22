import React, { Component } from 'react'
import ListRender from './ListRender'
import '../ItemInput.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

library.add(faTrash)

export class ItemInput extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             items : [],
             currentItem : {
                 item : "",
                 key: ""
             }
        }
    }
    

    currentEntry = (e) => {
        this.setState({
            currentItem : {
                item:e.target.value,
                key: Date.now()
            } 
        },() => console.log(this.state.currentItem))
    }

    handleChange = (e) => {
        e.preventDefault();
        const newitem = this.state.currentItem;
        if(newitem.item !== "")
        {
            const items = [...this.state.items, newitem];
            this.setState({
                items : items,
                currentItem :{
                    item: "",
                    key: ""
                }
            },() => console.log(this.state.items)
            )
        }


    }

    setUpdate = (value , key) => {

        const items = this.state.items;
        items.map(( item ) => {
            if(item.key === key)
            {
                item.item = value;
            }
        } )

        this.setState({
            items : items
        })
    }

    onDelete = (key) => {
        const filteredItems = this.state.items.filter(item => item.key != key);

        this.setState({
            items: filteredItems
        })

        
    }
    




    render() {
        return (
            <div>
                <div class="InputItem">
                <form>
                    <input type="text"
                    name="item"
                    value={this.state.currentItem.item}
                    onChange={this.currentEntry}
                    placeholder="Add item"
                    />

                    <button onClick={this.handleChange}>Add</button>
                </form> 
                
            </div>
                <div>
                <ListRender items={this.state.items} 
                setUpdate={this.setUpdate}
                onDelete={this.onDelete} />
                </div>
            </div>
        )
    }
}

export default ItemInput
