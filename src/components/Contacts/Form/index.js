import {useState} from "react";

export default function Form({addContact, contacts}) {
    console.log(addContact)
    const initialInputValues = {fullname:"" , phone_number:""};
    const [form,setForm] = useState(initialInputValues)

    const onChangeInput = (e) =>{
        setForm({...form, [e.target.name]: e.target.value});
        
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(form.fullname === "" || form.phone_number === "") {
            return false;  // if both input is empty than do nothing
        }
        addContact([...contacts, form]); // Save old contacts and new
        setForm(initialInputValues) // clear input
    }

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input name="fullname" placeholder="Full Name" value={form.fullname}  onChange={onChangeInput}/>
      </div>
      <div>
        <input name="phone_number" placeholder="Phone Number" value={form.phone_number} onChange={onChangeInput} />
      </div>
      <div>
          <button>Add</button>
      </div>
    </form>
  );
}
