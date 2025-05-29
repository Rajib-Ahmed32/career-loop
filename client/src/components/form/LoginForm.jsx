import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Eye, EyeOff } from "lucide-react";

const LoginForm = ({ onSuccess, onGoogleSignIn, onForgotPassword }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    console.log("Login Data:", data);
    reset();
    if (onSuccess) onSuccess(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="you@example.com"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter a valid email address",
            },
          })}
        />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="password">Password</Label>
        <div className="relative">
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
          >
            {showPassword ? (
              <EyeOff className="w-5 h-5" />
            ) : (
              <Eye className="w-5 h-5" />
            )}
          </button>
        </div>
        {errors.password && (
          <p className="text-sm text-red-500">{errors.password.message}</p>
        )}
      </div>
      <div className="text-right text-sm text-primary cursor-pointer mb-2">
        <p onClick={onForgotPassword} className="hover:underline">
          Forgot Password?
        </p>
      </div>

      <Button
        type="submit"
        className="w-full bg-primary text-primary-foreground"
      >
        Login
      </Button>

      <Button
        type="button"
        variant="outline"
        onClick={onGoogleSignIn}
        className="w-full flex justify-center items-center gap-2 mt-2"
      >
        Sign in with Google
      </Button>

      <div className="text-center text-sm text-primary mt-4">
        <Link to="/register" className="hover:underline">
          did not have an account? register
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
