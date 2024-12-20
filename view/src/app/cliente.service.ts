import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Cliente } from './cliente'

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  selectedCliente:Cliente
  clientes:Cliente[]
  constructor(private http:HttpClient) {
    this.selectedCliente = new Cliente()
  }

  getClientes() {
    return this.http.get(`http://localhost:3000`)
  }

  postCliente(user:Cliente) {
    return this.http.post(`http://localhost:3000`, user)
  }

  putCliente(user:Cliente) {
    return this.http.put(`http://localhost:3000/${user._id}`, user)
  }

  deleteCliente(_id:String) {
    return this.http.delete(`http://localhost:3000/${_id}`)
  }

}
