"use client";

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import axios from "axios";
import { CheckCircle, Clock } from "lucide-react"
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";


export default function TaskManagementUpdated() {
  const [tasks, setTasks] = useState([]);
  const [userId, setUserId] = useState("123"); // Supongamos que este es el ID del usuario autenticado
  const [editingTask, setEditingTask] = useState(null);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const API_URL = "http://localhost:5000/api/tasks";
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [newCategory, setNewCategory] = useState("");
  const [editingCategory, setEditingCategory] = useState(null);
  const [editingCategoryName, setEditingCategoryName] = useState("");


  useEffect(() => {
    if (userId) {
      fetchTasksID(userId);
    }
  }, [userId]);
  
  
  useEffect(() => {
    fetchTasks();
    fetchCategories();
  }, [selectedCategory]);


  const fetchTasksID = async (userId) => {
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
  
  const fetchTasks = async () => {
    const response = await fetch(`http://localhost:5000/api/tasks?category=${selectedCategory !== 'All' ? selectedCategory : ''}`);
    const data = await response.json();
    setTasks(data);
  };

  const fetchCategories = async () => {
    const response = await fetch('http://localhost:5000/api/categories');
    const data = await response.json();
    setCategories(['All', ...data.map(category => category.name)]);
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


  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleCreateCategory = async () => {
    if (!newCategory) return;
    const response = await fetch('http://localhost:5000/api/categories', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: newCategory })
    });
    if (response.ok) {
      setNewCategory("");
      fetchCategories();
    }
  };

  const handleEditCategory = async () => {
    if (!editingCategoryName || !editingCategory) return;
    const response = await fetch(`http://localhost:5000/api/categories/${editingCategory}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: editingCategoryName })
    });
    if (response.ok) {
      setEditingCategory(null);
      setEditingCategoryName("");
      fetchCategories();
    }
  };

  const handleUpdateTaskCategory = async (taskId, newCategory) => {
    const response = await fetch(`http://localhost:5000/api/tasks/${taskId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ category: newCategory })
    });
    if (response.ok) {
      fetchTasks(); // Refrescar la lista de tareas después de la actualización
    }

  };

  return (
    <div className="min-h-screen bg-[#0A1A2B]">

      <nav className="bg-[#0E2337] p-4 flex justify-between items-center">
        <span className="text-white font-semibold text-lg">TaskMaster</span>
      </nav>
      <main className="p-8">
        <Card className="max-w-4xl mx-auto bg-[#0E2337] border-[#1E3A5A]">
          <CardContent className="p-6">
            <h1 className="text-3xl font-bold mb-6 text-center text-[#4FADFF]">Task Management</h1>

            <div className="mb-4">
              <label htmlFor="category" className="text-white">Filter by Category:</label>
              <select
                id="category"
                value={selectedCategory}
                onChange={(e) => handleCategoryChange(e.target.value)}
                className="ml-2 p-2 bg-white rounded"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="new-category" className="text-white">Create New Category:</label>
              <div className="flex space-x-2">
                <Input
                  id="new-category"
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  className="p-2 bg-white rounded"
                />
                <Button onClick={handleCreateCategory} className="bg-[#4FADFF] text-white">Create</Button>
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="edit-category" className="text-white">Edit Category:</label>
              <div className="flex space-x-2">
                <select
                  id="edit-category"
                  value={editingCategory}
                  onChange={(e) => setEditingCategory(e.target.value)}
                  className="ml-2 p-2 bg-white rounded"
                >
                  {categories.filter(category => category !== 'All').map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                <Input
                  value={editingCategoryName}
                  onChange={(e) => setEditingCategoryName(e.target.value)}
                  placeholder="New name"
                  className="p-2 bg-white rounded"
                />
                <Button onClick={handleEditCategory} className="bg-[#4FADFF] text-white">Edit</Button>
              </div>
            </div>

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
                  categories={categories}
                  onUpdateTaskCategory={handleUpdateTaskCategory}
                />
              </TabsContent>

              <TabsContent value="finished">
                <TaskList
                  tasks={tasks.filter(task => task.status === "finished")}
                  categories={categories}
                  onUpdateTaskCategory={handleUpdateTaskCategory}
                />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

function TaskList({ tasks, categories, onUpdateTaskCategory }) {
  return (
    <ul className="space-y-4">
      {tasks.map(task => (
        <li key={task.id} className="flex items-center justify-between bg-white p-4 rounded-lg">
          <div className="flex items-center space-x-3">
            <span className="text-black">{task.title}</span>

          
          <div>
            <Button
              size="sm"
              onClick={() => updateTaskStatus(task.id)}
              className="bg-[#4FADFF] text-white hover:bg-[#3D8CD9]">
              {task.status === "ongoing" ? "Mark as Finished" : "Set On Course"}
            </Button>
      </div>
            <select
              value={task.category}
              onChange={(e) => onUpdateTaskCategory(task.id, e.target.value)}
              className="ml-2 p-2 bg-white rounded"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </li>
      ))}
      {tasks.length === 0 && (
        <p className="text-center text-gray-400">No tasks in this category.</p>
      )}
    </ul>
  );
}
