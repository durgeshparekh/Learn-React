import { useState } from 'react'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import TodoFilter from './components/TodoFilter'
import TodoStats from './components/TodoStats'
import SearchBar from './components/SearchBar'
import useTodos from './hooks/useTodos'

function App() {
  const {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
    clearCompleted,
    toggleAllTodos,
    getFilteredTodos,
    getSortedTodos,
  } = useTodos();

  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Get filtered todos based on filter and search
  const filteredTodos = getFilteredTodos(filter).filter(todo =>
    todo.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedTodos = getSortedTodos(filteredTodos);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto max-w-7xl py-8 px-4">
        {/* Enhanced Header */}
        <div className="text-center mb-12 animate-slide-up">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4">
            TaskMaster Pro
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            🚀 Supercharge your productivity with our intuitive task management system
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
          {/* Enhanced Left Sidebar */}
          <div className="xl:col-span-4 space-y-8">
            {/* Add Todo Form Card */}
            <div className="card p-8 animate-slide-up">
              <div className="flex items-center mb-8">
                <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl flex items-center justify-center mr-3 shadow-lg">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Create Task</h2>
                  <p className="text-gray-500 text-sm">Add a new item to your list</p>
                </div>
              </div>
              <TodoForm onAdd={addTodo} />
            </div>

            {/* Enhanced Statistics Card */}
            <div className="card p-8 animate-slide-up" style={{animationDelay: '0.1s'}}>
              <div className="flex items-center mb-8">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl flex items-center justify-center mr-3 shadow-lg">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Progress</h2>
                  <p className="text-gray-500 text-sm">Track your achievements</p>
                </div>
              </div>
              <TodoStats todos={todos} />
            </div>

            {/* Enhanced Quick Actions */}
            {todos.length > 0 && (
              <div className="card p-8 animate-slide-up" style={{animationDelay: '0.2s'}}>
                <div className="flex items-center mb-8">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-red-400 rounded-xl flex items-center justify-center mr-3 shadow-lg">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Quick Actions</h2>
                    <p className="text-gray-500 text-sm">Batch operations</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <button
                    onClick={toggleAllTodos}
                    className="w-full btn-primary"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {todos.every(todo => todo.completed) ? 'Mark All Active' : 'Complete All Tasks'}
                  </button>
                  {todos.some(todo => todo.completed) && (
                    <button
                      onClick={clearCompleted}
                      className="w-full btn-danger"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                      Clear Completed
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Enhanced Main Content */}
          <div className="xl:col-span-8">
            <div className="card animate-slide-up" style={{animationDelay: '0.3s'}}>
              {/* Enhanced Header */}
              <div className="p-8 border-b border-gray-100">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-indigo-400 to-blue-500 rounded-xl flex items-center justify-center mr-3 shadow-lg">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">Your Tasks</h2>
                      <p className="text-gray-500">Manage and organize your workflow</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-blue-600">{todos.filter(t => !t.completed).length}</div>
                    <div className="text-sm text-gray-500">of {todos.length} remaining</div>
                  </div>
                </div>

                {/* Enhanced Search Bar */}
                <div className="mb-8">
                  <SearchBar onSearch={setSearchTerm} />
                </div>

                {/* Enhanced Filter Tabs */}
                <TodoFilter 
                  filter={filter}
                  onFilterChange={setFilter}
                  todos={todos}
                />
              </div>

              {/* Todo List */}
              <div className="p-8">
                <div className="max-h-[600px] overflow-y-auto">
                  <TodoList
                    todos={sortedTodos}
                    onToggle={toggleTodo}
                    onDelete={deleteTodo}
                    onEdit={editTodo}
                  />
                </div>

                {/* Enhanced Empty State */}
                {sortedTodos.length === 0 && todos.length > 0 && (
                  <div className="text-center py-16">
                    <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">No tasks found</h3>
                    <p className="text-gray-500 text-lg">Try adjusting your filters or search terms</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Footer */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-gray-500">
            <span>Built with</span>
            <svg className="w-5 h-5 text-red-500 animate-pulse-custom" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
            <span>using React & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
