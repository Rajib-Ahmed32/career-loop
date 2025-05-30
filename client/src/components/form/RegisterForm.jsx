import React, { useState } from "react";
import { Link } from "react-router-dom";
import ErrorMessage from "../error_loading/ErrorMessage";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Eye, EyeOff } from "lucide-react";

const RegisterForm = ({ onSuccess, onGoogleSignIn }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    console.log("Registration Data:", data);
    reset();
    if (onSuccess) onSuccess(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          placeholder="Your full name"
          {...register("name", { required: "Name is required" })}
        />
        <ErrorMessage error={errors.name} />
      </div>

      <div>
        <Label htmlFor="photoURL">Photo URL</Label>
        <Input
          id="photoURL"
          placeholder="https://example.com/photo.jpg"
          {...register("photoURL")}
        />
      </div>

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
        <ErrorMessage error={errors.email} />
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
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z]).*$/,
                message:
                  "Password must contain at least one uppercase and one lowercase letter",
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
        <ErrorMessage error={errors.password} />
      </div>

      <Button
        type="submit"
        className="w-full bg-primary text-primary-foreground"
      >
        Register
      </Button>

      <Button
        type="button"
        variant="outline"
        onClick={onGoogleSignIn}
        className="w-full flex justify-center items-center gap-2 mt-2"
      >
        Sign up with Google
      </Button>

      <div className="text-center text-sm text-primary mt-4">
        <Link to="/login" className="hover:underline">
          Already have an account? Login
        </Link>
      </div>
    </form>
  );
};

export default RegisterForm;
