export interface Funcionario {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  senha: string;
  cargo?: Cargo | string
}

export interface Cargo {
  id: number,
  tipo: string
}
