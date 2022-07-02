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
                <h4> Keep calm and love Marrakesh </h4>
                
            </header>
            <button>Change user</button>
            <button onClick = {() => {
                let welcomeMessage = document.getElementById("welcomeMessage");
                let username = prompt("Please enter your name.");
                localStorage.setItem("name", username);
                welcomeMessage.textContent = "Welcome our  customer, " + username;

console.log ("Hello")}}>Click me</button>
    <p id="welcomeMessage">
        Are you even swag enough to travel?
    </p>
            
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
