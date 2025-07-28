import React, { useState } from 'react';
import './App.css';

function App() {
    // State to keep track of the counter value
    const [counter, setCounter] = useState(0);
    // State to keep track of messages
    const [message, setMessage] = useState('');
    // State for animations
    const [isAnimating, setIsAnimating] = useState(false);
    // State for confetti effect
    const [showConfetti, setShowConfetti] = useState(false);

    // Function to trigger animation
    const triggerAnimation = () => {
        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), 300);
    };

    // Function to show confetti
    const triggerConfetti = () => {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 1000);
    };

    // Function to increment the counter
    const addValue = () => {
        if (counter >= 20) {
            setMessage('🚫 Maximum value reached! Cannot go above 20.');
            setTimeout(() => setMessage(''), 3000);
        } else {
            setCounter(counter + 1);
            setMessage('');
            triggerAnimation();
            if (counter + 1 === 10 || counter + 1 === 20) {
                triggerConfetti();
                setMessage(counter + 1 === 10 ? '🎉 Halfway there!' : '🏆 Maximum reached!');
                setTimeout(() => setMessage(''), 2000);
            }
        }
    };

    // Function to decrement the counter
    const removeValue = () => {
        if (counter <= 0) {
            setMessage('🚫 Minimum value reached! Cannot go below 0.');
            setTimeout(() => setMessage(''), 3000);
        } else {
            setCounter(counter - 1);
            setMessage('');
            triggerAnimation();
        }
    };

    // Function to reset counter
    const resetCounter = () => {
        setCounter(0);
        setMessage('✨ Counter reset successfully!');
        setTimeout(() => setMessage(''), 2000);
        triggerAnimation();
    };

    // Function to set counter to 10 (quick action)
    const setToTen = () => {
        setCounter(10);
        setMessage('⚡ Quick jump to 10!');
        setTimeout(() => setMessage(''), 2000);
        triggerAnimation();
    };

    // Get progress percentage
    const getProgress = () => {
        return (counter / 20) * 100;
    };

    // Get counter color based on value
    const getCounterColor = () => {
        if (counter === 0) return 'text-gray-500';
        if (counter <= 5) return 'text-blue-500';
        if (counter <= 10) return 'text-green-500';
        if (counter <= 15) return 'text-yellow-500';
        return 'text-red-500';
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-4 -right-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
                <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
            </div>

            {/* Confetti Effect */}
            {showConfetti && (
                <div className="fixed inset-0 pointer-events-none z-50">
                    {[...Array(50)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute animate-confetti"
                            style={{
                                left: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 3}s`,
                                backgroundColor: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#6c5ce7'][Math.floor(Math.random() * 5)]
                            }}
                        ></div>
                    ))}
                </div>
            )}

            <div className="container mx-auto max-w-4xl py-8 px-4 relative z-10">
                {/* Enhanced Header */}
                <div className="text-center mb-12 animate-slide-up">
                    <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl shadow-lg">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3.5M3 16.5h18" />
                        </svg>
                    </div>
                    <h1 className="text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4">
                        Counter Pro
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        🚀 A beautiful and interactive counter experience with animations and limits
                    </p>
                </div>

                {/* Main Counter Card */}
                <div className="card max-w-2xl mx-auto p-8 mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                    {/* Progress Bar */}
                    <div className="mb-8">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-gray-700">Progress</span>
                            <span className="text-sm font-medium text-gray-700">{counter}/20</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                            <div
                                className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-500 ease-out"
                                style={{ width: `${getProgress()}%` }}
                            ></div>
                        </div>
                    </div>

                    {/* Counter Display */}
                    <div className="text-center mb-8">
                        <div className={`text-8xl font-bold mb-4 transition-all duration-300 ${getCounterColor()} ${isAnimating ? 'scale-110 rotate-12' : 'scale-100 rotate-0'}`}>
                            {counter}
                        </div>
                        <div className="text-lg text-gray-600">
                            Current Value
                        </div>
                    </div>

                    {/* Message Display */}
                    {message && (
                        <div className={`text-center mb-6 p-4 rounded-xl font-medium transition-all duration-300 ${message.includes('🚫')
                                ? 'bg-red-100 text-red-800 border border-red-200'
                                : 'bg-green-100 text-green-800 border border-green-200'
                            }`}>
                            {message}
                        </div>
                    )}

                    {/* Control Buttons */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <button
                            className="btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                            onClick={removeValue}
                            disabled={counter <= 0}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                            </svg>
                            Decrease
                        </button>
                        <button
                            className="btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                            onClick={addValue}
                            disabled={counter >= 20}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                            Increase
                        </button>
                    </div>

                    {/* Quick Actions */}
                    <div className="grid grid-cols-2 gap-4">
                        <button
                            className="btn-secondary py-3"
                            onClick={resetCounter}
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                            Reset
                        </button>
                        <button
                            className="btn-secondary py-3"
                            onClick={setToTen}
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            Set to 10
                        </button>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="stat-card animate-slide-up" style={{ animationDelay: '0.2s' }}>
                        <div className="text-3xl font-bold text-blue-600 mb-2">{counter}</div>
                        <div className="text-gray-600 font-medium">Current Value</div>
                    </div>
                    <div className="stat-card animate-slide-up" style={{ animationDelay: '0.3s' }}>
                        <div className="text-3xl font-bold text-green-600 mb-2">{20 - counter}</div>
                        <div className="text-gray-600 font-medium">Remaining</div>
                    </div>
                    <div className="stat-card animate-slide-up" style={{ animationDelay: '0.4s' }}>
                        <div className="text-3xl font-bold text-purple-600 mb-2">{Math.round(getProgress())}%</div>
                        <div className="text-gray-600 font-medium">Progress</div>
                    </div>
                </div>

                {/* Info Card */}
                <div className="card p-6 text-center animate-slide-up" style={{ animationDelay: '0.5s' }}>
                    <div className="text-gray-600">
                        <p className="mb-2">🎯 <strong>Range:</strong> 0 to 20</p>
                        <p className="mb-2">🎉 <strong>Special milestones:</strong> 10 (Halfway) & 20 (Maximum)</p>
                        <p>💡 <strong>Tip:</strong> Use quick actions for faster navigation</p>
                    </div>
                </div>

                {/* Enhanced Footer */}
                <div className="text-center mt-12">
                    <div className="inline-flex items-center space-x-2 text-gray-500">
                        <span>Built with</span>
                        <svg className="w-5 h-5 text-red-500 animate-pulse-custom" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                        </svg>
                        <span>using React & Modern CSS</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
