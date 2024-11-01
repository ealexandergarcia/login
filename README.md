# Documentación de la API

## Varibles de entorno
GOOGLE_CLIENT_ID=516537379956-0qepjc7l5vuinnuhcgshvbdldgtsuuof.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=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

DISCORD_CLIENT_ID=1300935621199663124
DISCORD_CLIENT_SECRET=oJT2CEQZg2oZja-E_KrBhNm2Vr3sVVsQ

FACEBOOK_CLIENT_ID=894385772785638
FACEBOOK_CLIENT_SECRET=01358c2b25722e0c4865ab6c68870a93

SESSION_SECRET=e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
MONGO_URI=mongodb+srv://edwin:edwin123@edwingod.pykmytn.mongodb.net/account

## Endpoints de Autenticación

### 1. Login con Google
- **URL**: `/auth/google`
- **Método**: `GET`
- **Descripción**: Inicia el proceso de autenticación con Google. Redirige al usuario a la página de inicio de sesión de Google.
  
### 2. Callback de Google
- **URL**: `/auth/google/callback`
- **Método**: `GET`
- **Descripción**: Recibe la respuesta de Google después de la autenticación. Si la autenticación es exitosa, redirige a la página de inicio (`/home`).

### 3. Login con Discord
- **URL**: `/auth/discord`
- **Método**: `GET`
- **Descripción**: Inicia el proceso de autenticación con Discord. Redirige al usuario a la página de inicio de sesión de Discord.

### 4. Callback de Discord
- **URL**: `/auth/discord/callback`
- **Método**: `GET`
- **Descripción**: Recibe la respuesta de Discord después de la autenticación. Si la autenticación es exitosa, redirige a la página de inicio (`/home`) y devuelve el nombre de usuario.

### 5. Login con Facebook
- **URL**: `/auth/facebook`
- **Método**: `GET`
- **Descripción**: Inicia el proceso de autenticación con Facebook. Redirige al usuario a la página de inicio de sesión de Facebook.

### 6. Callback de Facebook
- **URL**: `/auth/facebook/callback`
- **Método**: `GET`
- **Descripción**: Recibe la respuesta de Facebook después de la autenticación. Si la autenticación es exitosa, redirige a la página de inicio (`/home`).

## Ejemplo de Respuesta

### 1. Respuesta de la Callback de Discord
```json
{
  "displayName": "Nombre de Usuario"
}
