"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Pencil, Trash2, Plus, User, LogOut, Settings, HelpCircle } from "lucide-react";

const API_URL = "http://localhost:5000/api/tasks";
const USERS_URL = "http://localhost:5000/api/users";


export default function AdminPageUpdated() {
  const [tasks, setTasks] = useState([]);
  const [users, setUsers] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
const formatDateForInput = (dateString) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  // Convert to local time zone and format as "YYYY-MM-DDTHH:MM"
  const offset = date.getTimezoneOffset();
  date.setMinutes(date.getMinutes() - offset);
  return date.toISOString().slice(0, 16);
};

const formatDateForDisplay = (dateString) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  // Convert to local time zone and format as locale-specific date/time
  return date.toLocaleString();
};
export default function AdminPageUpdated() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(API_URL, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setTasks(response.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(USERS_URL, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUsers(response.data.filter(user => user.role === 'user')); // Filtrar solo los usuarios con rol 'user'
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchTasks();
    fetchUsers();
  }, []);
const addTask = async () => {
  if (newTaskTitle.trim() !== "") {
    try {
      const token = localStorage.getItem("token"); // Obtener el token para la autenticación

      const newTask = {
        title: newTaskTitle,
        status: "ongoing",
        assignedTo: selectedUser ? selectedUser._id : null, // Enviar el ID del usuario seleccionado
        deadline: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString() // Fecha límite por defecto (mañana)
      };

      const response = await fetch('http://localhost:5000/api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Autenticación con token
        },
        body: JSON.stringify(newTask),
      });

      if (response.ok) {
        const createdTask = await response.json(); // Obtener la tarea creada
        setTasks([...tasks, createdTask]); // Actualizar la lista de tareas
      }
    } catch (error) {
      console.error("Error adding task:", error);
    }
  }
};

        setNewTaskTitle("");
        setSelectedUser(null); // Limpiar el usuario seleccionado
      } catch (error) {
        console.error("Error adding task:", error);
      }
    }
  };

  const updateTask = async (updatedTask) => {
    try {
      const token = localStorage.getItem("token");
      await axios.patch(`${API_URL}/${updatedTask.id}`, updatedTask, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
      setEditingTask(null);
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`${API_URL}/${taskId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTasks(tasks.filter(task => task.id !== taskId));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const toggleTaskStatus = async (taskId) => {
    const task = tasks.find(task => task.id === taskId);
    const updatedStatus = task.status === "ongoing" ? "finished" : "ongoing";

    try {
      const token = localStorage.getItem("token");
      await axios.patch(`${API_URL}/${taskId}`, { status: updatedStatus }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTasks(tasks.map(task => task.id === taskId ? { ...task, status: updatedStatus } : task));
    } catch (error) {
      console.error("Error toggling task status:", error);
    }
    updateTask(updatedTask);
  }

  };

  const findUserNameById = (id) => {
    const user = users.find(user => user._id === id);
    return user ? user.name : "Not Assigned";
  };
  


  return (
    <div className="min-h-screen bg-[#0A1A2B] text-white">
      <nav className="bg-[#0E2337] p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <svg className="text-[#4FADFF]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
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
                <img src="/placeholder.svg?height=32&width=32" alt="Profile" className="rounded-full" />
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
      <main className="p-6">
        <Card>
          <CardContent>
            <div className="mb-4">
              <div className="flex items-center space-x-2">
                <Input
                  type="text"
                  placeholder="New Task Title"
                  value={newTaskTitle}
                  onChange={(e) => setNewTaskTitle(e.target.value)}
                  className="flex-1"
                />
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button className="bg-[#4FADFF] text-white hover:bg-[#3D8CD9]">
                      {selectedUser ? selectedUser.name : 'Assign User'}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    {users.map(user => (
                      <DropdownMenuItem
                        key={user._id}
                        onClick={() => setSelectedUser(user)}
                      >
                        <span>{user.name}</span>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button
                  onClick={addTask}
                  className="bg-[#4FADFF] text-white hover:bg-[#3D8CD9]"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-white">ID</TableHead>
                  <TableHead className="text-white">Title</TableHead>
                  <TableHead className="text-white">Description</TableHead>
                  <TableHead className="text-white">Deadline</TableHead>
                  <TableHead className="text-white">Status</TableHead>
                  <TableHead className="text-white">Assigned To</TableHead>
                  <TableHead className="text-white">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tasks.map(task => (
                  <TableRow key={task.id}>               

                    <TableCell className="text-white">{task.id}</TableCell>
                    <TableCell className="text-white">{task.title}</TableCell>
                    <TableCell>{task.description}</TableCell>
                    <TableCell className="text-white">{formatDateForDisplay(task.deadline)}</TableCell>

                    <TableCell>
                      <Button onClick={() => toggleTaskStatus(task.id)} className="bg-[#4FADFF] text-white hover:bg-[#3D8CD9]">
                        {task.status === "ongoing" ? "Mark as Done" : "Mark as Ongoing"}
                      </Button>
                    </TableCell>
                    <TableCell>
                    {task.assignedTo ? findUserNameById(task.assignedTo) : "Not Assigned"}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button onClick={() => setEditingTask(task)} className="bg-[#4FADFF] text-white hover:bg-[#3D8CD9]">
                              <Pencil className="h-4 w-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Edit Task</DialogTitle>
                            </DialogHeader>
                            <div className="mb-4">
                              <Label htmlFor="title" className="text-white">Title</Label>
                              <Input
                                id="title"
                                type="text"
                                value={editingTask?.title || ''}
                                onChange={(e) => setEditingTask({ ...editingTask, title: e.target.value })}
                              />
                            </div>
                            <div className="mb-4">
                              <Label htmlFor="description" className="text-white">Description</Label>
                              <Input
                                id="task-title"
                                value={editingTask?.title || ""}
                                onChange={(e) =>
                                  setEditingTask(editingTask ? { ...editingTask, title: e.target.value } : null)
                                }
                                className="col-span-3" />
                               <Input
id="description"
                                type="text"
                                value={editingTask?.description || ''}
                                onChange={(e) => setEditingTask({ ...editingTask, description: e.target.value })}
                              />

                                
                            </div>
                            <div className="mb-4">
                              <Label htmlFor="assignedTo" className="text-white">Assign To</Label>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button className="bg-[#4FADFF] text-white hover:bg-[#3D8CD9]">
                                    {editingTask?.assignedTo ? editingTask.assignedTo.name : 'Select User'}
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-56">
                                  {users.map(user => (
                                    <DropdownMenuItem
                                      key={user._id}
                                      onClick={() => setEditingTask({ ...editingTask, assignedTo: user })}
                                    >
                                      <span>{user.name}</span>
                                    </DropdownMenuItem>
                                  ))}
                                </DropdownMenuContent>
                              </DropdownMenu>

                                
                              <Label htmlFor="task-deadline" className="text-right mt-4">
                                Deadline
                              </Label>
                              <Input
                                id="task-deadline"
                                type="datetime-local"
                                value={editingTask?.deadline
                                  ? formatDateForInput(editingTask.deadline) // Use formatting function for input
                                  : ""}
                                onChange={(e) =>
                                  setEditingTask(editingTask ? { ...editingTask, deadline: e.target.value } : null)
                                }
                                className="col-span-3" />

                            </div>
                            <DialogFooter>
                              <Button
                                onClick={() => updateTask(editingTask)}
                                className="bg-[#4FADFF] text-white hover:bg-[#3D8CD9]"
                              >
                                Save Changes
                              </Button>
                              <Button
                                onClick={() => setEditingTask(null)}
                                className="bg-[#FF4F4F] text-white hover:bg-[#D94343]"
                              >
                                Cancel
                              </Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                        <Button onClick={() => deleteTask(task.id)} className="bg-[#FF4F4F] text-white hover:bg-[#D94343]">
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
    </div>
  );
}

