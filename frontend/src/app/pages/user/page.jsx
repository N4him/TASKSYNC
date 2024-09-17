"use client";
import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import axios from "axios";
import { CheckCircle, Clock } from "lucide-react"

export default function TaskManagementUpdated() {
  const [tasks, setTasks] = useState([]);
  const [userId, setUserId] = useState("123"); // Supongamos que este es el ID del usuario autenticado
  const [editingTask, setEditingTask] = useState(null);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const API_URL = "http://localhost:5000/api/tasks";

  useEffect(() => {
    if (userId) {
      fetchTasks(userId);
    }
  }, [userId]);

  const fetchTasks = async (userId) => {
    try {
      const token = localStorage.getItem("token"); // Obtener el token de localStorage

      const response = await fetch(`http://localhost:5000/api/tasks/user/${userId}`, {
        headers: {
          'Authorization': `Bearer ${token}`, // Incluir el token en los encabezados
        },
      });
      const data = await response.json();

      // Asegurar que data es un array antes de setearlo
      if (Array.isArray(data)) {
        setTasks(data);
      } else {
        setTasks([]); // Default a un array vacío si data no es un array
      }
    } catch (error) {
      console.error("Failed to fetch tasks:", error);
      setTasks([]); // Default a un array vacío en caso de error
    }
  };

  const updateTask = async (updatedTask) => {
    try {
      console.log(updatedTask.id)
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

  const toggleTaskStatus = async (taskId) => {
    const task = tasks.find((task) => task.id === taskId);
    if (!task) return; // Early exit si no se encuentra la tarea
    const updatedTask = {
      ...task,
      status: task.status === "ongoing" ? "finished" : "ongoing",
    };
    await updateTask(updatedTask);
  };

  return (
    <div className="min-h-screen bg-[#0A1A2B]">
      {/* Resto del código */}
      <main className="p-8">
        <Card className="max-w-4xl mx-auto bg-[#0E2337] border-[#1E3A5A]">
          <CardContent className="p-6">
            <h1 className="text-3xl font-bold mb-6 text-center text-[#4FADFF]">Task Management</h1>
            
            <Tabs defaultValue="ongoing" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-4 bg-[#1E3A5A]">
                <TabsTrigger
                  value="ongoing"
                  className="data-[state=active]:bg-[#2E4A6A] data-[state=active]:text-[#4FADFF]">
                  Ongoing Tasks
                </TabsTrigger>
                <TabsTrigger
                  value="finished"
                  className="data-[state=active]:bg-[#2E4A6A] data-[state=active]:text-[#4FADFF]">
                  Finished Tasks
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="ongoing">
                <TaskList
                  tasks={tasks.filter(task => task.status === "ongoing")}
                  updateTaskStatus={toggleTaskStatus} />
              </TabsContent>
              
              <TabsContent value="finished">
                <TaskList
                  tasks={tasks.filter(task => task.status === "finished")}
                  updateTaskStatus={toggleTaskStatus} />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

function TaskList({ tasks, updateTaskStatus }) {
  return (
    <ul className="space-y-4">
      {tasks.map(task => (
        <li
          key={task.id}
          className="flex items-center justify-between bg-white p-4 rounded-lg">
          <div className="flex items-center space-x-3">
            {task.status === "ongoing" ? (
              <Clock className="text-[#4FADFF]" />
            ) : (
              <CheckCircle className="text-[#4FADFF]" />
            )}
            <span className="text-black">{task.title}</span>
          </div>
          <div>
            <Button
              size="sm"
              onClick={() => updateTaskStatus(task.id)}
              className="bg-[#4FADFF] text-white hover:bg-[#3D8CD9]">
              {task.status === "ongoing" ? "Mark as Finished" : "Set On Course"}
            </Button>
          </div>
        </li>
      ))}
      {tasks.length === 0 && (
        <p className="text-center text-gray-400">No tasks in this category.</p>
      )}
    </ul>
  );
}
