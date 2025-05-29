import React from "react";
import LoginForm from "../components/form/LoginForm";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

const LoginPage = () => {
  const handleSuccess = (data) => {
    console.log("Login successful:", data);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-muted px-4">
      <Card className="w-full max-w-md shadow-md">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            Login
          </CardTitle>
        </CardHeader>
        <CardContent>
          <LoginForm onSuccess={handleSuccess} />
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
