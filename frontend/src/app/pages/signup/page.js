// app/signup/page.js
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SignUp() {
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
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="John Doe" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="example@email.com" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">
              Sign Up
            </Button>
          </CardFooter>
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
