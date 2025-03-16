import React from "react";
import { useForm } from "react-hook-form";

function SignUp() {
    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm();
    
      const onSubmit = (data) => {
        console.log(data);
      };
    
      console.log(errors);
    
      return (
        <>
        <p className="title">Registeration</p>
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
                <label>Confirm Password</label>
                <input  name="confirmPassword" 
                        type="password" {...register('confirmPassword')} 
                        className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`} />
                <div className="invalid-feedback">{errors.confirmPassword?.message}</div>
                <div className="form-control">
                <label></label>
                <button className="px-8 mx-auto py-2.5 rounded-md border-[2px] bg-slate-950 border-blue-400 border-solid blueShadow duration-200" type="submit">Login</button>
                </div>
            </form>
        </>
      );
    }
    
    export default SignUp;