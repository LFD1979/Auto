import React, { useState } from 'react'
import { Save, Send, Eye, FileText } from 'lucide-react'

const Editor: React.FC = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [variables, setVariables] = useState({
    nome_cliente: '',
    valor_contrato: '',
    data_inicio: '',
    data_fim: ''
  })

  const handleSave = () => {
    console.log('Salvando contrato...', { title, content, variables })
    // Implementar lógica de salvamento
  }

  const handleSend = () => {
    console.log('Enviando contrato...', { title, content, variables })
    // Implementar lógica de envio
  }

  const handlePreview = () => {
    console.log('Visualizando contrato...', { title, content, variables })
    // Implementar lógica de preview
  }

  return (
    <div>
      <div className="sm:flex sm:items-center sm:justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Editor de Contratos</h1>
          <p className="mt-1 text-sm text-gray-600">
            Crie e edite seus contratos com facilidade.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 flex space-x-3">
          <button
            onClick={handlePreview}
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            <Eye className="h-4 w-4 mr-2" />
            Visualizar
          </button>
          <button
            onClick={handleSave}
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            <Save className="h-4 w-4 mr-2" />
            Salvar
          </button>
          <button
            onClick={handleSend}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
          >
            <Send className="h-4 w-4 mr-2" />
            Enviar
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Editor Principal */}
        <div className="lg:col-span-2">
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="mb-4">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                  Título do Contrato
                </label>
                <input
                  type="text"
                  id="title"
                  className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Digite o título do contrato..."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              
              <div>
                <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
                  Conteúdo do Contrato
                </label>
                <textarea
                  id="content"
                  rows={20}
                  className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Digite o conteúdo do contrato... Use {{nome_cliente}} para variáveis dinâmicas."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              </div>
              
              <div className="mt-4 text-xs text-gray-500">
                <p>💡 Dica: Use variáveis como {{nome_cliente}}, {{valor_contrato}}, {{data_inicio}} para personalizar automaticamente.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Painel Lateral */}
        <div className="space-y-6">
          {/* Variáveis */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Variáveis</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nome do Cliente
                  </label>
                  <input
                    type="text"
                    className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="{{nome_cliente}}"
                    value={variables.nome_cliente}
                    onChange={(e) => setVariables({...variables, nome_cliente: e.target.value})}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Valor do Contrato
                  </label>
                  <input
                    type="text"
                    className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="{{valor_contrato}}"
                    value={variables.valor_contrato}
                    onChange={(e) => setVariables({...variables, valor_contrato: e.target.value})}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Data de Início
                  </label>
                  <input
                    type="date"
                    className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    value={variables.data_inicio}
                    onChange={(e) => setVariables({...variables, data_inicio: e.target.value})}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Data de Fim
                  </label>
                  <input
                    type="date"
                    className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    value={variables.data_fim}
                    onChange={(e) => setVariables({...variables, data_fim: e.target.value})}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Templates */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Templates</h3>
              <div className="space-y-2">
                <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md flex items-center">
                  <FileText className="h-4 w-4 mr-2" />
                  Prestação de Serviços
                </button>
                <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md flex items-center">
                  <FileText className="h-4 w-4 mr-2" />
                  Compra e Venda
                </button>
                <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md flex items-center">
                  <FileText className="h-4 w-4 mr-2" />
                  Confidencialidade
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Editor