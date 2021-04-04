 type ButtonProps = {
    onClick:() => void
    titleButton: string
    disabled: boolean
}

 export function Button(props: ButtonProps){


   return (
         
<button disabled={props.disabled} className="button" onClick={props.onClick}>
    {props.titleButton}
  </button>
   )
}

