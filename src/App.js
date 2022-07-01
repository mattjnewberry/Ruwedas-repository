import "./App.css";
import React from "react";
import Card from "./components/Card";
import {getStays} from "./data";

export default function App() {
    let stays = getStays();
    return (
        <div className="app">
            <header className="app-header">
                <h1>Hotels in Morroco</h1>
                
                <h2>Morroco</h2>
                <h3>Marrakesh</h3>
                <h4> Simple made easy  </h4>
                
            </header>

            <div className="container">
                {stays.map((stay) => {

                    return <Card
                        key={stay.id}
                        id={stay.id}
                        name={stay.name}
                        description={stay.description}
                        img={stay.img}
                    />
                })}
            </div>
        </div>
    );
}
