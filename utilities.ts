import { VueloModelo, Vuelo } from "./type.ts";

export const fromModeloToVuelo = (vuelo: VueloModelo): Vuelo => ({
    id: vuelo._id!.toString(),
    origen: vuelo.origen,
    destino: vuelo.destino,
    fecha_hora: vuelo.fecha_hora
})