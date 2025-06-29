import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { Clock, CheckCircle, FileText } from 'lucide-react'

const TestPage: React.FC = () => {
  const navigate = useNavigate()
  const { login } = useAuth()

  const handleStartTest = async () => {
    try {
      // Simulate test user login
      await login('teste@autocontrato.com', 'teste123')
      navigate('/dashboard')
    } catch (error) {
      console.error('Erro ao iniciar teste:', error)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-blue-600 rounded-full p-4">
              <FileText className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Teste Grátis - AutoContrato
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Experimente todas as funcionalidades por 2 horas, sem compromisso!
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="bg-green-100 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">2 Horas Grátis</h3>
              <p className="text-gray-600">Acesso completo por 2 horas sem precisar de cartão de crédito</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FileText className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Todas as Funcionalidades</h3>
              <p className="text-gray-600">Crie, edite, gerencie e assine contratos digitais</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Sem Compromisso</h3>
              <p className="text-gray-600">Teste sem obrigação de compra ou assinatura</p>
            </div>
          </div>

          <div className="border-t pt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">O que você pode testar:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <span className="text-gray-700">Criar e editar contratos</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <span className="text-gray-700">Usar templates personalizáveis</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <span className="text-gray-700">Gerenciar assinaturas eletrônicas</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <span className="text-gray-700">Dashboard completo</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <span className="text-gray-700">Variáveis dinâmicas</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <span className="text-gray-700">Relatórios e analytics</span>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={handleStartTest}
                className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Começar Teste Grátis Agora
              </button>
              <p className="mt-4 text-sm text-gray-500">
                Não é necessário cartão de crédito • Acesso imediato • 2 horas completas
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-600">
            Já tem uma conta?{' '}
            <button
              onClick={() => navigate('/login')}
              className="text-blue-600 hover:text-blue-500 font-medium"
            >
              Fazer login
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default TestPage