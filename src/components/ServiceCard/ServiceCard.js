import './ServiceCard.css'
function ServiceCard(props){
    return(
        <div className="serviceCard" style={{ 'background-image': `url(${props.image})` }}>
            <h2 className="name">{props.name}</h2>
        </div>
    )
}
export default ServiceCard;