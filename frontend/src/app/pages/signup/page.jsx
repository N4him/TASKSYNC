"use client"; // Agrega esta línea al principio del archivo
import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card"; // Verifica esta ruta
import { Label } from "@/components/ui/label"; // Verifica esta ruta
import { Input } from "@/components/ui/input"; // Verifica esta ruta
import { Button } from "@/components/ui/button"; // Verifica esta ruta
import Link from "next/link";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid"; // Asegúrate de tener Heroicons instalado

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // Estado para controlar visibilidad de la contraseña
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/users/register", {
        // Cambia la URL según sea necesario
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Error al registrar");
      }

      setSuccess("Usuario registrado con éxito");
      setError(null);
    } catch (err) {
      setError(err.message);
      setSuccess(null);
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
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@email.com"
                  required
                />
              </div>
              <div className="space-y-2 relative">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
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
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full mt-4">
                Sign Up
              </Button>
            </CardFooter>
          </form>
          {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-green-500">{success}</p>}
        </Card>
        <div className="text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link href="/pages/login" className="underline" prefetch={false}>
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}
