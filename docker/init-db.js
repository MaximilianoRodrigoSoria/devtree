// Script de inicialización de MongoDB
// Este script se ejecuta automáticamente cuando se inicia el contenedor

db = db.getSiblingDB('devtreedb');

// Crear la colección 'users' con validación de esquema
db.createCollection('users', {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["email", "password", "name"],
            properties: {
                email: {
                    bsonType: "string",
                    description: "Email del usuario (requerido, único)"
                },
                password: {
                    bsonType: "string",
                    description: "Contraseña del usuario (requerida)"
                },
                name: {
                    bsonType: "string",
                    description: "Nombre del usuario (requerido)"
                },
                createdAt: {
                    bsonType: "date",
                    description: "Fecha de creación"
                },
                updatedAt: {
                    bsonType: "date",
                    description: "Fecha de actualización"
                }
            }
        }
    }
});

// Crear índice único para email
db.users.createIndex({ "email": 1 }, { unique: true });

print('✅ Colección users creada exitosamente con índice único en email');
