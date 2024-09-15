"use client"; // Asegura que esto sea un Client Component

import { useState, useEffect } from 'react'
import { useRouter } from "next/navigation"; // Asegúrate de tener el hook de navegación
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid"; // Asegúrate de tener Heroicons instalado

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const userData = {
      email,
      password,
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
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.message || "Error en el servidor");
      }
  
      console.log("Usuario registrado:", data);
  
      // Guardar el token en localStorage
      localStorage.setItem("token", data.token);
  
      if (data.role === "admin") {
        router.push("/pages/admin");
      } else {
        router.push("/pages/user");
      }
  
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
            Organiza tus tareas de forma fácil
          </h1>
          <p className="text-muted-foreground">
            Inicia sesión ahora en TaskSync y controla tu flujo de trabajo de mejor manera
          </p>
        </div>
        <Card>
          <CardContent className="space-y-4">
            <form onSubmit={handleSubmit}>
              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
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
                <Label htmlFor="password">Contraseña</Label>
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
                  Inicia sesión
                </Button>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
        {errorMessage && (
          <div className="text-red-500 text-sm mt-2">{errorMessage}</div>
        )}
        <div className="text-sm text-muted-foreground">
          ¿No tiene una cuenta?{" "}
          <Link href="/pages/signup" className="underline" prefetch={false}>
            Regístrese
          </Link>
        </div>
      </div>
    </div>
  );
}
