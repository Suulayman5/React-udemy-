import { useState } from "react";

const Home = () => {
    // const [name, setName] = useState('john')
    
    // const handleClick =()=>{
    //     setName('papa')
    const [count, setCount]= useState(0)
    function incrateCount(){
        setCount(count + 1)
    }
    
    function decreaseCount(){
        setCount(count - 1)
    }
    return ( 
        <div className='home'>
            <h2>Homepage</h2>
            <button onClick={incrateCount}>CLICK CLAK</button><br/>
            <p>count is {count}</p><br/>
            <button onClick={decreaseCount}>CLICK CLAK</button>
        {/* <button onClick={handleClick}>Cliky</button>
        <p>{name}</p> */}
        </div>

        // <div className="Home">
        //     <h2>Homepage</h2><br/><hr/>
        //     {/* <Example/> */}
        //     <Example2 Name = 'Sly' Age= '32' Job= 'Front-end dev'/>
        //     <Example2 Name = 'mily' Age= '22' Job= 'Back-end dev'/>
        //     <Example2 Name = 'Morenike' Age= '22' Job= 'Olosho'/>
        //     <Example2 Name ='Ajoke' Age= '29' Job= 'Snr-Olosho'/>

        //     <Book Title = 'Tap Tap' Author = 'Suleiman Dickson'  Description= 'Learn about tap currency' Date = '22nd June 2024'/>

        // </div>
    

     );
    }
const  Example2= (props) => {
    return ( 
        <div>
            <h3>Name: {props.Name}</h3><br/>
            <h3>Age: {props.Age}</h3><br/>
            <h3>Job: {props.Job}</h3><br/><hr/>
        </div>
     );
}
 
const Book = (props) => {
    return ( 
        <p>
            <h2>Title: {props.Title}</h2><br/>
            <h3>Author: {props.Author}</h3><br/>
            <h4>Description: {props.Description}</h4><br/>
            <h6>Date: {props.Date}</h6><br/>
        </p>
     );
}
 


 
// const Example = ()=>{
//     return(
//         <div>
//             <div>
//                 <h3>Name: Sule</h3><br/>
//                 <h3>Age: 25</h3><br/>
//                 <h3>Job: Front end dev</h3><br/><hr/>
//             </div>

//             <div>
//                 <h3>Name: laty</h3><br/>
//                 <h3>Age: 55</h3><br/>
//                 <h3>Job: back end dev</h3><br/><hr/>
//             </div>

//             <div>
//                 <h3>Name: gift</h3><br/>
//                 <h3>Age: 22</h3><br/>
//                 <h3>Job: Olosho</h3><br/><hr/>
//             </div>
//         </div>
//     )
// }

export default Home;