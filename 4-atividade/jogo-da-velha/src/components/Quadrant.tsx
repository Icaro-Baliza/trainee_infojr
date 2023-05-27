interface QuadrantProps {
    value?: string | null;
    onClick?: () => void;
}

const Quadrant: React.FC<QuadrantProps> = (props) => {
    if(typeof props.value === "string"){
        return (
            <div className={props.value} onClick={props.onClick}>{props.value}</div>
        )
    }
    else{
    return (
        <div className="quadrant" onClick={props.onClick}>{props.value}</div>
    )
    }
}

export default Quadrant;