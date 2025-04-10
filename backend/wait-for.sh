#!/bin/sh

# Esperar a que MySQL esté listo
echo "Esperando a que la base de datos esté disponible..."

while ! nc -z db 3306; do
  sleep 1
done

echo "Base de datos lista, iniciando la app..."
exec "$@"
