import { Operacion } from "./operacion.interface"

export interface Usuario {
  id: number
  userName: string
  email: string
  password: string
  rol: string
  operaciones: Operacion
}
