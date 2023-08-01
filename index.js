alert("BIENVENIDO! - Juguemos a piedra, papel o tijeras");

class Jugador {
    constructor(nombre) {
        this.nombre = nombre;
        this.puntos = 0;
    }

    obtenerEleccion() {
        return prompt(`${this.nombre}, elige: piedra, papel o tijeras`).toLowerCase();
    }

    incrementarPuntos() {
        this.puntos++;
    }
}

class Juego {
    constructor() {
        this.jugadores = [];
    }

    agregarJugador(nombre) {
        const jugador = new Jugador(nombre);
        this.jugadores.push(jugador);
    }



    jugarContraMaquina() {
        const jugador1 = this.jugadores[0];
        const rondas = parseInt(prompt("¿Cuántas rondas quieren jugar?")) || 1;
        for (let ronda = 1; ronda <= rondas; ronda++) {
            alert(`Ronda: ${rondas}`);
            const eleccionJugador1 = jugador1.obtenerEleccion();
            const eleccionMaquina = this.obtenerEleccionComputadora();
            alert(`La máquina eligió: ${eleccionMaquina}`);
            const resultado = this.determinarGanadorMaquina(eleccionJugador1, eleccionMaquina);
            alert(`Ganador: ${resultado}`);
            if (resultado === jugador1.nombre) {
                jugador1.incrementarPuntos();
            }
            this.mostrarPuntos();
        }
        this.mostrarPuntos();
        alert("Espero que te hallas divertido, vuelva pronto! ");
    }

    jugarEntreDosJugadores() {
        const jugador1 = this.jugadores[0];
        const jugador2 = this.jugadores[1];
        const rondas = parseInt(prompt("¿Cuántas rondas quieren jugar?")) || 1;
        for (let ronda = 1; ronda <= rondas; ronda++) {
            const eleccionJugador1 = jugador1.obtenerEleccion();
            const eleccionJugador2 = jugador2.obtenerEleccion();
            // alert(`${jugador2.nombre} eligió: ${eleccionJugador2}\n${jugador1.nombre} eligió: ${eleccionJugador1}`);
            const resultado = this.determinarGanador(eleccionJugador1, eleccionJugador2);
            alert(`Ganador: ${resultado}`);
            if (resultado === jugador1.nombre) {
                jugador1.incrementarPuntos();
            } else if (resultado === jugador2.nombre) {
                jugador2.incrementarPuntos();
            }
        }
        this.mostrarPuntos();
        alert("Espero que te hallas divertido, vuelve pronto! ");
    }

    jugar() {
        const opcion = prompt("¿Contra quién quieres jugar?\n1. Contra la máquina\n2. Entre dos jugadores");

        if (opcion === "1") {
            const nombreJugador1 = prompt("Ingresa el nombre del Jugador 1");
            this.agregarJugador(nombreJugador1);
            this.jugarContraMaquina();
        } else if (opcion === "2") {
            const nombreJugador1 = prompt("Ingresa el nombre del Jugador 1");
            this.agregarJugador(nombreJugador1);
            const nombreJugador2 = prompt("Ingresa el nombre del Jugador 2");
            this.agregarJugador(nombreJugador2);
            this.jugarEntreDosJugadores();
        } else {
            alert("Opción inválida. Por favor, selecciona 1 o 2.");
            this.jugar();
        }

    }

    determinarGanador(eleccionJugador1, eleccionJugador2) {
        if (eleccionJugador1 === eleccionJugador2) {
            return "¡Empate!";
        } else if (
            (eleccionJugador1 === "piedra" && eleccionJugador2 === "tijeras") ||
            (eleccionJugador1 === "papel" && eleccionJugador2 === "piedra") ||
            (eleccionJugador1 === "tijeras" && eleccionJugador2 === "papel")
        ) {
            return this.jugadores[0].nombre;
        } else {
            return this.jugadores[1].nombre;
        }
    }

    determinarGanadorMaquina(eleccionJugador1, eleccionJugador2,) {
        if (eleccionJugador1 === eleccionJugador2) {
            return "¡Empate!";
        } else if (
            (eleccionJugador1 === "piedra" && eleccionJugador2 === "tijeras") ||
            (eleccionJugador1 === "papel" && eleccionJugador2 === "piedra") ||
            (eleccionJugador1 === "tijeras" && eleccionJugador2 === "papel")
        ) {
            return this.jugadores[0].nombre;
        } else {
            return "Maquina";
        }
    }

    obtenerEleccionComputadora() {
        const opciones = ["piedra", "papel", "tijeras"];
        const indiceAleatorio = Math.floor(Math.random() * opciones.length);
        return opciones[indiceAleatorio];
    }



    mostrarPuntos() {
        let ranking = "Ranking:\n";
        this.jugadores.sort((a, b) => b.puntos - a.puntos);
        this.jugadores.forEach((jugador, index) => {
            ranking += `${index + 1}. ${jugador.nombre} - Puntos: ${jugador.puntos}\n`;
        });
        alert(ranking);
    }
}

const juego = new Juego();
juego.jugar();
