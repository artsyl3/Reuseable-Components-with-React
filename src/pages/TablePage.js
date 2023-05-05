import { render } from '@testing-library/react';
import Table from '../components/Table';

function TablePage() {
  const data = [
    {name: "Orange", color: "bg-orange-500" , score : 5},
    {name: "Apple", color: "bg-red-500" , score : 3},
    {name: "Banana", color: "bg-yellow-500" , score : 1},
    {name: "lime", color: "bg-green-500" , score : 4}
  ]

  const config = [
    {label : "name",
     render : (fruit) => fruit.name
    } , 
    {label : "color",
     render : (fruit) => <div className={`p-3 m-3 ${fruit.color}`}></div>
    } , 
    {label : "score",
     render : (fruit) => fruit.score
    }
  ]
  
const KeyFn = (fruit) => fruit.name;

  return (
    <div>
      <Table data={data} config={config} keyFn={KeyFn}/>
    </div>
  );
}

export default TablePage;
