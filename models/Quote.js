class Quote {
    constructor(quote, person) {
        this.id = Math.floor(Math.random() * 999999)
        this.quote = quote;
        this.person = person;
    }

    get quote() {
        return this.quote;
    }

    get person() {
        return this.person;
    }
    
}