import { useState } from "react";
import AnswersList from "./AnswersList";

function Survey() {
  const [open, setOpen] = useState(false); // Ignore this state
  
  const initialFormData = {
    color: '',
    spendtime: [],
    review: '',
    username: '',
    email: ''
  }
  
  const [formData, setFormData] = useState(initialFormData);
  const [answersList, setAnswersList] = useState([]);

  const handleFormData = (event) => {
    const { name, value, type } = event.target
    
    if (type === "checkbox") {
      setFormData((formData) => {
        const activity = formData.spendtime.includes(value) ? formData.spendtime.filter((item) => item !== value) : [...formData.spendtime, value]
        return { ...formData, [name] : activity}})
    } else {
      setFormData({...formData, [name] : value})
    }
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setAnswersList([...answersList, formData]); 
    console.log(answersList);

    setFormData(initialFormData);
  }

  return (
    <main className="survey">

      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList answersList={answersList}/>
      </section>

      <section className="survey__form">
      <form className="form" onSubmit={handleSubmit}>
          
          <h2>Tell us what you think about your rubber duck!</h2>
         
          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            <ul>
              <li>
                <input id="color-one" type="radio" name="color" value="1" onChange={handleFormData} checked={formData.color === '1'}/>
                <label htmlFor="color-one"> 1 </label>
              </li>
              <li>
                <input id="color-two" type="radio" name="color" value="2" onChange={handleFormData} checked={formData.color === '2'}/>
                <label htmlFor="color-two"> 2 </label>
              </li>
              <li>
                <input id="color-three" type="radio" name="color" value="3" onChange={handleFormData} checked={formData.color === '3'} />
                <label htmlFor="color-three"> 3 </label>
              </li>
              <li>
                <input id="color-four" type="radio" name="color" value="4" onChange={handleFormData} checked={formData.color === '4'}/>
                <label htmlFor="color-four"> 4 </label>
              </li>
            </ul>
          </div>

          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            <ul>
              <li>
                <label>
                  <input name="spendtime" type="checkbox" value="swimming" onChange={handleFormData} checked={formData.spendtime.includes("swimming") } /> 
                  Swimming 
                </label>
              </li>
              <li>
                <label>
                  <input name="spendtime" type="checkbox" value="bathing" onChange={handleFormData} checked={formData.spendtime.includes("bathing") }/> 
                  Bathing 
                </label>
              </li>
              <li>
                <label>
                  <input name="spendtime" type="checkbox" value="chatting" onChange={handleFormData} checked={formData.spendtime.includes("chatting") }/>
                  Chatting
                </label>
              </li>
              <li>
                <label>
                  <input name="spendtime" type="checkbox" value="noTime" onChange={handleFormData} checked={formData.spendtime.includes("noTime") }/>
                  I dont like to spend time with it
                </label>
              </li>
            </ul>
          </div>

          <label>
            What else have you got to say about your rubber duck?
            <textarea name="review" cols="30" rows="10" onChange={handleFormData} value={formData.review}></textarea>
          </label>
          <label> 
            Put your name here (if you feel like it):
            <input type="text" name="username" value={formData.username} onChange={handleFormData} />
          </label>
          <label>
            Leave us your email pretty please??
            <input type="email" name="email" value={formData.email} onChange={handleFormData} />
          </label>

          <input className="form__submit" type="submit" value="Submit Survey!"/>

        </form>
      </section>
    </main>
  )
}

export default Survey;
