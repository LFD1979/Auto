import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { AuthProvider } from './contexts/AuthContext'
import { SupabaseProvider } from './contexts/SupabaseContext'
import ProtectedRoute from './components/ProtectedRoute'
import Layout from './components/Layout'
import Home from './pages/Home'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Contracts from './pages/Contracts'
import Editor from './pages/Editor'
import Admin from './pages/Admin'
import SuperAdmin from './pages/SuperAdmin'
import Integrations from './pages/Integrations'
import TestPage from './pages/TestPage'
import './App.css'

function App() {
  return (
    <SupabaseProvider>
      <AuthProvider>
        <Router>
          <div className="App">
            <Routes>
              {/* Public routes */}
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/teste" element={<TestPage />} />
              
              {/* Protected routes */}
              <Route path="/dashboard" element={
                <ProtectedRoute>
                  <Layout>
                    <Dashboard />
                  </Layout>
                </ProtectedRoute>
              } />
              
              <Route path="/contratos" element={
                <ProtectedRoute>
                  <Layout>
                    <Contracts />
                  </Layout>
                </ProtectedRoute>
              } />
              
              <Route path="/editor" element={
                <ProtectedRoute>
                  <Layout>
                    <Editor />
                  </Layout>
                </ProtectedRoute>
              } />
              
              <Route path="/admin" element={
                <ProtectedRoute requiredRole="ADMIN">
                  <Layout>
                    <Admin />
                  </Layout>
                </ProtectedRoute>
              } />
              
              <Route path="/super-admin" element={
                <ProtectedRoute requiredRole="SUPER_ADMIN">
                  <Layout>
                    <SuperAdmin />
                  </Layout>
                </ProtectedRoute>
              } />
              
              <Route path="/integrations" element={
                <ProtectedRoute requiredRole="ADMIN">
                  <Layout>
                    <Integrations />
                  </Layout>
                </ProtectedRoute>
              } />
              
              {/* Redirect unknown routes to home */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            <Toaster position="top-right" />
          </div>
        </Router>
      </AuthProvider>
    </SupabaseProvider>
  )
}

export default App