export interface Atendimento {
  id: number,
  horario: string | Date,
  tipo: string,
  observacao?: string
  medico?: string,
  paciente?: string,
}
