"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user"); // Estado para el rol
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const router = useRouter();

  // Simulación: Obtener el rol del usuario actual
  const currentUserRole = "admin"; // Supón que esta lógica verifica si el usuario actual es admin

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(role);
    try {
      const response = await fetch("http://localhost:5000/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, role }),
      });

      const data = await response.json();
      console.log(data);
      
      if (!response.ok) {
        throw new Error(data.message || "Error al registrar");
      }

      setSuccess("Usuario registrado con éxito");
      setError(null);
      console.log(role);
      // Redirigir según el rol del usuario registrado
      if (role == "admin") {
        router.push("/pages/login");
      } else {
        router.push("/pages/login");
      }
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
            Organiza tus tareas de forma fácil 
          </h1>
          <p className="text-muted-foreground">
            Regístrate ahora en TaskSync y controla tu flujo de trabajo de mejor manera
          </p>
        </div>
        <Card>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
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
                <Label htmlFor="password">Contraseña</Label>
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

              {/* Mostrar selección de rol si el usuario actual es admin */}
              {currentUserRole === "admin" && (
                <div className="space-y-2">
                  <Label htmlFor="role">Rol</Label>
                  <select
                    id="role"
                    value={role}
                    onChange={(e) => setRole(e.target.value.toLowerCase())}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" // Aplica estilos adecuados a tu select
                  >
                    <option value="user">Usuario</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
              )}
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full mt-4">
                Registrarse
              </Button>
            </CardFooter>
          </form>
          {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-green-500">{success}</p>}
        </Card>
        <div className="text-sm text-muted-foreground">
          ¿Ya tiene una cuenta?{" "}
          <Link href="/pages/login" className="underline" prefetch={false}>
            Inicie sesión
          </Link>
        </div>
      </div>
    </div>
  );
}
