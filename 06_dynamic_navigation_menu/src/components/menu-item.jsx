import React, { useState } from 'react'
import MenuList from './menu-list'
import {FaPlus, FaMinus} from 'react-icons/fa'

const MenuItem = ({ item }) => {

    const [displayCurrentChildren, setDisplayCurrentChildren] = useState({})


    function handleToggleChildren(getCurrentLabel){
        setDisplayCurrentChildren({
            ...displayCurrentChildren,
            [getCurrentLabel]:!displayCurrentChildren[getCurrentLabel]
        })
    }

    return (
        <li >
            <div className="menu-item-container" style={{display:'flex',gap:'20px' }} >
                <p>{item.label}</p>

                {
                    item && item.children && item.children.length > 0 ?
                        <span onClick={()=>handleToggleChildren(item.label)}>
                            {
                                displayCurrentChildren[item.label]? <FaMinus/> : <FaPlus/>
                            }

                        </span>
                        : null
                }
            </div>
            
            {
                    item && item.children && item.children.length > 0 && displayCurrentChildren[item.label]  ?
                        <MenuList list={item.children} />
                        : null
                }
        </li>
    )
}

export default MenuItem