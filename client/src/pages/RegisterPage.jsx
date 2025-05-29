import React from "react";
import RegisterForm from "../components/form/RegisterForm";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

const RegisterPage = () => {
  const handleSuccess = (data) => {
    console.log("Form submitted successfully:", data);
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
          <RegisterForm onSuccess={handleSuccess} />
        </CardContent>
      </Card>
    </div>
  );
};

export default RegisterPage;
