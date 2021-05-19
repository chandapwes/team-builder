import { render } from 'react-dom'
import React, { useState } from 'react'


const teamList = [
  { name: 'Chan Miner', email: 'chan@chan.com', role: 'student' },
  { name: 'Alli Miner', email: 'alli@alli.com', role: 'student' },
  { name: 'Micah Clement', email: 'micah@micah.com', role: 'teacher' }
]

const initialFormValues = {
  name: '',
  email: '',
  role: ''
}

function App() {
  const [members, setMembers] = useState(teamList);
  const [formValues, setFormValues] = useState(initialFormValues);

  const change = (ev) => {
    const { name, value } = ev.target
    setFormValues({...formValues, [name]: value})
  }

  const submit = (ev) => {
    ev.preventDefault()
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role.trim()
    }
    setMembers([...members, newMember])
    setFormValues(initialFormValues)
  }

return(
  <div className='container'>
    <h1>Team List</h1>
    {members.map((member, idx) => {
      return (
        <div key={idx}>
         Name: {member.name} 
         <br />
         Email: {member.email}
         <br />
         Role: {member.role}
         <br />
         <br />
        </div>
      )
    })}
    <form onSubmit={submit}>
      <input
      placeholder='name...'
      type='text'
      onChange={change}
      value={formValues.name}
      name='name'
      />
      <input 
      placeholder='email...'
      type='text'
      onChange={change}
      value={formValues.email}
      name='email'
      />
      <input 
      placeholder='role...'
      type='text'
      onChange={change}
      value={formValues.role}
      name='role'
      />
      <button>Submit</button>
    </form>
  </div>
 )
}

render(
  <>
  <App />
  </>
  , document.querySelector('#root')
)

export default App;
