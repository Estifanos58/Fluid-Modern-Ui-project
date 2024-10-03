import React, { useState } from 'react'
import classes from './Dropdown.module.css'

function Dropdown() {
    const data =  [
        {
            id: 1,
            title: 'Does Fluid AI increase wellbeing and meaning in life?',
            text: 'Lorem epsum 1'
        },
        {
            id: 2,
            title: 'What can curiosity, wonder, and awe do for you?',
            text: 'Lorem epsum 2'
        },
        {
            id: 3,
            title: 'Does Fluid AI increase wellbeing and meaning in life?',
            text: 'Lorem epsum 3'
        },
        {
            id: 4,
            title: 'What can curiosity, wonder, and awe do for you?',
            text: 'Lorem epsum 4'
        },
        {
            id: 5,
            title: 'Does Fluid AI increase wellbeing and meaning in life?',
            text: 'Lorem epsum 5'
        },
        {
            id: 6,
            title: 'What can curiosity, wonder, and awe do for you?',
            text: 'Lorem epsum 6'
        },
        {
            id: 7,
            title: 'Does Fluid AI increase wellbeing and meaning in life?',
            text: 'Lorem epsum 7'
        },
        {
            id: 8,
            title: 'What can curiosity, wonder, and awe do for you?',
            text: 'Lorem epsum 8'
        }
    ]
    const [count, setCount] = useState(null)
    const handleClick= (id)=>{
        if(count === id) setCount(null)
        else setCount(id)
    }

  return (
    
    <div className={classes.dropdown}>
        <div className={classes.dropdown__container}>
            <div className={classes.left__side}>
                <h1>What can curiosity, Wonder, and awe do for you?</h1>
                <p>Research shows that experiencing curiosity and awe can immensely benefit our mental, physical, and professional health. Here’s a brief overview of what curiosity and awe can do for you.</p>
            </div>
            <div className={classes.right__side}>
                    {
                    data?.map((datavalue)=>(
                        <div key={datavalue.id} className={classes.item}>
                            <p>{datavalue.title} <span onClick={()=> handleClick(datavalue.id)}>{count === datavalue.id ? '-': '+'}</span></p>
                            
                            
                            {
                                datavalue.id === count ? <p>{datavalue.text}</p>: <p></p>
                            }
                            <hr />
                            
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Dropdown