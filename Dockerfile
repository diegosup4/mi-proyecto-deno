FROM denoland/deno:2.1.4

WORKDIR /app

# Copiar archivos de configuración
COPY deno.json .

# Copiar código fuente
COPY src/ ./src/

# Cache de dependencias
RUN deno cache src/main.ts

EXPOSE 8000

CMD ["deno", "run", "--allow-net", "--allow-read", "src/main.ts"]
```

### 6. `.gitignore`
```
*.lcov
.DS_Store
.vscode/
.idea/
