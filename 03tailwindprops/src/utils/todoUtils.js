// Utility functions for the Todo App

// Generate a unique ID for todos
export const generateId = () => {
    return Date.now() + Math.random();
};

// Format date for display
export const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
};

// Get priority color classes
export const getPriorityColors = (priority) => {
    const colors = {
        high: {
            bg: 'bg-red-100',
            text: 'text-red-800',
            border: 'border-red-500'
        },
        medium: {
            bg: 'bg-yellow-100',
            text: 'text-yellow-800',
            border: 'border-yellow-500'
        },
        low: {
            bg: 'bg-green-100',
            text: 'text-green-800',
            border: 'border-green-500'
        }
    };

    return colors[priority] || colors.low;
};

// Validate todo text
export const validateTodoText = (text) => {
    if (!text || typeof text !== 'string') {
        return { isValid: false, error: 'Todo text is required' };
    }

    const trimmedText = text.trim();

    if (trimmedText.length === 0) {
        return { isValid: false, error: 'Todo text cannot be empty' };
    }

    if (trimmedText.length > 200) {
        return { isValid: false, error: 'Todo text must be less than 200 characters' };
    }

    return { isValid: true, text: trimmedText };
};

// Local storage helpers
export const storage = {
    save: (key, data) => {
        try {
            localStorage.setItem(key, JSON.stringify(data));
            return true;
        } catch (error) {
            console.error('Error saving to localStorage:', error);
            return false;
        }
    },

    load: (key) => {
        try {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : null;
        } catch (error) {
            console.error('Error loading from localStorage:', error);
            return null;
        }
    },

    remove: (key) => {
        try {
            localStorage.removeItem(key);
            return true;
        } catch (error) {
            console.error('Error removing from localStorage:', error);
            return false;
        }
    }
};

// Calculate completion statistics
export const calculateStats = (todos) => {
    const total = todos.length;
    const completed = todos.filter(todo => todo.completed).length;
    const active = total - completed;
    const completionRate = total > 0 ? Math.round((completed / total) * 100) : 0;

    // Calculate priority distribution
    const priorityStats = todos.reduce((acc, todo) => {
        acc[todo.priority] = (acc[todo.priority] || 0) + 1;
        return acc;
    }, {});

    return {
        total,
        completed,
        active,
        completionRate,
        priorityStats
    };
};

// Sort todos by various criteria
export const sortTodos = (todos, sortBy = 'priority') => {
    return [...todos].sort((a, b) => {
        // Always put completed todos at the bottom
        if (a.completed !== b.completed) {
            return a.completed ? 1 : -1;
        }

        switch (sortBy) {
            case 'priority': {
                const priorityOrder = { high: 3, medium: 2, low: 1 };
                const priorityDiff = priorityOrder[b.priority] - priorityOrder[a.priority];
                if (priorityDiff !== 0) return priorityDiff;
                // Fall through to date if same priority
            }

            case 'date':
                return new Date(b.createdAt) - new Date(a.createdAt);

            case 'alphabetical':
                return a.text.localeCompare(b.text);

            default:
                return 0;
        }
    });
};

// Filter todos
export const filterTodos = (todos, filter) => {
    switch (filter) {
        case 'active':
            return todos.filter(todo => !todo.completed);
        case 'completed':
            return todos.filter(todo => todo.completed);
        case 'high':
            return todos.filter(todo => todo.priority === 'high');
        case 'medium':
            return todos.filter(todo => todo.priority === 'medium');
        case 'low':
            return todos.filter(todo => todo.priority === 'low');
        default:
            return todos;
    }
};

// Debounce function for search
export const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};
