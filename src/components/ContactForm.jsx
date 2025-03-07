import { useState } from 'react'
import emailjs from '@emailjs/browser'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  })
  const [status, setStatus] = useState('')
  const [emailError, setEmailError] = useState('')

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const blockedDomains = ['teste.com', 'test.com', 'example.com', 'temp.com']
    const domain = email.split('@')[1]
    
    if (!emailRegex.test(email)) {
      return false
    }
    
    if (blockedDomains.includes(domain)) {
      setEmailError('Por favor, use um endereço de email válido.')
      return false
    }
    
    return true
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    if (name === 'from_email') {
      if (!isValidEmail(value)) {
        setEmailError('Por favor, use um endereço de email válido.')
      } else {
        setEmailError('')
      }
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!isValidEmail(formData.from_email)) {
      return
    }

    setStatus('enviando')
    
    try {
      await emailjs.send(
        'service_3dkw8hl',
        'template_xjxrk3i',
        formData,
        'h4-viPFEmgqyMjiEO'
      )
      
      setStatus('sucesso')
      setFormData({
        from_name: '',
        from_email: '',
        message: ''
      })
    } catch (error) {
      setStatus('erro')
      console.error('Erro ao enviar email:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="from_name" className="block text-sm font-medium text-text-secondary mb-2">
          Nome
        </label>
        <input
          type="text"
          id="from_name"
          name="from_name"
          value={formData.from_name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 bg-secondary/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </div>
      
      <div>
        <label htmlFor="from_email" className="block text-sm font-medium text-text-secondary mb-2">
          Email
        </label>
        <input
          type="email"
          id="from_email"
          name="from_email"
          value={formData.from_email}
          onChange={handleChange}
          required
          className={`w-full px-4 py-2 bg-secondary/50 border ${
            emailError ? 'border-red-500' : 'border-white/10'
          } rounded-lg focus:outline-none focus:ring-2 focus:ring-accent`}
        />
        {emailError && (
          <p className="mt-1 text-sm text-red-500">{emailError}</p>
        )}
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="4"
          className="w-full px-4 py-2 bg-secondary/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </div>
      
      <button
        type="submit"
        disabled={status === 'enviando'}
        className="w-full btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'enviando' ? 'Enviando...' : 'Enviar Mensagem'}
      </button>
      
      {status === 'sucesso' && (
        <p className="text-green-500 text-center">Mensagem enviada com sucesso!</p>
      )}
      
      {status === 'erro' && (
        <p className="text-red-500 text-center">Erro ao enviar mensagem. Tente novamente.</p>
      )}
    </form>
  )
}

export default ContactForm 