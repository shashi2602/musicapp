import {Link} from 'react-router-dom'
function Linkify(props){
    const {classes,link,text}=props
    return (
            <button className={classes}>
                <Link to={link}>{text}</Link>
            </button>
    );
}

export default Linkify