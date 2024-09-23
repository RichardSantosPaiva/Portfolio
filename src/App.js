import './App.css';
import Slide from './components/Slide/'; // Ensure correct import of Slide component
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

export default function App() {
  return (
    <main>
      <h1>Richard Paiva</h1>
      <div style={{display:'block', width:700, padding:30 }}>
        <h4>React-Bootstrap Carousel Component</h4>
        {/* Add Slide component here */}
        <Slide />
      </div>
      <section>
        <div>
          <div className="item">
            <div className="box1">
              <h2>Texto</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dolorem at ipsam repellendus in labore! Voluptatem veniam vel facere blanditiis tempora eius accusantium praesentium, vitae iusto. Molestiae amet non mollitia!</p>
            </div>
            <div className="box2">a</div>
            <div className="box3">a</div>
          </div>
        </div>
      </section>
    </main>
  );
}
