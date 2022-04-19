import { useState } from 'react'
import styled from "styled-components";
// import './App.css'

const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  border: 1px solid black;
`;

function App() {

  return (
    <>
      <header>
        <h1>Paweł Okapiec</h1>
        <h5>Web developer | Data engenieer</h5>
      </header>

      <section>
        <h3>About me</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit id iste minus tenetur harum, nihil placeat ullam sed. Earum nobis culpa delectus molestiae deleniti similique magnam dignissimos aliquam perspiciatis voluptas esse eveniet nemo corrupti magni exercitationem consequuntur fugiat, provident quisquam qui minima, quo error optio omnis iste? Eaque, quisquam ipsam!</p>
      </section>

      <section>
        <h3>My focusses</h3>
        <ul>
          <li>React</li>
          <li>Django</li>
          <li>Flask</li>
          <li>FastAPI</li>
        </ul>
      </section>

      <main>
        <h3>My work</h3>
        <ul>
          <li>Experience a gain at work</li>
          <li>Project 1</li>
          <li>Project 2</li>
          <li>Project 3</li>
          <li>Project 4</li>
        </ul>
      </main>
    </>
  )
}

export default App;
