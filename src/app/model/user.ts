export class User {
    private _firstName! : String;
    private _lastName! : String;
    private _email! : String;
    private _phone! : Number;
    private _gender! : Number;
    private _securityAnswer! : String;
    private _userName! : String;
    private _password! : String;
    private _confirmPassword! : String;

    constructor(){
    }

    public get firstName() {
        return this._firstName;
    }

    public set firstName(theFirstName: String) {
        this._firstName= theFirstName;
    }

    public get lastName() {
        return this._lastName;
    }

    public set lastName(theLastName: String) {
        this._lastName= theLastName;
    }

    public getFullName(): string {
        return `${this._firstName} ${this._lastName}`;
    }

    public get email() {
        return this._email;
    }

    public set email(theEmail: String) {
        /*if (!theEmail.includes('?')) {
            throw new Error('The Email is invalid');
        }*/
        this._email= theEmail;
    }

    public get phone() {
        return this._phone;
    }

    public set phone(thePhone: Number) {
        this._phone= thePhone;
    }

    public get gender() {
        return this._gender;
    }

    public set gender(theGender: Number) {
        this._gender= theGender;
    }

    public get securityAnswer() {
        return this._securityAnswer;
    }

    public set securityAnswer(theAnswer: String) {
        this._securityAnswer= theAnswer;
    }

    public get userName() {
        return this._email;
    }

    public set userName(theUserName: String) {
        this._userName= theUserName;
    }

    public get password() {
        return this._password;
    }

    public set password(thePassword: String) {
        this._password= thePassword;
    }

    public get confirmPassword() {
        return this._confirmPassword;
    }

    public set confirmPassword(theConfirmPassword: String) {
        this._confirmPassword= theConfirmPassword;
    }
}
