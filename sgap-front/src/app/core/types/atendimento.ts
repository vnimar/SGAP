export interface Atendimento {
  id: number,
  horario: string | Date,
  medico?: string,
  paciente?: string,
  consulta?: string,
  tipo: string,
  observacao: string
}
