import { Usuario } from "./usuario.interface"

export interface AuthResponse {
  token: string
  user: Usuario
}
