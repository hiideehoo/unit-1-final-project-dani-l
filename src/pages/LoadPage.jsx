import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

function LoadPage({saveFilesList, setSaveFilesList}) {

    const pullCharacters = async () => {
        let response = await fetch(`http://localhost:8080/characters`);
        let saveFiles = await response.json();
        setSaveFilesList(saveFilesList = saveFiles);
    }

    const deleteCharacter = async (index) => {
        let id = saveFilesList[index].id;
        let response = await fetch(`http://localhost:8080/characters/${id}`, {
            method: 'DELETE'
        });
        if (response.ok) {
            console.log('Todo deleted successfully');
        } else {
            console.error('Error deleting todo');
        }
        pullCharacters();
    }

    useEffect(() => {
            pullCharacters()
    }, []);

    const back = <Link to="/" rel="noopener noreferrer">
        <button className="buttons" id="back">
            BACK
        </button>
    </Link>

    const saveFiles = () => {

        let batch = [];
            for(let i = 0; i < saveFilesList.length; i++) {
                batch.push(
                    <div key={i} className="saveChild" style={{textAlign: "center"}}>
                        <div // player preview
                            className="box" id="playerSprite"
                            style={{
                                width: "80px", height: "80px",
                                backgroundColor: `${saveFilesList[i].color}`, color: "black",
                                fontSize: 50 - (saveFilesList[i].name.length * 4.5)
                            }}>{saveFilesList[i].name}</div>
                            <Link to="/game" rel="noopener noreferrer"><b style={{top: "40px", left:"152px", position: "absolute", cursor: "pointer"}}><u>play</u></b></Link>
                            <br />
                            <a style={{top: "80px", left:"145px", position: "absolute", cursor: "pointer"}} onClick={() => deleteCharacter(i)}><b><u>delete</u></b></a>
                    </div>
                );
            }
            return (
                    <section className="saveParent">{batch}</section>
            );
    }
    
    return (
        <div style={{textAlign: "center"}}>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            {saveFiles()}
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            {back}
            <Footer />
            <Header />
        </div>
        
    )
}

export default LoadPage;