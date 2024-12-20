import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'
import { ClienteService } from './cliente.service'
import { Cliente } from './cliente'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ClienteService]
})
export class AppComponent {
  constructor(private clienteService:ClienteService) {}

  ngOnInit() {
    this.getCliente()
  }

  getService() {
    return this.clienteService
  }

  getCliente() {
    this.clienteService.getClientes()
    .subscribe((res) => {
      this.clienteService.clientes = res as Cliente[]
    })
  }

  postCliente(form:NgForm) {
    if(!form.value._id) {
      this.clienteService.postCliente(form.value)
      .subscribe((res) => {
        this.getCliente()
        this.clienteService.selectedCliente = new Cliente()
      })
    } else {
      this.clienteService.putCliente(form.value)
      .subscribe((res) => {
        this.getCliente()
        this.clienteService.selectedCliente = new Cliente()
      })
    }
  }

  editCliente(cliente:Cliente) {
    this.clienteService.selectedCliente = cliente
  }

  deleteCliente(_id:String) {
    this.clienteService.deleteCliente(_id)
    .subscribe((res) => {
      this.getCliente()
      this.clienteService.selectedCliente = new Cliente()
    })
  }
}
