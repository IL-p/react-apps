export default function Die (props) {

     const Bstyle = {
        width: '60px',
        height: '60px',
        color: 'black',
        backgroundColor: props.isHeld ? '#59E391' : 'white',
        cursor: 'pointer',
        border: 'none',
        boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.15)',
        borderRadius: '5px'
    }


     return (
        <button 
        onClick={props.Hold} 
        style={Bstyle}
        araia-label={`Die with value ${props.value},
         ${props.isHeld ? 'Held' : 'Not held'}`}>{props.value}</button>
     )
}