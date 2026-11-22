
import { Paciente } from '../models/paciente.model.js'

export const crear = async (datos) => {
  return Paciente.create(datos)
}

export const listar = async (medicoId, prevision) => {
  const filtro = {
    medico: medicoId
  }

  if (prevision) {
    filtro.prevision = prevision
  }

  return Paciente.find(filtro)
}

export const buscarPorId = async (id) => {
  return Paciente.findById(id)
}

export const actualizar = async (id, datos) => {
  return Paciente.findByIdAndUpdate(
    id,
    datos,
    {
      new: true,
      runValidators: true
    }
  )
}

export const eliminar = async (id) => {
  return Paciente.findByIdAndDelete(id)
}
