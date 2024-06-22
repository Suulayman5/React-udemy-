const Home = () => {
    return ( 
        <div className="Home">
            <h2>Homepage</h2><br/>
            {/* <Example/> */}
            <Example2 Name = 'Sly' Age= '32' Job= 'Front-end dev'/>
            <Example2 Name = 'mily' Age= '22' Job= 'Back-end dev'/>
            <Example2 Name = 'Morenike' Age= '22' Job= 'Olosho'/>
            <Example2 Name ='Ajoke' Age= '29' Job= 'Snr-Olosho'/>

        </div>
     );
    }
const  Example2= (props) => {
    return ( 
        <div>
            <h3>Name: {props.Name}</h3><br/>
            <h3>Age: {props.Age}</h3><br/>
            <h3>Jobs: {props.Job}</h3><br/><hr/>
        </div>
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