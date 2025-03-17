import { Question } from '@serenity-js/core';

export const LastResponse = {
    status: () =>
        Question.about('el estado de la última respuesta', actor =>
            getStatus().answeredBy(actor),
        ),
    body: () =>
        Question.about('el cuerpo de la última respuesta', actor =>
            getBody<Record<string, any>>().answeredBy(actor),
        ),
};

// Ejemplo de funciones que podrías tener para obtener el estado y el cuerpo
function getStatus() {
}

function getBody<T>() {
}
