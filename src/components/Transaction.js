import Item from "./Item"
import './Transaction.css'


const Transactions = (props)=>{
    const {items} = props
    return (
     <div>
      <ul className="item-list">
     
     {items.map((element)=>{
      return <Item {...element} key = {element.id}/>
     })}
   </ul>

     </div>
    )
   }
   export default Transactions