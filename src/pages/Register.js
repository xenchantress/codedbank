import { formToJSON } from 'axios';
import React from 'react'
import React, { useState } from 'react';


const Register = () => {

    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ image, setImage ] = useState(null);

    const handleRegistration = async ()=> {
        return{
            const formData = new FormData();
            formData.append('username', username);
            formData.append('password', password);
            formData.append('image', image);

            const response = await fetch('' {
                method: ' POST',
                body: formData,
            });
        
            if (response.ok) {
            console.log('Registration successful');
            } else {
                console.error('Registration failed ');

                catch (error){
                    console.error('Error during registration:', error);
                }
            };
            return (
                <div>
                  <h2>Register</h2>
                  <form>
                    <label htmlFor="username">Username:</label>
                    <input
                      type="text"
                      id="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
            
                    <label htmlFor="password">Password:</label>
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
            
                    <label htmlFor="image">Profile Image:</label>
                    <input
                      type="file"
                      id="image"
                      accept="image/*"
                      onChange={(e) => setImage(e.target.files[0])}
                    />
            
                    <button type="button" onClick={handleRegistration}>
                      Register
                    </button>
                  </form>
                </div>
              );
            };
            
            export default Register;

    }
//   return (
//     <div>Register</div>
//   )
// }
