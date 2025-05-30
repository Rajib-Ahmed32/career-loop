import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { getErrorMessage } from "../utils/getErrorMessage";
import RegisterForm from "../components/form/RegisterForm";
import LoadingSpinner from "../components/error_loading/LoadingSpinner";
import { registerUser } from "../services/authService";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSuccess = async (formData) => {
    setLoading(true);

    try {
      const data = await registerUser(formData);

      document.cookie = `token=${data.token}; path=/; max-age=${
        60 * 60 * 24 * 7
      }; Secure; SameSite=Strict`;

      toast.success("Registration successful!");
      navigate("/");
    } catch (error) {
      const message = getErrorMessage(error);
      toast.error(message);

      if (import.meta.env.DEV) {
        console.error("Registration failed:", error);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-muted px-4">
      <Card className="w-full max-w-md shadow-md">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            Register
          </CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <LoadingSpinner size="md" />
          ) : (
            <RegisterForm onSuccess={handleSuccess} />
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default RegisterPage;
