
const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

const myData = [
  'David',
  'Reyes',
  'Representante',
  '38 Years Old'
];

/*function Data (){
  
  const data1 = myData[0];
  const data2 = myData[1];
  const data3 = myData[2];
  const data4 = myData[3];

  return (
    <ul>
      <li>nombre: {data1}</li>
      <li>apellido: {data2}</li>
      <li>Ocupación: {data3}</li>
      <li>Edad: {data4}</li>
    </ul>
  );
}; */

function Data ({data}){
  
  const data1 = myData[0];
  const data2 = myData[1];
  const data3 = myData[2];
  const data4 = myData[3];

  return (
    <ul>
      <li>nombre: {data1}</li>
      <li>apellido: {data2}</li>
      <li>Ocupación: {data3}</li>
      <li>Edad: {data4}</li>
    </ul>
  );
};

/* function Data (){
  
  const data1 = myData[0];
  const data2 = myData[1];
  const data3 = myData[2];
  const data4 = myData[3];

  return (
    <ul>
      <li>nombre: {data1}</li>
      <li>apellido: {data2}</li>
      <li>Ocupación: {data3}</li>
      <li>Edad: {data4}</li>
    </ul>
  );
}; */



function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header(){
  const description = reactDescriptions[genRandomInt(2)];
  return (
    <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>React Essentials</h1>
               <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>

  );
}

function App() {
  return (
    <div>
    
      <Header/>
      
      <main>
        <h2>Time to get started!</h2>
        <Data data = {myData}/>
      </main>
    </div>
  );
}

export default App;
