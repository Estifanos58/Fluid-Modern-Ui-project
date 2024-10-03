import React, { useState, useEffect } from 'react';
import axios from 'axios';
import classes from './Login.module.css'; // Add custom CSS here
import iphoneB from '../../src/assets/iphoneB.png'
import { RiArrowDropDownLine } from "react-icons/ri";
function Login() {
    const [data, setData] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    async function fetchData() {
        const items = await axios.get('https://restcountries.com/v3.1/all');
        if (items) {
            setData(items.data);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleSelectCountry = (country) => {
        setSelectedCountry(country);
        setDropdownOpen(false); // Close the dropdown after selection
    };

    // if(data.length > 0) {
    //     console.log(data[0].)
    // }

    return (
        <div className={classes.login}>
            <div className={classes.login__form}>
                <h1>Join the Fluid AI Waitlist Today!</h1>
                <form action="">
                    <div className={classes.input}>
                        <div className={classes.name}>
                            <label htmlFor="name">Name</label>
                            <input type="text" id= 'name' className={classes.name} />
                        </div>
                        <div className={classes.email}>
                            <label htmlFor="email">Email</label>
                            <input type="email" id= 'email' className={classes.email}  />
                        </div>
                    </div>
                    

                    <div className={classes.customSelect}>
                        <div className={classes.selectedItem} onClick={toggleDropdown}>
                            {selectedCountry ? (
                                <>
                                    <img src={selectedCountry.flags.png} alt={selectedCountry.name.common} style={{ width: '20px', marginRight: '10px' }} />
                                    <p style={{color:'#fff'}}>{selectedCountry.name.common}   <span style={{color:'#fff'}}><RiArrowDropDownLine size={30} /></span></p>
                                  
                                </>
                            ) : data.length > 0 && (<>
                                <img src={data[0].flags.png} alt={data[0].name.common} style={{ width: '20px', marginRight: '10px' }} />
                                <p style={{color:'#fff'}}>{data[0].name.common}  <span style={{color:'#fff'}}><RiArrowDropDownLine  size={30}/></span></p>
                               
                                </>
                            )}
                        </div>
                          
                        {dropdownOpen && (
                            <div className={classes.dropdownMenu}>
                                {data.length > 0 && data.map((country) => (
                                    <div
                                        className={classes.dropdownItem}
                                        key={country.name.common}
                                        onClick={() => handleSelectCountry(country)}
                                    >
                                        <img src={country.flags.png} alt={country.name.common} style={{ width: '20px', marginRight: '10px' }} />
                                        <p style={{color:'#fff'}}>{country.name.common}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </form>
            </div>
            <div className={classes.iphone}>
                <img src={iphoneB} alt="" />
            </div>
        </div>
    );
}

export default Login;






// import React, {useState, useEffect} from 'react'
// import classes from './Login.module.css'
// import  axios  from 'axios'
// function Login() {
//     let [data, setData] =useState([])

//     async function fetchData() {
//         const items = await axios.get('https://restcountries.com/v3.1/all')
//         if(items){
//             setData(items.data)
//         }
//     }

//     useEffect(()=>{
//         fetchData()
//     },[])
//     // console.log(data[0].flags.png)
//     // console.log(data)
//   return (
//     <div className={classes.login}>
//         <div className={classes.login__form}>
//             <h1>Join the Fluid AI Waitlist Today!</h1>
//             <form action="">
//                 <input type="text" className={classes.name}/>
//                 <input type="email" className={classes.email} />
//                 <select name="" id="">
//                     {
//                         data.length > 0 ?
//                         data.map((dataItem)=>(  
//                             <>
                           
//                             <option value={dataItem.name.common} >  <img src={dataItem.flags.png} alt="" style={{width:'100px'}}/>{dataItem.name.common}</option>
//                             </>
//                         )) : null
//                     }
                    
//                     <option value=""></option>
//                 </select>

//             </form>
//         </div>
//     </div>
//   )
// }

// export default Login
