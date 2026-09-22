import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

function LoadPage({ currentSave, setCurrentSave, currentWorld, setCurrentWorld }) {

    let [saveFilesList, setSaveFilesList] = useState([]);

    const navigate = useNavigate();
    const loadGame = () => {
        navigate('/game');
    }

    const pullCharacters = async () => {
        let response = await fetch(`http://localhost:8080/characters`);
        let saveFiles = await response.json();
        setSaveFilesList(saveFilesList = saveFiles);
    }

    const loadCharacter = async (index) => {
        setCurrentSave(currentSave = saveFilesList[index]);
        let worldId = (currentSave.id - 111);
        let response = await fetch(`http://localhost:8080/worlds/${worldId}`);
        let loadWorld = await response.json();
        setCurrentWorld(currentWorld = loadWorld);
        loadGame();
    }

    const deleteCharacter = async (index) => {
        let id = saveFilesList[index].id;
        let response = await fetch(`http://localhost:8080/characters/${id}`, {
            method: 'DELETE'
        });
        pullCharacters();

        let worldId = (saveFilesList[index].id - 111);
        let response2 = await fetch(`http://localhost:8080/worlds/${worldId}`, {
            method: 'DELETE'
        });
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
                            <b style={{top: "40px", left:"152px", position: "absolute", cursor: "pointer"}} onClick={() => loadCharacter(i)}><u>play</u></b>
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