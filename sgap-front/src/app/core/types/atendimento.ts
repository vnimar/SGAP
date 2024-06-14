import { Funcionario } from "./funcionario";
import { Paciente } from "./paciente";

export interface Atendimento {
  id: string,
  horario: string,
  tipo: string,
  observacao?: string
  medico?: Funcionario,
  paciente?: Paciente,
}
