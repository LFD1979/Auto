import React, { useState } from 'react'
import { Users, Settings, FileText, BarChart3 } from 'lucide-react'

const Admin: React.FC = () => {
  const [activeTab, setActiveTab] = useState('users')

  const tabs = [
    { id: 'users', name: 'Usuários', icon: Users },
    { id: 'templates', name: 'Templates', icon: FileText },
    { id: 'settings', name: 'Configurações', icon: Settings },
    { id: 'reports', name: 'Relatórios', icon: BarChart3 },
  ]

  const users = [
    { id: '1', name: 'João Silva', email: 'joao@empresa.com', role: 'USER', status: 'active' },
    { id: '2', name: 'Maria Santos', email: 'maria@empresa.com', role: 'SUPERVISOR', status: 'active' },
    { id: '3', name: 'Pedro Costa', email: 'pedro@empresa.com', role: 'USER', status: 'inactive' },
  ]

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Administração</h1>
        <p className="mt-1 text-sm text-gray-600">
          Gerencie usuários, templates e configurações da sua conta.
        </p>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-2 px-1 border-b-2 font-medium text-sm flex items-center ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Icon className="h-4 w-4 mr-2" />
                {tab.name}
              </button>
            )
          })}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          {activeTab === 'users' && (
            <div>
              <div className="sm:flex sm:items-center sm:justify-between mb-6">
                <h3 className="text-lg font-medium text-gray-900">Usuários da Equipe</h3>
                <button className="mt-3 sm:mt-0 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
                  Convidar Usuário
                </button>
              </div>
              
              <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Usuário
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Função
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="relative px-6 py-3">
                        <span className="sr-only">Ações</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {users.map((user) => (
                      <tr key={user.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>
                            <div className="text-sm font-medium text-gray-900">{user.name}</div>
                            <div className="text-sm text-gray-500">{user.email}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            {user.role}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            user.status === 'active' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {user.status === 'active' ? 'Ativo' : 'Inativo'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button className="text-blue-600 hover:text-blue-900">Editar</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'templates' && (
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Templates de Contratos</h3>
              <p className="text-gray-600">Gerencie os templates disponíveis para sua equipe.</p>
            </div>
          )}

          {activeTab === 'settings' && (
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Configurações da Conta</h3>
              <p className="text-gray-600">Configure as preferências da sua conta.</p>
            </div>
          )}

          {activeTab === 'reports' && (
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Relatórios</h3>
              <p className="text-gray-600">Visualize relatórios de atividade e performance.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Admin