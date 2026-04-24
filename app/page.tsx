"use client";
import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";

// Konfigurasi otomatis dari file yang digenerate Amplify
Amplify.configure(outputs);

const client = generateClient<Schema>();

export default function Home() {
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

  function listTodos() {
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
  }

  useEffect(() => {
    listTodos();
  }, []);

  function createTodo() {
    const content = window.prompt("Tugas baru?");
    if(content) client.models.Todo.create({ content, isDone: false });
  }

  return (
    <div className="min-h-screen bg-stone-50 p-10">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-orange-600">Amplify Todo List</h1>
        <button onClick={createTodo} className="bg-stone-800 text-white px-4 py-2 rounded mb-6">+ Tambah Tugas</button>
        <ul className="space-y-2">
          {todos.map((todo) => (
            <li key={todo.id} className="p-3 bg-stone-100 rounded border border-stone-200">{todo.content}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}