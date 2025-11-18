import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


export const signInApi = async (credentials) => {
  try {
    const res = await fetch("http://localhost:5000/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials)
    });

    const data = await res.json();

    console.log(data, res)
    if (res.ok) {
      toast.success('Logged in successfully')
    }
  } catch (e) {
    toast.error('login failed', e)
  }
}

export const signUp = async (userDetails) => {
  try {
    const res = await fetch('http://localhost:5000/user/register', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userDetails)
    });
     const data = await res.json();
    return { ok: res.ok, data };
  } catch (error) {
    return { ok: false, error };
  }
}