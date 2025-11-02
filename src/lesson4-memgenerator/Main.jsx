import catPic from "../../../../../MSG/OneDrive/Pictures/catPic.jpg";
import React from "react";
import { useState } from "react";



export default function Main () {
    
      const [meme, setMeme] = React.useState({
        img: catPic,
        topText: 'One does not simply',
        bottomText: 'walk into mordoor'
      });
      const [memeData, setMemeData] = React.useState([])
      function handleChange (event) {
        const {value, name} = event.currentTarget;
       
       setMeme(prevMeme => ({...prevMeme, [name]: value}))
      };
     React.useEffect(() => {
        fetch(' https://api.imgflip.com/get_memes')
        .then(res => res.json())
       .then( daTa => 
        setMemeData(daTa.data.memes))
     }, [])

     function memeImage () {
        const randomNumber = Math.floor(Math.random() * memeData.length)
        const randomMemeUrl = memeData[randomNumber].url
        setMeme(prevMeme => ({...prevMeme, img:randomMemeUrl}))
     }
     // when your using useEffect functions you can never use await function
     /**
      * React.useEffect( async () => {
      * const res = await fetch("https://api.imgflip.com/get_memes")
      * const data = await res.json()
      * setMemeData(daTa.data.memes)}, [])
      */
    return (
        <main className="main">
            <div className="form">
                <label htmlFor="topText">Top Text
                    <input type="text" name="topText" id="topText" placeholder="One does not simply" onChange={handleChange} value={meme.topText}/>
                </label>
                
                <label htmlFor="bottomText">Bottom Text
                    <input type="text" id="bottomText" name="bottomText" placeholder="walk into mordoor" onChange={handleChange} value={meme.bottomText}/>
                </label>
            </div>
            <div>
                <button onClick={memeImage} className="button">Get a New meme Image</button>
            </div>
            <div className="meme">
                <img src={meme.img} alt="" />
                <span className="topText">{meme.topText}</span>
                <span className="bottomText">{meme.bottomText}</span>
            </div>
        </main>
    )
}

/**
 * Functional programming: A pure function is one that if its given the same input, it will also give the same output, and running that function will never have any kind of change else where in your system, ui as a fuction of state, which means the whole job of the components is to take props(inputs) and produce a UI output. if the inputs are the same then it'll will produce the same UI interminently, if the change in props alternates via change in a parent component state,  then it will cause react to rerender producing a different result. i.e a different UI, this exact principles applies if what changes is our local state in our component, by which a modification of that state will produce a new user interface.
 */