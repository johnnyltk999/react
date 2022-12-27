
import './App.css';
import Transaction from './components/Transaction';
import FormComponent from './components/FormComponent';
import { useState,useEffect } from 'react';
import DataContext from './data/DataContext';
import ReportComponent from './components/ReportComponent';
import {BrowserRouter as Router,Route,Link, Routes} from 'react-router-dom';


function App() {


  const design = {color:'red',textAlign:`center`,fontSize:`2rem`}
  const [items,setItems] = useState([])

  const [reportIncome,setReportIncome] = useState(0)
  const [reportExpense,setReportExpense] = useState(0)
  const onAddNewItem = (newItem)=>{
        setItems((prevItem)=>{
          return [newItem,...prevItem]
        })
      }
      useEffect(()=>{
          const amounts = items.map(items=>items.amount)
          const income = amounts.filter(element=>element>0).reduce((total,element)=>total+=element,0)
          const expense = (amounts.filter(element=>element<0).reduce((total,element)=>total+=element,0))*-1
          
          setReportIncome(income.toFixed(2))
          setReportExpense(expense.toFixed(2))
      },[items,reportIncome,reportExpense])


        return (
    <DataContext.Provider value ={
      {
        income : reportIncome,
        expense : reportExpense
      }
    }>
    <div className='container'>
        <h1 style={design}>ແອັບບັນຊີລາຍຮັບ - ລາຍຈ່າຍ</h1>
        <Router>
        <div>
          <ul className='horizontal-menu'>
            <li>
            <Link to="/">ຂໍ້ມູນບັນຊີ</Link>
            </li>
            <li>
            <Link to="/insert">ບັນທຶກຂໍ້ມູນ</Link>
            </li>
          </ul>
          <Routes>
            <Route path="/"element={<ReportComponent></ReportComponent>}>
              
            </Route>
            <Route path="/insert"element={<><FormComponent onAddItem={onAddNewItem}/> <Transaction items={items}/> </>}>
            </Route>
          </Routes>
        </div>
        </Router>

    </div>

     </DataContext.Provider>
    
  );
}

export default App;
