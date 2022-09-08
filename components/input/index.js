export default function Input(props) {

    const isDisabled = ()=>{
        return props.disabled == true ? "bg-gray-700" : "bg-transparent"
    }

    return(
        <div className={props.containerClass} >
            <span className="text-xs" >{props.label}</span>
            <input
                className={"form-control border border-gray-700 p-2 px-3 rounded w-full "+isDisabled()}
                onChange={(e)=>props.onChange(e)}
                value={props.value}
                disabled={props.disabled}
            />
            {
                props.message && <span className="text-xs text-gray-500" >{props.message}</span>
            }
        </div>
    )
}