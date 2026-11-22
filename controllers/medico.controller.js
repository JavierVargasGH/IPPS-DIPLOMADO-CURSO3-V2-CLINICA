import * as service from '../services/medico.service.js'

export const listar = async (req, res) => {
  const medicos = await service.listar(req.query.especialidad)
  return res.status(200).json(medicos)
}

export const perfil = async (req, res) => {
  const medico = await service.buscarPorId(req.medico.id)

  if (!medico) {
    return res.status(404).json({
      error: 'Medico no encontrado'
    })
  }

  return res.status(200).json(medico)
}

export const buscarPorId = async (req, res) => {
  const medico = await service.buscarPorId(req.params.id)

  if (!medico) {
    return res.status(404).json({
      error: 'Medico no encontrado'
    })
  }

  return res.status(200).json(medico)
}

export const listarPacientes = async (req, res) => {
  const medico = await service.buscarPorId(req.params.id)

  if (!medico) {
    return res.status(404).json({
      error: 'Medico no encontrado'
    })
  }

  const pacientes = await service.listarPacientes(req.params.id)

  return res.status(200).json(pacientes)
}