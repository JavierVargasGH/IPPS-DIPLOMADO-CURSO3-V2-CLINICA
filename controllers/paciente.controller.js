import * as service from '../services/paciente.service.js'

export const crear = async (req, res) => {
  const {
    nombre,
    rut,
    fechaNacimiento,
    prevision,
    telefono,
    email
  } = req.body

  if (!nombre || !rut || !fechaNacimiento) {
    return res.status(400).json({
      error: 'Nombre, RUT y fecha de nacimiento son obligatorios'
    })
  }

  const paciente = await service.crear({
    nombre,
    rut,
    fechaNacimiento,
    prevision,
    telefono,
    email,
    medico: req.medico.id
  })

  return res.status(201).json(paciente)
}

export const listar = async (req, res) => {
  const pacientes = await service.listar(
    req.medico.id,
    req.query.prevision
  )

  return res.status(200).json(pacientes)
}

export const buscarPorId = async (req, res) => {
  const paciente = await service.buscarPorId(req.params.id)

  if (!paciente) {
    return res.status(404).json({
      error: 'Paciente no encontrado'
    })
  }

  return res.status(200).json(paciente)
}

export const actualizar = async (req, res) => {
  const paciente = await service.buscarPorId(req.params.id)

  if (!paciente) {
    return res.status(404).json({
      error: 'Paciente no encontrado'
    })
  }

  if (paciente.medico.toString() !== req.medico.id) {
    return res.status(403).json({
      error: 'No eres el medico tratante de este paciente'
    })
  }

  const {
    nombre,
    rut,
    fechaNacimiento,
    prevision,
    telefono,
    email
  } = req.body

  const datos = {}

  if (nombre !== undefined) datos.nombre = nombre
  if (rut !== undefined) datos.rut = rut
  if (fechaNacimiento !== undefined) datos.fechaNacimiento = fechaNacimiento
  if (prevision !== undefined) datos.prevision = prevision
  if (telefono !== undefined) datos.telefono = telefono
  if (email !== undefined) datos.email = email

  const actualizado = await service.actualizar(
    req.params.id,
    datos
  )

  return res.status(200).json(actualizado)
}

export const eliminar = async (req, res) => {
  const paciente = await service.buscarPorId(req.params.id)

  if (!paciente) {
    return res.status(404).json({
      error: 'Paciente no encontrado'
    })
  }

  if (paciente.medico.toString() !== req.medico.id) {
    return res.status(403).json({
      error: 'No eres el medico tratante de este paciente'
    })
  }

  await service.eliminar(req.params.id)

  return res.status(204).send()
}