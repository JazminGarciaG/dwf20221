export class Customer{
        id_customer: 0;
        name: string;
        surname: string;
        rfc: string;
        mail: string;
        address: string;
        status: number;
        id_region: 0;
        image: string;

        constructor(){
            this.id_customer = 0; 
            this.name = "";
            this.surname = "";
            this.rfc = "";
            this.mail = "";
            this.address = "";
            this.status = 1;
            this.id_region = 0;
            this.image = "";
      
        }
      
}