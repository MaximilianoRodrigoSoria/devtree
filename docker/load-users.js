// Script para cargar 20 registros de usuarios de prueba en MongoDB

db = db.getSiblingDB('devtreedb');

// Insertar usuarios de prueba
db.users.insertMany([
    {
        email: 'juan@example.com',
        password: 'hashedpass123',
        name: 'Juan García',
        handle: 'juan_g',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        email: 'maria@example.com',
        password: 'hashedpass456',
        name: 'María López',
        handle: 'maria_l',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        email: 'carlos@example.com',
        password: 'hashedpass789',
        name: 'Carlos Rodríguez',
        handle: 'carlos_r',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        email: 'ana@example.com',
        password: 'hashedpass101',
        name: 'Ana Martínez',
        handle: 'ana_m',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        email: 'luis@example.com',
        password: 'hashedpass102',
        name: 'Luis Fernández',
        handle: 'luis_f',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        email: 'rosa@example.com',
        password: 'hashedpass103',
        name: 'Rosa Sánchez',
        handle: 'rosa_s',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        email: 'diego@example.com',
        password: 'hashedpass104',
        name: 'Diego Torres',
        handle: 'diego_t',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        email: 'elena@example.com',
        password: 'hashedpass105',
        name: 'Elena Flores',
        handle: 'elena_f',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        email: 'pablo@example.com',
        password: 'hashedpass106',
        name: 'Pablo Moreno',
        handle: 'pablo_m',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        email: 'sofia@example.com',
        password: 'hashedpass107',
        name: 'Sofía Jiménez',
        handle: 'sofia_j',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        email: 'andres@example.com',
        password: 'hashedpass108',
        name: 'Andrés Gómez',
        handle: 'andres_g',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        email: 'laura@example.com',
        password: 'hashedpass109',
        name: 'Laura Ruiz',
        handle: 'laura_r',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        email: 'miguel@example.com',
        password: 'hashedpass110',
        name: 'Miguel Díaz',
        handle: 'miguel_d',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        email: 'isabel@example.com',
        password: 'hashedpass111',
        name: 'Isabel Vargas',
        handle: 'isabel_v',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        email: 'jose@example.com',
        password: 'hashedpass112',
        name: 'José Navarro',
        handle: 'jose_n',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        email: 'gabriela@example.com',
        password: 'hashedpass113',
        name: 'Gabriela Castro',
        handle: 'gabriela_c',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        email: 'fernando@example.com',
        password: 'hashedpass114',
        name: 'Fernando Ramos',
        handle: 'fernando_r',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        email: 'adriana@example.com',
        password: 'hashedpass115',
        name: 'Adriana Soto',
        handle: 'adriana_s',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        email: 'ramon@example.com',
        password: 'hashedpass116',
        name: 'Ramón Herrera',
        handle: 'ramon_h',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        email: 'patricia@example.com',
        password: 'hashedpass117',
        name: 'Patricia Delgado',
        handle: 'patricia_d',
        createdAt: new Date(),
        updatedAt: new Date()
    }
]);

// Mostrar conteo de usuarios insertados
const count = db.users.countDocuments();
print(`✅ ${count} usuarios insertados exitosamente en la colección users`);
