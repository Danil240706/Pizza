import React from 'react';
import "../scss/app.scss";
import PizzaBlock from "../components/PizzaBlock";
const Home = () => {
    const [items,setItems]=React.useState([]);

  React.useEffect(()=>{
    fetch("https://66f121e341537919154fa970.mockapi.io/items")
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      setItems(json);
    });
  },[])


  return(
  <>
    <h2 className="content__title">Все пиццы</h2>
    <div className="content__items">
      {items.map((obj) =>(
        <PizzaBlock key={obj.id} {...obj} />
      ))}
    </div>
  </> 
        
  )
}


export default Home;