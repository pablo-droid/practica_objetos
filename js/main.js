function main() {
    //1
    {
        const persona = {
        nombre: "n",
        edad: 1,
        ciudad: "d"
        };
        //console.log(persona.nombre);
        //console.log(persona.edad);
        //console.log(persona.ciudad);

        //2
        persona.ciudad = "c";
        persona.profesion = "p";
        //console.log(persona);
    }

    //3
    const libro = {
        titulo: "t",
        autor: "a",
        anoPublicacion: "hoy",
        resumen: function () {
            return `el libro ${this.titulo} fue escrito por ${this.autor} en ${this.anoPublicacion}`;
        }
    }
    //console.log(libro.resumen());

    //4
    const estudiantes = [
        {
            nombre: "a",
            edad: 1,
            notaFinal: 0
        },
        {
            nombre: "b",
            edad: 1,
            notaFinal: 1
        },
        {
            nombre: "c",
            edad: 1,
            notaFinal: 2
        }
    ];
    //estudiantes.forEach((student)=>{console.log(student.nombre, student.notaFinal);});

    //5
    {
        const persona = {
            nombre: "a",
            anioNacimiento: 2000,
            calcularEdad: function() {
                return 2026 - this.anioNacimiento;
            }
        };
        //console.log(persona.calcularEdad());
    }

    //6
    const coche = {
        marca: "m",
        modelo: "mm",
        ano: 2000,
        velocidadActual: 0,
        acelerar: function() {
            this.velocidadActual += 10;
        },
        frenar: function() {
            this.velocidadActual -= 10;
            this.velocidadActual = Math.max(this.velocidadActual, 0);
        }
    };
    /*coche.acelerar();
    console.log(coche.velocidadActual);
    coche.frenar();
    console.log(coche.velocidadActual);
    coche.frenar();
    console.log(coche.velocidadActual);*/

    //7
    const producto = {
        nombre: "n",
        precio: 1,
        cantidad: 2
    }
    for (key in producto) {
        //console.log(key, producto[key]);
    }

    //8
    const animal = {
        property1: 1,
        property2: 2,
        property3: 3,
        property4: 4,
        property5: 5,
    }
    const propertyNum = Object.keys(animal).length;
    //console.log(propertyNum);

    //9
    const empresa = {
        nombre: "n",
        direccion: {
            calle: "c",
            ciudad: "cc",
            codigoPostal: "ccc"
        }
    }
    //console.log(empresa.direccion.calle, empresa.direccion.ciudad, empresa.direccion.codigoPostal);

    //10
    const cuentaBancaria = {
        titular: "p",
        saldo: 0,
        depositar: function(value) {
            this.saldo += Math.min(value, 0);
        },
        retirar: function(value) {
            let ret = Math.min(Math.min(value, 0), this.saldo);
            this.saldo -= ret;
            return ret;
        }
    }
    /*cuentaBancaria.depositar(1)
    console.log(cuentaBancaria.saldo);
    let retired = cuentaBancaria.retirar(2)
    console.log(cuentaBancaria.saldo, retired);
    retired = cuentaBancaria.retirar(100)
    console.log(cuentaBancaria.saldo, retired);*/
}

main();