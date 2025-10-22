import colors from 'colors';

export const colorsMessage = {
    // Mensajes de éxito (verde)
    success: (message: string) => colors.green.bold(message),

    // Mensajes de error (rojo con fondo)
    error: (message: string) => colors.bgRed.white(message),

    // Mensajes de advertencia (amarillo)
    warning: (message: string) => colors.yellow.bold(message),

    // Mensajes de información (cian/azul claro)
    info: (message: string) => colors.cyan.bold(message),

    // Mensajes de debug (magenta)
    debug: (message: string) => colors.magenta.bold(message),

    // Mensajes destacados (azul)
    highlight: (message: string) => colors.blue.bold(message),
};

