export class Cliente {
  constructor(_id='', name='', email='', tel='', cpf=0) {
    this._id = _id;
    this.name = name;
    this.email = email;
    this.tel = tel;
    this.cpf = cpf;
  }
  _id:String;
  name:String;
  email:String;
  tel:String;
  cpf:number;
}
