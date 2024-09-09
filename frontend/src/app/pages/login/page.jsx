"use client"; // Asegura que esto sea un Client Component

import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid"; // Asegúrate de tener Heroicons instalado

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [showPassword, setShowPassword] = useState(false); // Estado para controlar visibilidad de la contraseña

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      email: email,
      password: password,
    };

    console.log("Datos enviados:", userData);

    try {
      const response = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const contentType = response.headers.get("content-type");
      const text = await response.text();

      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Respuesta no es JSON válida.");
      }

      const data = JSON.parse(text);

      if (!response.ok) {
        throw new Error(data.message || "Error en el servidor");
      }

      console.log("Usuario registrado:", data);
      console.log("enviando a otra pag");
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      setErrorMessage("Ocurrió un error al intentar iniciar sesión.");
    }
  };

  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md space-y-6 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl">
            Organize your tasks with ease
          </h1>
          <p className="text-muted-foreground">
            Sign up for our task management application and take control of your productivity.
          </p>
        </div>
        <Card>
          <CardContent className="space-y-4">
            <form onSubmit={handleSubmit}>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@email.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2 relative">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-9 text-gray-600"
                >
                  {showPassword ? (
                    <EyeOffIcon className="h-5 w-5" />
                  ) : (
                    <EyeIcon className="h-5 w-5" />
                  )}
                </button>
              </div>
              <CardFooter className="mt-4">
                <Button type="submit" className="w-full">
                  Sign In
                </Button>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
        {errorMessage && (
          <div className="text-red-500 text-sm mt-2">{errorMessage}</div>
        )}
        <div className="text-sm text-muted-foreground">
          Don't have an account?{" "}
          <Link href="/pages/signup" className="underline" prefetch={false}>
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
