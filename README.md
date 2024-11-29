## Instrucciones de la actividad
Se pide crear una API GraphQL con persistencia de datos en Mongo para gestionar los vuelos de una compañía aerea.

Los vuelos tienes tres campos:
- Origen
- Destino
- Fecha y hora, por ej. "22/11/23 12:45"

Los tres datos son una cadena de texto.

Las queries y mutaciones que debe ofrecer la API son.
- getFlights, tiene los argumentos opcionales origen y destino. Si ambos argumentos están presentes devuelve todos los vuelos con dicho origen y destino, si solo un argumento está presente, por ejemplo el origen, devuelve todos los vuelos con ese origen, si ningún argumento está presente devuelve todos los vuelos (incluyendo sus ids).
- getFlight, recibe como argumento obligatorio el id del vuelo, devuelve el vuelo con dicho id, y si no existe devuelve null.
- addFlight, recibe como argumentos obligatorios el origen, destino y fecha-hora. Devuelve los datos del vuelo (incluyendo su id)
