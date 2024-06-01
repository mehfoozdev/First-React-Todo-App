
function Plan(props){
    return <>
        <li className="shadow px-3 my-2 col-sm-9">- {props.value}</li>
        <button className="btn btn-danger my-2 col-sm-2 offset-1 btn-sm " onClick={()=>
            {props.sendData(props.id)}
        }>X</button>
     </>
}

export default Plan;