export default function Checkbox(props){
  return(
    <div>
   
    <label >
    <input
     type="checkbox" 
    name="select"
    />
    <span>{props.label}</span>
    </label>
    </div>
  );
};