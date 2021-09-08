import '../css_files/parentFeatureCard.css'
function ParentFeatureCard(props) {
    const clickHandler = () => {
        console.log("clicked")
    }
    return (
        <div className="parent-feature">
            <img src={props.image} alt={props.alt} id={props.id} onClick={() => { props.changeShowData(props.data); }}></img>
        </div>
    )
}
export default ParentFeatureCard