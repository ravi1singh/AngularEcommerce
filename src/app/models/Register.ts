export class Register {

    name:String;
  address:String;
  city:String;
  state:String;
  country:String;
  Zipcode:String;
  email:String;
  mobile:String;
  password:String;
  creditCard:String;
    constructor(name:String,
        address:String,
        city:String,
        state:String,
        country:String,
        Zipcode:String,
        email:String,
        mobile:String,
        password:String,
        creditCard:String) {
        this.name=name;
        this.address=address;
        this.city=city;
        this.state=state;
        this.country=country;
        this.Zipcode=Zipcode;
        this.email=email;
        this.mobile=mobile;
        this.password=password;
        this.creditCard=creditCard;
    }
}