import { Medico } from '../models/medico.model.js'
import { Paciente } from '../models/paciente.model.js'

export const listar = async (especialidad) => {
  const filtro = {}

  if (especialidad) {
    filtro.especialidad = especialidad
  }

  return Medico.find(filtro)
}

export const buscarPorId = async (id) => {
  return Medico.findById(id)
}

export const listarPacientes = async (medicoId) => {
  return Paciente.find({ medico: medicoId })
}