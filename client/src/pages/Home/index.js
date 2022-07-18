
import { Container } from "react-bootstrap";
import "./Home.css";
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Button from 'react-bootstrap/Button';


export default function Home() {
    return (
        <>
            <article className="home-container">
                
                <Container className="home-inner-container">
                    <div className="welcome-div">
                        <h2 className="home-h2a">There's a time for playing it safe ... </h2>
                        <h2 className="home-h2b">and there's a time for ...</h2>
                        <h1 className="home-h1">Risky Quizness!</h1>
                    </div>
<br></br>
<br></br>
                    <form class="form">
      <label>Enter a username: <br></br>
        <input type="text" />
      </label>
    </form>
    <br></br>
    <br></br>
    <button class="startbtn">Start</button>
                </Container>
            </article>
            
        </>

    
    )
}



// function MyForm() {
//     const [name, setName] = useState("");
  
//     return (
//       <form>
//         <label>Enter your name:
//           <input
//             type="text" 
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </label>
//       </form>
//     )
//   }
  
//   const root = ReactDOM.createRoot(document.getElementById('root'));
//   root.render(<MyForm />);

//   function startBtn() {
//     return (
//       <>
//         <Button variant="primary">Primary</Button>{'Start'}
//       </>
//     );
//   }
  
//   export default startBtn;