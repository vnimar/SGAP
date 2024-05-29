export interface Atendimento {
  id: string,
  horario: string,
  tipo: string,
  observacao?: string
  medico?: string,
  paciente?: string,
}
