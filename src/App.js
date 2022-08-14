import './App.css';
import Header from './components/Header';
import MyData from './components/MyData';
import Cards from './components/Cards';


function App() {
  const cards=MyData.map(item=> {
    return (< Cards key={item.id}
                        {...item}
      />)
  })
    
  return (
    <>
     <Header />
     <section>{cards}</section>
  
    
    </>
  );
}

export default App;
