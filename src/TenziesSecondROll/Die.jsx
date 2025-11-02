export default function Die (props) {

    const style = {
        width: '50px',
        height: '50px',
        borderRadius: '5px',
        cursor: 'pointer',
        background: props.isHeld ? '#59E391' : 'white',
        border: 'none',
        boxShadow: ' 0px 2px 2px rgba(0, 0, 0, 0.15)'

    }
     
    return (
        <button onClick={props.Hold}style={style}>{props.value}</button>
    )
}