import React ,{useEffect}from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Button from '@mui/material/Button';
import Alert from './Alert';
import "bootstrap/dist/css/bootstrap.css";

export default function form({isDarkMode}) {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "4929d226-54c9-4221-9cbb-72bc0a4ddb1f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div><form onSubmit={onSubmit}>
            <div className="formplate my-4">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label form-font">Full Name</label>
                    <input type="text" name='name' className={isDarkMode?"form-control  input-box  form-font form-dark":"form-control  input-box  form-font form-light"} placeholder="Name" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label form-font" >Email </label>
                    <input type="email" name='email' className={isDarkMode?"form-control  input-box  form-font form-dark":"form-control  input-box  form-font form-light"}  placeholder="name@example.com" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label form-font">Message</label>
                    <textarea className={isDarkMode?"form-control  form-font form-dark":"form-control form-font form-light"} name='message' style={{backgroundColor:"#d8d8d8",border:"1px solid black"}}  rows="5"></textarea>
                </div>
                <Button type='submit' 
        variant="contained" 
        sx={{ 
          backgroundColor: isDarkMode ? 'white' : 'black',
          color: isDarkMode ? 'black' : 'white',
          '&:hover': { backgroundColor: isDarkMode ? '#f0f0f0' : '#333333' },

        }}
        data-aos="zoom-in"
      >
        Submit
      </Button>
      <Alert />
            </div>
            </form>
        </div>
    )
}
