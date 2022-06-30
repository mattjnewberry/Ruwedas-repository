import "./App.css";
import React from "react";
import Card from "./components/Card";
import {getStays} from "./data";

export default function App() {
    let stays = getStays();
    return (
        <div className="app">
            <header className="app-header">
                <h1>Dream Stays</h1>
            </header>
<<<<<<< HEAD
            <h2>London hotels</h2>
=======
                <h2>London<h2>
>>>>>>> fb0bdc8b3d45e7aa07f59f3516eebba84684777a
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
