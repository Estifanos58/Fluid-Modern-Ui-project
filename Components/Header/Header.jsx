// import React, { useState, useEffect } from 'react';
import logo from '../../src/assets/logo.png';
import Ellipse_1 from '../../src/assets/Ellipse-1.png'
import Ellipse_2 from '../../src/assets/Ellipse-2.png'
import Ellipse_3 from '../../src/assets/Ellipse-3.png'
import tickets from '../../src/assets/tickets.png'
import background from '../../src/assets/background.png';
import classes from './Header.module.css';
import { useState, useEffect } from 'react';
import { BsThreeDotsVertical } from "react-icons/bs";

function Header() {
    const [size, setSize] = useState(800);
    const [isFixed, setIsFixed] = useState(true); // Logo starts as fixed
    const [lastPosition, setLastPosition] = useState(0); // To keep track of where the logo was before it stops being fixed
    const [isTransform, setTransform] = useState(false);
    const [isUp, setIsUp] =  useState(false)
    function handleScrollPercentage() {
        let howMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop;

        // Shrink the logo size but ensure it doesn't go below 405px
        const newSize = Math.max(800 - howMuchScrolled, 200);
        setSize(newSize);
        if (howMuchScrolled >= 300) {
            setIsUp(true);
        } else if (howMuchScrolled < 300) {
            setIsUp(false)
        }
        // Fix the logo at the top until the scroll position reaches 700px, then let it scroll away
        if (howMuchScrolled >= 500 && isFixed) {
            setIsFixed(false);
            
            setLastPosition(1000);  // Keep track of the position where the logo becomes un-fixed
        } else if (howMuchScrolled < 500 && !isFixed) {
            setIsFixed(true);  // Return to fixed if scrolled back up
            
        }
        if (howMuchScrolled >= 700) {
            setTransform(true);
        } else if (howMuchScrolled < 700) {
            setTransform(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScrollPercentage);

        return () => {
            window.removeEventListener('scroll', handleScrollPercentage);
        };
    }, [isFixed]);

    // useeffct for transformation
    useEffect(() => {
        window.addEventListener('scroll', handleScrollPercentage);

      return () => {
            window.removeEventListener('scroll', handleScrollPercentage);
        };
    }, [isTransform]);

    return (
        <div className={classes.header}>
            <nav className={classes.nav}>
                <div className={classes.left__side__nav}>
                    <ul>
                        <li><a href="">Our Features</a></li>
                        <li><a href="">Areas</a></li>
                    </ul>
                </div>
                <div className={classes.right__side__nav}>
                    <ul>
                        <li><a href="">FAQs</a></li>
                        <li><a href="">The Waitlist</a></li>
                    </ul>
                </div>
            </nav>
            <div className={classes.logo__container}>
                {/* Apply fixed or absolute positioning based on scroll */}
                <img 
                    style={{ 
                        width: `${size}px`, 
                        position: isFixed ? 'fixed' : 'absolute', 
                        top: isFixed ? '550px' : `${lastPosition}px`,  // When switching from fixed, keep it at the last scrolled position
                        transition: 'width 0.2s ease' // Smooth shrink transition
                    }} 
                    src={logo} 
                    alt="Fluid AI" 
                />
            </div>
            <div className={classes.background__container}>
                <img src={background} alt="background" />
                <div className={isTransform? classes.content__container : classes.content__Transform}>
                    <div className={classes.content__left}>
                        <div className={isTransform ? classes.left__topTransform : classes.left__top}>
                            <div className={classes.left__top__bar}>
                                <p>Restaurant</p>
                                <BsThreeDotsVertical size={20} />
                            </div>
                            <h1>Clap Dubai</h1>
                            <p>4.4 &middot; &#36;&#36;&#36;&#36; &middot; Japanese </p>
                        </div>
                        <div className={isTransform? classes.car__Transform : classes.car__insurance}>
                            <p>Next To-Do </p>
                            <p>Renew Car insurance</p>
                        </div>
                        <div className={isTransform? classes.kite__Transform : classes.kite__beach}>
                            <div className={classes.img__continer}>
                                <img src={Ellipse_1} alt="" />
                                <img src={Ellipse_2}alt="" />
                                <img src={Ellipse_3} alt="" />
                            </div>
                            <div className={classes.event}>
                               <p>Upcoming Events</p>
                                <h1>Kite Beach</h1>
                                <p>10:00 - 14:00</p> 
                            </div>
                            
                        </div>
                        <div className={isTransform? classes.flight__Tranform : classes.flight}>
                            <img src={tickets} alt="" />
                        </div>
                        <div className={isTransform? classes.cafe__Tranform : classes.cafe}>
                            Cafe nearby
                        </div>
                    </div>
                    <div className={isUp? classes.center__Transform : classes.content__center}>
                        <h1>Unlock Seamless</h1>
                        <h1>Effiency</h1>
                        <button>Join Waitlist</button>
                    </div>
                    <div className={classes.content__right}>
                        <div className={isTransform? classes.content__top__Transform : classes.content__right__top}>
                            <p>New To-DO</p>
                            <p>Renew Car insurance</p>
                        </div>
                        <div className={isTransform? classes.kite2__Transform : classes.kite__beach2}>
                            <div className={classes.img__continer}>
                                <img src={Ellipse_1} alt="" />
                                <img src={Ellipse_2}alt="" />
                                <img src={Ellipse_3} alt="" />
                            </div>
                            <div className={classes.event}>
                               <p>Upcoming Events</p>
                                <h1>Kite Beach</h1>
                                <p>10:00 - 14:00</p> 
                            </div> 
                        </div>
                        <div className={isTransform? classes.book__Transform : classes.book}>
                            Book a flight
                        </div>
                        <div className={isTransform? classes.trip__Transform : classes.trip}>
                            Trip ideas
                        </div>
                        <div className={isTransform? classes.right__bous__Transform : classes.right__bous}>
                            <p>Reservation</p>
                            <h1>Restaurant Le Bous</h1>
                            <p>4 Oct 20:00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;




// import React, {useState, useEffect} from 'react'
// import logo from '../../src/assets/logo.png'
// import background from '../../src/assets/background.png'
// import classes from './Header.module.css'
// function Header() {
//     const [size, setSize] = useState(800)
//     const [isFixed, setFixed] = useState(false)
//     let fixation; 

    


//     useEffect(()=>{
//         window.addEventListener('scroll', ()=>{
//             let howMuchScrolled = windows.scrollTop
                // cont newSize = 800 - howMuchScrolled
//         // Calculate new size
//       cot 
//         setSize(newSize);

//         // Set the isFixed state based on scroll position
//         if (howMuchScrolled >= 400) {
//             setFixed(true);
//         } else {
//             setFixed(false);
//         }

//         console.log(`Scrolled: ${howMuchScrolled}, isFixed: ${isFixed}`);
//         })

//         return()=>{
//             window.removeEventListener('scroll', ()=>{})
//         }
//     },[size])
//     if(size <= 400){
//         setSize(405)
//     }
    

//   return (
//     <div className={classes.header}>
//         <nav className={classes.nav}>
//             <div className={classes.left__side__nav}>
//                 <ul>
//                     <li> <a href="">Our Features</a></li>
//                     <li><a href="">Areas</a></li>
                    
//                 </ul>  
//             </div>
//             <div className={classes.right__side__nav}>
//                 <ul>
//                     <li><a href="">FAQs</a></li>
//                     <li><a href="">TheWaitlist</a></li>
//                 </ul>
//             </div>
//         </nav>
//         <div className={classes.logo__container}>
//             <img style={{ 
//                         width: `${size}px`, 
//                         position: isFixed ? 'relative' : 'sticky' ,
//                         top: isFixed ? 'auto': '1000px',
//                         transition: 'width 0.2s ease'
//                     }} src={logo} alt="Fluid AI" />
//         </div>
//         <div className={classes.background__container}>
//             <img src={background} alt="background" />
//         </div>
//     </div>
//   )
// }

// export default Header