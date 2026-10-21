import { toast } from "react-toastify";


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

    if (res.ok) {
      toast.success('Logged in successfully')
    } else {
      toast.error(data.message || 'Login failed')
    }
    return { ok: res.ok, data };
  } catch (e) {
    toast.error('Login failed')
    return { ok: false, error: e };
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