// tslint:disable-next-line:class-name
export class clientModel {
  id: number;
  firstName: string;
  lastName: string;
  cin: string;
  mail: string;
  description: string;
  imageSrc: string;
  constructor(obj: any) {
    this.id = obj.id;
    this.firstName = obj.firstName;
    this.lastName = obj.lastName;
    this.cin = obj.cin;
    this.mail = obj.mail;
    this.description = obj.description;
    this.imageSrc = obj.imageSrc;
  }
}
