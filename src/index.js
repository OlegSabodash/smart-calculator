class SmartCalculator {
  constructor(initialValue) {
    this.arrNumber = [initialValue];
    this.arrPow = [];

}

add(number) {
    this.arrNumber.push('+');
    this.arrNumber.push(number);
    return this;
}

subtract(number) {
    this.arrNumber.push('-');
    this.arrNumber.push(number);
    return this;
}

multiply(number) {
    this.arrNumber.push('*');
    this.arrNumber.push(number);
    return this;
}

devide(number) {
    this.arrNumber.push('/');
    this.arrNumber.push(number);
    return this;
}

pow(number) {
    this.arrNumber.push('deg');
    this.arrPow.push(number);
    return this;
}

valueOf() {

    for (let y = 0; y < this.arrNumber.length; y++) {
        if (this.arrNumber[y] == 'deg' && this.arrNumber[y + 1] != 'deg') {
            this.arrNumber.splice(y - 1, 2, Math.pow(this.arrNumber[y - 1], this.arrPow[0]));
            this.arrPow.splice(0, 1);
        }
        if (this.arrNumber[y] == 'deg' && this.arrNumber[y + 1] == 'deg') {
            this.arrPow.splice(0, 2, Math.pow(this.arrPow[0], this.arrPow[1]));
            this.arrNumber.splice(y + 1, 1);
            y--;

        }

        if (this.arrPow.length == 0) { break };
    }

    for (let x = 0; x < this.arrNumber.length; x++) {
        if(this.arrNumber[x] == '*' || this.arrNumber[x] == '/'){
        if (this.arrNumber[x] == '*') {
            var t = this.arrNumber[x - 1] * this.arrNumber[x + 1];
        }
        if (this.arrNumber[x] == '/') {
            var t = this.arrNumber[x - 1] / this.arrNumber[x + 1];
        }
        this.arrNumber.splice(x - 1, 3, t);
        x--;
    }
        
        
    }

    for (let i = 0; i < this.arrNumber.length; i++) {
        if(this.arrNumber[i] == "+" || this.arrNumber[i] == "-"){
            if (this.arrNumber[i] == "+") {
                var r = this.arrNumber[i - 1] + this.arrNumber[i + 1];
            }
            if (this.arrNumber[i] == "-") {
                var r = this.arrNumber[i - 1] - this.arrNumber[i + 1];
            }
            
            this.arrNumber.splice(i - 1, 3, r);
            i--;
        }

    }

    return this.arrNumber[0];
    
}
}

module.exports = SmartCalculator;
