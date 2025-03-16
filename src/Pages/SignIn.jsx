import React from 'react'
import  { useForm }  from  "react-hook-form";


function SignIn () {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const userData = JSON.parse(localStorage.getItem(data.email));
        if (userData) { // getItem can return actual value or null
            if (userData.password === data.password) {
                console.log(userData.name + " You Are Successfully Logged In");
            } else {
                console.log("Email or Password is not matching with our record");
            }
        } else {
            console.log("Email or Password is not matching with our record");
        }
    };
    return (
        <>
        <div>
            <div>

            <p className="title">Login Form</p>

            <form className=" signup" onSubmit={handleSubmit(onSubmit)}>
                <label>Email</label>
                <input
                    type="text"
                    name="email"
                    {...register("email", {
                    required: "Email is required.",
                    pattern: {
                        value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                        message: "Email is not valid."
                    }
                    })}
                />
                {errors.email && <p className="error-message">{errors.email.message}</p>}
                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    {...register("password", {
                    required: true,
                    validate: {
                        checkLength: (value) => value.length >= 6,
                        matchPattern: (value) =>
                        /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/.test(
                            value
                        )
                    }
                    })}
                />
                {errors.password?.type === "required" && (
                    <p className="error-message">Password is required.</p>
                )}
                {errors.password?.type === "checkLength" && (
                    <p className="error-message">
                    Password should be at-least 6 characters.
                    </p>
                )}
                {errors.password?.type === "matchPattern" && (
                    <p className="error-message">
                    Password should contain at least one uppercase letter, lowercase
                    letter, digit, and special symbol.
                    </p>
                )}
                <div className="form-control">
                <label></label>
                <button className="px-8 mx-auto py-2.5 rounded-md border-[2px] bg-slate-950 border-blue-400 border-solid blueShadow duration-200" type="submit">Login</button>
                </div>
            </form>
            </div>
            </div>
        </>
    );
}
  

export default SignIn;

