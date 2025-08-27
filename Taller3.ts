
// ===============================
// Taller de TypeScript - Solución
// ===============================

// -------------------------------
// Parte 1: Definir Interfaces
// -------------------------------

// 1. Estudiante
interface Direccion {
  calle: string;
  ciudad: string;
  pais: string;
}

interface Estudiante {
  nombre: string;
  edad: number;
  curso: string;
  direccion: Direccion;
  mostrarInfo(): string;
}

const estudiante: Estudiante = {
  nombre: 'Juan',
  edad: 22,
  curso: 'Matemáticas',
  direccion: {
    calle: 'Av. Siempre Viva',
    ciudad: 'Bogotá',
    pais: 'Colombia',
  },
  mostrarInfo() {
    return `${this.nombre} estudia ${this.curso} en ${this.direccion.ciudad}`;
  },
};

console.log(estudiante.mostrarInfo());


// 2. Producto
interface Producto {
  id: number;
  nombre: string;
  precio: number;
  stock: number;
  mostrarDetalle(): string;
}

const producto: Producto = {
  id: 1,
  nombre: 'Laptop',
  precio: 3500,
  stock: 10,
  mostrarDetalle() {
    return `${this.nombre} cuesta $${this.precio} y hay ${this.stock} unidades disponibles`;
  },
};

console.log(producto.mostrarDetalle());


// 3. Película
interface Pelicula {
  titulo: string;
  director: string;
  duracion: number;
  genero: string;
  reproducir(): string;
}

const pelicula: Pelicula = {
  titulo: 'Avengers: Endgame',
  director: 'Anthony y Joe Russo',
  duracion: 181,
  genero: 'Acción',
  reproducir() {
    return `Reproduciendo: ${this.titulo} - Dirigida por ${this.director}`;
  },
};

console.log(pelicula.reproducir());


// 4. Vehículo
interface Vehiculo {
  marca: string;
  modelo: string;
  anio: number;
  encender(): string;
}

const vehiculo: Vehiculo = {
  marca: 'Toyota',
  modelo: 'Corolla',
  anio: 2022,
  encender() {
    return `${this.marca} ${this.modelo} está encendido`;
  },
};

console.log(vehiculo.encender());


// 5. Usuario
interface Usuario {
  username: string;
  password: string;
  roles: string[];
  login(): string;
}

const usuario: Usuario = {
  username: 'admin01',
  password: '123456',
  roles: ['admin', 'editor'],
  login() {
    return `Usuario ${this.username} ha iniciado sesión con roles: ${this.roles.join(', ')}`;
  },
};

console.log(usuario.login());


// -------------------------------
// Parte 2: Corrección de Tipos
// -------------------------------

// Se cambia true por boolean que es el tipo correcto de dato
let myValue: number | string | boolean = 10;

// Tipos de datos en minúscula
let myBoolean: boolean = true;

// healthPoints era string
let healthPoints: number = 150;

// "otraEtiqueta" no está en la unión
let otherMultipleDataType: number | boolean | "myTag" = "myTag";

// myVar sin tipo → infiere any (válido)
let myVar: any;
myVar = 123;
myVar = true;
myVar = "texto";
myVar = {};

// const debe inicializarse
const myConstant: number = 10;

// inferedDataType infiere string, no se puede reasignar a number
let inferedDataType: string | number = "Texto inicial";
inferedDataType = 123;

// 1 no es boolean
let isActive: boolean = true;

// true no es string ni number
let mixed: number | string = "true";

// "while" es palabra reservada
let whileVar: string = "Hola";

// "numer" no existe
let myNumber: number = 10;

// "3" es string
let numeros: number[] = [1, 2, 3];

// falta número en la tupla
let tupla: [string, number] = ["Hola", 10];

// tipos invertidos
let otraTupla: [string, boolean] = ["Hola", true];

// texto = null (si no activas strictNullChecks)
let texto: string | null = "Hola mundo";
texto = null;

// "amarillo" no está en la unión
let color: "rojo" | "verde" | "azul" = "rojo";

// cualquier cosa va en any, pero cuidado con métodos
let valor: any = 10;
// valor.toUpperCase(); // error si valor es number
console.log(valor);

// const no se puede reasignar
let version: number = 1.0;
version = 2.0;

// objeto inicial no tenía apellido
let persona: { nombre: string; apellido?: string } = { nombre: "Ana" };
persona.apellido = "Ruiz";

// undefined no es número
let edad: number | undefined = undefined;
