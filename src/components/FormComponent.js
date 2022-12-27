import { useState , useEffect} from 'react'
import './FormComponent.css'
import { v4 as uuidv4, v4 } from 'uuid';


const FormComponent = (props)=>{
    console.log("Render Form Component")
    const [title,setTitle]= useState('')
    const [amount,setAmount]= useState(0)
    const [formValid,setformValid] = useState(false)

    const inputTitle = (event)=>{
        setTitle(event.target.value)
    }
    const inputAmount =(event)=>{
        setAmount(event.target.value)
    }
    const saveItem = (event)=>{
        event.preventDefault()
        const itemData = {
            id:uuidv4(),
            title:title,
            amount:Number(amount)
        }
        props.onAddItem(itemData)
        setTitle('')
        setAmount(0)
    }

    useEffect(()=>{
        const checkData = title.trim().length>0 && amount!==0
        setformValid(checkData)
    },[title,amount])
    return(
        <div>
            <form onSubmit={saveItem}>
                <div className = "form-control">
                    <div>
                    <label>ຊື່ລາຍການ</label>
                    <input type ="text" placeholder="ລະບຸລາຍການ" onChange={inputTitle} value ={title}></input>
                    </div>
                    <label>ຈຳນວນເງິນ</label>
                    <input type="number" placeholder="(+ ລາຍຮັບ , - ລາຍຈ່າຍ)" onChange={inputAmount} value={amount}></input>

                </div>
                <div>
                    <button type="submit" className="btn" disabled={!formValid}>ເພີ່ມຂໍ້ມູນ</button>
                </div>
            </form>
        </div>
    )
}

export default FormComponent