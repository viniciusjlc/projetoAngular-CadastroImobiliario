export  class Usuario {
  constructor(
    public email: string,
    public nome: string,
    public senha?: string,
    public id?: number) {
  }
}
