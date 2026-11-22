import * as service from '../services/auth.service.js'

export const registrar = async (req, res) => {
  const { nombre, especialidad, email, password } = req.body

  if (!nombre || !especialidad || !email || !password) {
    return res.status(400).json({
      error: 'Faltan datos obligatorios'
    })
  }

  const resultado = await service.registrar({
    nombre,
    especialidad,
    email,
    password
  })

  return res.status(201).json(resultado)
}

export const login = async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({
      error: 'Email y password son obligatorios'
    })
  }

  const resultado = await service.login(email, password)

  if (!resultado) {
    return res.status(401).json({
      error: 'Email o contraseña incorrectos'
    })
  }

  return res.status(200).json(resultado)
}