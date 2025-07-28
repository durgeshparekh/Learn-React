import { useState, useEffect } from 'react';

const useTodos = () => {
    const [todos, setTodos] = useState([]);

    // Load todos from localStorage on hook initialization
    useEffect(() => {
        const savedTodos = localStorage.getItem('todos');
        if (savedTodos) {
            try {
                const parsedTodos = JSON.parse(savedTodos);
                setTodos(parsedTodos);
            } catch (error) {
                console.error('Error parsing saved todos:', error);
            }
        }
    }, []);

    // Save todos to localStorage whenever todos change
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    // Add a new todo
    const addTodo = (todoData) => {
        const newTodo = {
            ...todoData,
            id: Date.now() + Math.random(),
            createdAt: new Date().toISOString(),
            completed: false
        };
        setTodos(prevTodos => [newTodo, ...prevTodos]);
    };

    // Toggle todo completion
    const toggleTodo = (id) => {
        setTodos(prevTodos =>
            prevTodos.map(todo =>
                todo.id === id
                    ? { ...todo, completed: !todo.completed, completedAt: !todo.completed ? new Date().toISOString() : null }
                    : todo
            )
        );
    };

    // Delete a todo
    const deleteTodo = (id) => {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    };

    // Edit a todo
    const editTodo = (id, newText) => {
        setTodos(prevTodos =>
            prevTodos.map(todo =>
                todo.id === id
                    ? { ...todo, text: newText, updatedAt: new Date().toISOString() }
                    : todo
            )
        );
    };

    // Clear all completed todos
    const clearCompleted = () => {
        setTodos(prevTodos => prevTodos.filter(todo => !todo.completed));
    };

    // Mark all todos as completed or active
    const toggleAllTodos = () => {
        const allCompleted = todos.every(todo => todo.completed);
        const timestamp = new Date().toISOString();

        setTodos(prevTodos =>
            prevTodos.map(todo => ({
                ...todo,
                completed: !allCompleted,
                completedAt: !allCompleted ? timestamp : null
            }))
        );
    };

    // Get filtered todos
    const getFilteredTodos = (filter) => {
        return todos.filter(todo => {
            switch (filter) {
                case 'active':
                    return !todo.completed;
                case 'completed':
                    return todo.completed;
                default:
                    return true;
            }
        });
    };

    // Get sorted todos
    const getSortedTodos = (filteredTodos) => {
        return [...filteredTodos].sort((a, b) => {
            // Completed todos go to bottom
            if (a.completed !== b.completed) {
                return a.completed ? 1 : -1;
            }

            // Sort by priority (high > medium > low)
            const priorityOrder = { high: 3, medium: 2, low: 1 };
            const priorityDiff = priorityOrder[b.priority] - priorityOrder[a.priority];

            if (priorityDiff !== 0) {
                return priorityDiff;
            }

            // If same priority, sort by creation date (newest first)
            return new Date(b.createdAt) - new Date(a.createdAt);
        });
    };

    // Get todo statistics
    const getStats = () => {
        const total = todos.length;
        const completed = todos.filter(todo => todo.completed).length;
        const active = total - completed;
        const completionRate = total > 0 ? Math.round((completed / total) * 100) : 0;

        return { total, completed, active, completionRate };
    };

    return {
        todos,
        addTodo,
        toggleTodo,
        deleteTodo,
        editTodo,
        clearCompleted,
        toggleAllTodos,
        getFilteredTodos,
        getSortedTodos,
        getStats
    };
};

export default useTodos;
