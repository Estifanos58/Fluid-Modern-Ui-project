import React ,{useState, useEffect} from 'react'
import classes from './Galary.module.css'
import img1  from '../../src/assets/family_1.png'
import img2  from '../../src/assets/family_2.png'
import img3  from '../../src/assets/family_3.png'
import left_arrow from '../../src/assets/left-arrow.png'
import right_arrow from '../../src/assets/right-arrow.png'


const background = [
    { id: 1, image: img1, title: 'Time for work' ,text: 'Fluid has Internet access, so you can get up-to-date information from it.'},
    { id: 2, image: img2 , title: 'Time for family' ,text: 'You can use Fluid as an assistant to save time - and save your sanity.'},
    { id: 3, image: img3,  title:'Time for friends', text:"Fluid easily integrates with your friends' calendars" }
];
function Galary() {
    const [count , setCount]= useState(0)
    // const [image, setImage] = useState(background[0].image)
  return (
    <div style={{
      backgroundImage: `url(${background[count].image})`,
    }} className={classes.outer__container}>
        <div className={classes.content__wrapper}>
          <button onClick={()=> count > 0 ? setCount(count - 1) : setCount(2)}><img src={left_arrow} alt="" /></button>
          <div className={classes.content}>
                  <p>{background[count].text}</p>
                  {/* <h1>{count}</h1> */}
                  <h1>{background[count].title}</h1>
          </div>
          <button onClick={()=> count < 2 ? setCount(count +1): setCount(0) }><img src={right_arrow} alt="" /></button>
          
        </div>
    </div>
  )
}

export default Galary