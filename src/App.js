import React from 'react'
import openai from './openai.config'


const App = () => {

  const[question, setquestion] = React.useState("")
  const [answer, setAnswer] = React.useState("")

  const runPrompt = async () =>{

    const response = await openai.createCompletion({
      model : "text-davinci-003",
      prompt : question,
      max_tokens : 2000,
      temperature: 1
    })
    console.log(response);
    console.log(response.data.choices[0].text);
    setAnswer(response.data.choices[0].text)
    
  }


  return (
    <div>
      <input placeholder='Sual ver' value={question} onChange={(e)=>{setquestion(e.target.value)}}/>
      <button onClick={runPrompt}>ChatGPT</button>
      <p>{answer}</p>
    </div>
  )
}

export default App
