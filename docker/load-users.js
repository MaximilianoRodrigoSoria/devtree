// Script para cargar 20 registros de usuarios de prueba en MongoDB

db = db.getSiblingDB('devtreedb');

// Insertar usuarios de prueba
db.users.insertMany([
    {
        email: 'juan@example.com',
        password: 'hashedpass123',
        name: 'Juan García',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        email: 'maria@example.com',
        password: 'hashedpass456',
        name: 'María López',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        email: 'carlos@example.com',
        password: 'hashedpass789',
        name: 'Carlos Rodríguez',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        email: 'ana@example.com',
        password: 'hashedpass101',
        name: 'Ana Martínez',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        email: 'luis@example.com',
        password: 'hashedpass102',
        name: 'Luis Fernández',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        email: 'rosa@example.com',
        password: 'hashedpass103',
        name: 'Rosa Sánchez',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        email: 'diego@example.com',
        password: 'hashedpass104',
        name: 'Diego Torres',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        email: 'elena@example.com',
        password: 'hashedpass105',
        name: 'Elena Flores',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        email: 'pablo@example.com',
        password: 'hashedpass106',
        name: 'Pablo Moreno',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        email: 'sofia@example.com',
        password: 'hashedpass107',
        name: 'Sofía Jiménez',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        email: 'andres@example.com',
        password: 'hashedpass108',
        name: 'Andrés Gómez',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        email: 'laura@example.com',
        password: 'hashedpass109',
        name: 'Laura Ruiz',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        email: 'miguel@example.com',
        password: 'hashedpass110',
        name: 'Miguel Díaz',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        email: 'isabel@example.com',
        password: 'hashedpass111',
        name: 'Isabel Vargas',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        email: 'jose@example.com',
        password: 'hashedpass112',
        name: 'José Navarro',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        email: 'gabriela@example.com',
        password: 'hashedpass113',
        name: 'Gabriela Castro',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        email: 'fernando@example.com',
        password: 'hashedpass114',
        name: 'Fernando Ramos',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        email: 'adriana@example.com',
        password: 'hashedpass115',
        name: 'Adriana Soto',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        email: 'ramon@example.com',
        password: 'hashedpass116',
        name: 'Ramón Herrera',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        email: 'patricia@example.com',
        password: 'hashedpass117',
        name: 'Patricia Delgado',
        createdAt: new Date(),
        updatedAt: new Date()
    }
]);

// Mostrar conteo de usuarios insertados
const count = db.users.countDocuments();
print(`✅ ${count} usuarios insertados exitosamente en la colección users`);
