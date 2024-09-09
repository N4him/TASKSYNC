"use client";
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Pencil, Trash2, Plus, User, LogOut, Settings, HelpCircle } from "lucide-react"

export default function AdminPageUpdated() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Complete project proposal", status: "ongoing" },
    { id: 2, title: "Review code changes", status: "ongoing" },
    { id: 3, title: "Update documentation", status: "finished" },
    { id: 4, title: "Prepare presentation", status: "ongoing" },
    { id: 5, title: "Submit expense report", status: "finished" },
  ])
  const [editingTask, setEditingTask] = useState(null)
  const [newTaskTitle, setNewTaskTitle] = useState("")

  const addTask = () => {
    if (newTaskTitle.trim() !== "") {
      const newTask = {
        id: Math.max(0, ...tasks.map((t) => t.id)) + 1,
        title: newTaskTitle,
        status: "ongoing",
      }
      setTasks([...tasks, newTask])
      setNewTaskTitle("")
    }
  }

  const updateTask = (updatedTask) => {
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)))
    setEditingTask(null)
  }

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId))
  }

  const toggleTaskStatus = (taskId) => {
    setTasks(tasks.map((task) =>
      task.id === taskId
        ? { ...task, status: task.status === "ongoing" ? "finished" : "ongoing" }
        : task))
  }

  return (
    (<div className="min-h-screen bg-[#0A1A2B] text-white">
      <nav className="bg-[#0E2337] p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <svg
            className="text-[#4FADFF]"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
            <line x1="4" x2="4" y1="22" y2="15" />
          </svg>
          <span className="text-white font-semibold text-lg">TaskMaster Admin</span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-white">Admin User</span>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative w-8 h-8 rounded-full">
                <img
                  src="/placeholder.svg?height=32&width=32"
                  alt="Profile"
                  className="rounded-full" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">Admin User</p>
                  <p className="text-xs leading-none text-muted-foreground">admin@example.com</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <HelpCircle className="mr-2 h-4 w-4" />
                <span>Help</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
      <main className="p-8">
        <Card className="max-w-4xl mx-auto bg-[#0E2337] border-[#1E3A5A]">
          <CardContent className="p-6">
            <h1 className="text-3xl font-bold mb-6 text-center text-[#4FADFF]">Task Management - Admin</h1>

            <div className="mb-6 flex items-center space-x-4">
              <Input
                type="text"
                placeholder="New task title"
                value={newTaskTitle}
                onChange={(e) => setNewTaskTitle(e.target.value)}
                className="flex-grow" />
              <Button onClick={addTask} className="bg-[#4FADFF] text-white hover:bg-[#3D8CD9]">
                <Plus className="mr-2 h-4 w-4" /> Add Task
              </Button>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-white">ID</TableHead>
                  <TableHead className="text-white">Title</TableHead>
                  <TableHead className="text-white">Status</TableHead>
                  <TableHead className="text-white">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tasks.map((task) => (
                  <TableRow key={task.id}>
                    <TableCell className="text-white">{task.id}</TableCell>
                    <TableCell className="text-white">{task.title}</TableCell>
                    <TableCell>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => toggleTaskStatus(task.id)}
                        className={
                          task.status === "ongoing"
                            ? "bg-yellow-500 text-white hover:bg-yellow-600"
                            : "bg-green-500 text-white hover:bg-green-600"
                        }>
                        {task.status === "ongoing" ? "Ongoing" : "Finished"}
                      </Button>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => setEditingTask(task)}
                              className="bg-[#4FADFF] text-white hover:bg-[#3D8CD9]">
                              <Pencil className="h-4 w-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="bg-[#0E2337] text-white">
                            <DialogHeader>
                              <DialogTitle>Edit Task</DialogTitle>
                            </DialogHeader>
                            <div className="py-4">
                              <Label htmlFor="task-title" className="text-right">
                                Task Title
                              </Label>
                              <Input
                                id="task-title"
                                value={editingTask?.title || ""}
                                onChange={(e) =>
                                  setEditingTask(editingTask ? { ...editingTask, title: e.target.value } : null)
                                }
                                className="col-span-3" />
                            </div>
                            <DialogFooter>
                              <Button
                                type="submit"
                                onClick={() => editingTask && updateTask(editingTask)}
                                className="bg-[#4FADFF] text-white hover:bg-[#3D8CD9]">
                                Save Changes
                              </Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => deleteTask(task.id)}
                          className="bg-red-500 text-white hover:bg-red-600">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>)
  );
}