
export interface Atendimento {
  id: string,
  horario: string,
  tipo: string,
  observacao?: string
  medico?: AtendimentoPessoa,
  paciente?: AtendimentoPessoa
}

export interface AtendimentoPessoa {
  id?: string
}
