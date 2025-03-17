import { Question } from '@serenity-js/core';

export const LastResponse = {
    status: () =>
        Question.about('el estado de la última respuesta', actor =>
            // Aquí deberías llamar a la lógica correcta para obtener el estado
            // Por ejemplo, si tienes una función getStatus en algún lugar:
            getStatus().answeredBy(actor),
        ),
    body: () =>
        Question.about('el cuerpo de la última respuesta', actor =>
            // Aquí deberías llamar a la lógica correcta para obtener el cuerpo
            // Por ejemplo, si tienes una función getBody en algún lugar:
            getBody<Record<string, any>>().answeredBy(actor),
        ),
};

// Ejemplo de funciones que podrías tener para obtener el estado y el cuerpo
function getStatus() {
    // Lógica para obtener el estado de la última respuesta
}

function getBody<T>() {
    // Lógica para obtener el cuerpo de la última respuesta
}