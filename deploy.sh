#!/bin/bash

set -e  # Si hay error, detener

echo "🚀 Iniciando deploy a producción..."

# 1. Cargar las variables del .env.deploy
if [ -f .env.deploy ]; then
    export $(cat .env.deploy | grep -v '^#' | xargs)
else
    echo "❌ Error: No se encontró .env.deploy"
    exit 1
fi

# 2. Generar el build de producción
echo "📦 Generando build..."
npm run build

# 3. Subir archivos uno por uno vía FTP
echo "📤 Subiendo archivos..."
cd dist

upload_file() {
    local file=$1
    local remote_path=$2
    echo "  📄 Subiendo: $remote_path"
    curl -T "$file" "ftp://$FTP_HOST$FTP_REMOTE_PATH/$remote_path" \
         --user "$FTP_USER:$FTP_PASSWORD" \
         --ftp-create-dirs \
         --silent \
         --show-error
}

find . -type f | while read file; do
    clean_path="${file#./}"
    upload_file "$file" "$clean_path"
done

cd ..

echo "✅ Deploy completado!"
