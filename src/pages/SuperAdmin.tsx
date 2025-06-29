import React, { useState } from 'react'
import { Building2, Package, Settings, BarChart3 } from 'lucide-react'

const SuperAdmin: React.FC = () => {
  const [activeTab, setActiveTab] = useState('accounts')

  const tabs = [
    { id: 'accounts', name: 'Contas', icon: Building2 },
    { id: 'plans', name: 'Planos', icon: Package },
    { id: 'settings', name: 'Configurações', icon: Settings },
    { id: 'analytics', name: 'Analytics', icon: BarChart3 },
  ]

  const accounts = [
    { id: '1', name: 'Silva & Associados', plan: 'Professional', users: 5, status: 'active' },
    { id: '2', name: 'TechCorp Solutions', plan: 'Enterprise', users: 15, status: 'active' },
    { id: '3', name: 'João Silva', plan: 'Basic', users: 1, status: 'trial' },
  ]

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Super Administração</h1>
        <p className="mt-1 text-sm text-gray-600">
          Gerencie todas as contas, planos e configurações globais da plataforma.
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
          {activeTab === 'accounts' && (
            <div>
              <div className="sm:flex sm:items-center sm:justify-between mb-6">
                <h3 className="text-lg font-medium text-gray-900">Todas as Contas</h3>
                <button className="mt-3 sm:mt-0 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
                  Nova Conta
                </button>
              </div>
              
              <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Conta
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Plano
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Usuários
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
                    {accounts.map((account) => (
                      <tr key={account.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{account.name}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            {account.plan}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {account.users}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            account.status === 'active' 
                              ? 'bg-green-100 text-green-800' 
                              : account.status === 'trial'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {account.status === 'active' ? 'Ativo' : account.status === 'trial' ? 'Trial' : 'Inativo'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button className="text-blue-600 hover:text-blue-900">Gerenciar</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'plans' && (
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Planos de Assinatura</h3>
              <p className="text-gray-600">Configure os planos disponíveis na plataforma.</p>
            </div>
          )}

          {activeTab === 'settings' && (
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Configurações Globais</h3>
              <p className="text-gray-600">Configure as preferências globais da plataforma.</p>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Analytics da Plataforma</h3>
              <p className="text-gray-600">Visualize métricas e analytics de toda a plataforma.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default SuperAdmin