import {Link} from 'react-router-dom'
function Linkify(props){
    return (
            <button className={props.classes}>
                <Link to={props.link}>{props.text}</Link>
            </button>
    );
}

export default Linkify