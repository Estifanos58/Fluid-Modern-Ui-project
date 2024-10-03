// import React from 'react'
import React, { useEffect, useRef, useState } from 'react';
import classes from './Phone.module.css'
import img1  from '../../src/assets/iPhone 14 Plus-1.png'
import img2  from '../../src/assets/iPhone 14 Plus-2.png'
import img3  from '../../src/assets/iPhone 14 Plus-3.png'
import img4  from '../../src/assets/iPhone 14 Plus-4.png'

const sections = [
    { id: 1, image: img1 },
    { id: 2, image: img2 },
    { id: 3, image: img3 },
    { id: 4, image: img4 },

];
function Phone() {
    const [currentImage, setCurrentImage] = useState(sections[0].image);
    const sectionRefs = useRef([]);

    const handleScroll = () => {
        sectionRefs.current.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            // Check if the section is in the viewport
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                setCurrentImage(sections[index].image);
            }
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
  return (
    <>
    <div className={classes.top}>
                <p>Our Features</p>
                <h1>Fluid AI was born out of a desire to simplify and streamline modern life</h1>
            </div>
    <div className={classes.phone}>
        <div className={classes.phone__left__side}>
            
            <div className={classes.left__content__one}>
                <h1>Fluid AI: Simplify, Organize, and Achieve More</h1>
                <p>In a world where daily tasks, communication, and goals often become overwhelming, Fluid AI offers an innovative solution. Combining advanced AI technology with a user-friendly interface, it brings together to-do lists, chats, saved items, and bucket lists into one seamless platform.</p>
            </div>
            <div className={classes.left__content__two}>

            </div>
            <div className={classes.left__content__three}>
                <h1>Fluid AI: Simplify, Organize, and Achieve More</h1>
                <p>In a world where daily tasks, communication, and goals often become overwhelming, Fluid AI offers an innovative solution. Combining advanced AI technology with a user-friendly interface, it brings together to-do lists, chats, saved items, and bucket lists into one seamless platform.</p>
            </div>
            <div className={classes.left__content__four}></div>
        </div>
        {/* <div className={classes.phone__center}>
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />

        </div> */}
          <div>
            {/* <div className="header">
                <h1>Scroll Down to Change Image</h1>
            </div> */}
            
            <div className={classes.imagecontainer}>
                <img id="dynamicImage" src={currentImage} alt="Dynamic" />
            </div>
            <div className={classes.content}>
                {/* <p>Scroll down to see the image change...</p> */}
                {sections.map((section, index) => (
                    <div
                        key={section.id}
                        ref={(el) => (sectionRefs.current[index] = el)}
                        className={classes.section}
                    >
                        {/* Section {section.id} */}
                    </div>
                ))}
            </div>
        </div>
        <div className={classes.phone__right__side}>
        <div className={classes.right__content__1}></div>
        <div className={classes.right__content__2}>
            <h1>Fluid AI: Simplify, Organize, and Achieve More</h1>
            <p>In a world where daily tasks, communication, and goals often become overwhelming, Fluid AI offers an innovative solution. Combining advanced AI technology with a user-friendly interface, it brings together to-do lists, chats, saved items, and bucket lists into one seamless platform.</p>
        </div>
        <div className={classes.right__content__3}></div>
        <div className={classes.right__content__4}>
            <h1>Fluid AI: Simplify, Organize, and Achieve More</h1>
            <p>In a world where daily tasks, communication, and goals often become overwhelming, Fluid AI offers an innovative solution. Combining advanced AI technology with a user-friendly interface, it brings together to-do lists, chats, saved items, and bucket lists into one seamless platform.</p>
        </div>
        </div>
    </div>
    </>
  )
}

export default Phone






















// import React from 'react'
// import classes from './Phone.module.css'
// import img1  from '../../src/assets/iPhone 14 Plus-1.png'
// import img2  from '../../src/assets/iPhone 14 Plus-2.png'
// import img3  from '../../src/assets/iPhone 14 Plus-3.png'
// import img4  from '../../src/assets/iPhone 14 Plus-4.png'

// function Phone() {
//   return (
//     <>
//     <div className={classes.top}>
//                 <p>Our Features</p>
//                 <h1>Fluid AI was born out of a desire to simplify and streamline modern life</h1>
//             </div>
//     <div className={classes.phone}>
//         <div className={classes.phone__left__side}>
            
//             <div className={classes.left__content__one}>
//                 <h1>Fluid AI: Simplify, Organize, and Achieve More</h1>
//                 <p>In a world where daily tasks, communication, and goals often become overwhelming, Fluid AI offers an innovative solution. Combining advanced AI technology with a user-friendly interface, it brings together to-do lists, chats, saved items, and bucket lists into one seamless platform.</p>
//             </div>
//             <div className={classes.left__content__two}>
//                 h
//             </div>
//             <div className={classes.left__content__three}>
//                 <h1>Fluid AI: Simplify, Organize, and Achieve More</h1>
//                 <p>In a world where daily tasks, communication, and goals often become overwhelming, Fluid AI offers an innovative solution. Combining advanced AI technology with a user-friendly interface, it brings together to-do lists, chats, saved items, and bucket lists into one seamless platform.</p>
//             </div>
//             <div className={classes.left__content__four}></div>
//         </div>
//         <div className={classes.phone__center}>
//             <img src={img1} alt="" />
//             <img src={img2} alt="" />
//             <img src={img3} alt="" />
//             <img src={img4} alt="" />

//         </div>
//         <div className={classes.phone__right__side}>
//         <div className={classes.right__content__1}></div>
//         <div className={classes.right__content__2}>
//             <h1>Fluid AI: Simplify, Organize, and Achieve More</h1>
//             <p>In a world where daily tasks, communication, and goals often become overwhelming, Fluid AI offers an innovative solution. Combining advanced AI technology with a user-friendly interface, it brings together to-do lists, chats, saved items, and bucket lists into one seamless platform.</p>
//         </div>
//         <div className={classes.right__content__3}></div>
//         <div className={classes.right__content__4}>
//             <h1>Fluid AI: Simplify, Organize, and Achieve More</h1>
//             <p>In a world where daily tasks, communication, and goals often become overwhelming, Fluid AI offers an innovative solution. Combining advanced AI technology with a user-friendly interface, it brings together to-do lists, chats, saved items, and bucket lists into one seamless platform.</p>
//         </div>
//         </div>
//     </div>
//     </>
//   )
// }

// export default Phone