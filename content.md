## 1. Descripción del Proyecto

**Nombre del Proyecto:** Plataforma Web de Finca Raíz (Properi)

**Objetivo:** Crear una plataforma digital que facilite el encuentro entre arrendatarios y arrendadores (o vendedores y compradores) mediante un sistema de solicitudes de arrendamiento, filtros geográficos y pagos para acceder a información de contacto, bajo un modelo de ingresos por suscripción o pago por contacto.

**Público objetivo:** Usuarios en Colombia (inicialmente Barranquilla), especialmente en zonas urbanas donde existe una alta demanda de alquileres residenciales o comerciales.

---

## 2. Módulos y Funcionalidades

### Módulo 1: Portal de Arrendatarios o Compra (Inquilinos)

**Objetivo:** Permitir a los usuarios registrarse como arrendatarios, crear y gestionar solicitudes de arrendamiento detalladas.

**Características y Funcionalidades:**

- **Autenticación:**
  - Registro de nuevos usuarios (nombre, email, contraseña).
  - Inicio de sesión.
  - Recuperación de contraseña.

- **Gestión de Solicitudes de Arrendamiento:**
  - **Creación de Solicitud:** Formulario para especificar:
    - Tipo de inmueble deseado (apartamento, casa, local, etc.).
    - Especificaciones del inmueble (ej: nº habitaciones, baños, m², características especiales).
    - Ubicación deseada (país, ciudad, zona/barrio – podría ser por selección o texto).
    - Rango de precio dispuesto a pagar.
    - Información de contacto (teléfono, email – que se compartirá previo pago del arrendador).

  - **Listado de Solicitudes:**
    - Pestañas/Filtros para ver solicitudes: Activas, Archivadas, Completadas.
    - Acciones por solicitud: Ver detalle, Editar (si activa), Archivar, Marcar como Completada, Eliminar (si activa).

- **Notificaciones:**
  - Sección de notificaciones donde el arrendatario recibe alertas cuando un arrendador muestra interés (paga por ver sus datos) en una de sus solicitudes activas.

- **Perfil de Usuario:** Editar información personal básica.

---

### Módulo 2: Portal de Arrendadores o Vendedores (Propietarios)

**Objetivo:** Permitir a los arrendadores buscar solicitudes de arrendamiento activas, y pagar para acceder a la información de contacto de los arrendatarios.

**Características y Funcionalidades:**

- **Autenticación:**
  - Registro de nuevos usuarios (nombre, email, contraseña, datos de empresa/personales para facturación).
  - Inicio de sesión.
  - Recuperación de contraseña.

- **Búsqueda y Visualización de Solicitudes (Limitada):**
  - Filtro por zona geográfica (ej. país, ciudad, zona – selector o búsqueda en mapa simple).
  - Visualización de listado de solicitudes activas con información mínima:
    - Tipo de inmueble buscado.
    - Zona.
    - Rango de precio.
    - (Sin datos de contacto del arrendatario).

- **Desbloqueo de Información de Contacto:**
  - Botón "Ver Detalles/Contactar" en cada solicitud.
  - Al hacer clic, se redirige a una pasarela de pago (PayU) para pagar una tarifa definida por el administrador.
  - Una vez confirmado el pago, el arrendador obtiene acceso a la información completa de la solicitud, incluyendo los datos de contacto del arrendatario.

- **Gestión de Solicitudes Adquiridas:**
  - Listado de solicitudes cuyos datos han sido desbloqueados.
  - Opción de marcar una negociación como "Completada" o "No concretada".

- **Historial de Transacciones:** Ver los pagos realizados.
- **Perfil de Usuario:** Editar información personal y de facturación.

---

### Módulo 3: Panel de Administración (Dashboard)

**Objetivo:** Proveer al administrador de la plataforma las herramientas para gestionar usuarios, solicitudes, transacciones y contenido general.

**Características y Funcionalidades:**

- **Autenticación Segura para Administradores.**
- **Gestión de Usuarios (CRUD - Crear, Leer, Actualizar, Eliminar):**
  - Listado de todos los usuarios (arrendatarios, arrendadores, administradores).
  - Ver/Editar detalles de usuario, tipo de usuario, estado (activo/inactivo).
  - Opción de crear/eliminar usuarios manualmente.

- **Gestión de Solicitudes de Arrendatarios (CRUD):**
  - Listado de todas las solicitudes (activas, archivadas, completadas).
  - Ver/Editar/Eliminar solicitudes.
  - Filtrar y buscar solicitudes.

- **Gestión de Interacciones de Arrendadores:**
  - Ver qué arrendadores han pagado por qué solicitudes.

- **Gestión de Transacciones:**
  - Listado de todos los pagos realizados a través de PayU.
  - Ver estado de la transacción, usuario, monto.

- **Configuraciones Básicas:**
  - Definir la tarifa para desbloquear información de contacto.

- **Estadísticas Simples:** (Número de usuarios, solicitudes activas, transacciones, etc.).

---

## 3. Cronograma de Desarrollo

**Duración total:** 3 meses (60 días hábiles, 240 horas)

| Semana | Módulo/Actividad                                                         | Horas Estimadas |
|--------|--------------------------------------------------------------------------|-----------------|
| 1–2    | Setup inicial, diseño base UI/UX y auth base                            | 20h             |
| 3–4    | Desarrollo del módulo de arrendatarios (formulario, solicitudes, vistas) | 40h             |
| 5–6    | Desarrollo del módulo de arrendadores (búsqueda, filtros, pagos)         | 40h             |
| 7–8    | Integración con mapas y pasarela de pagos (PayU)                         | 30h             |
| 9–10   | Desarrollo del panel de administración                                   | 35h             |
| 11     | Testing, QA y ajustes de seguridad                                       | 25h             |
| 12     | Despliegue inicial y documentación                                       | 20h             |
| Extra  | 1 mes de soporte y mantenimiento post-lanzamiento                       | Incluido        |

---

## 4. Condiciones del Proyecto

### Costo Total del Desarrollo

- **Tarifa por hora:** 8 USD
- **Horas estimadas:** 240
- **Costo total:** **1,920 USD**

### Plazos de Entrega
El proyecto se entregará en un plazo aproximado de 12 semanas a partir de la fecha de inicio acordada y la recepción del primer pago.

- 12 semanas de desarrollo efectivo
- Entregas parciales semanales con revisión del avance

### Pagos y Plazos

- Costo total del desarrollo: **$1920 USD**.
- El pago se dividirá en tres (3) cuotas mensuales:
  - **Pago 1 (Adelanto): $640 USD** al inicio del proyecto para comenzar el Mes 1.
  - **Pago 2: $640 USD** al finalizar el Mes 1 y antes de iniciar el desarrollo del Mes 2.
  - **Pago 3: $640 USD** al finalizar el Mes 2 y antes de iniciar el desarrollo del Mes 3.
- Los pagos se realizarán mediante el método acordado (Efectivo, PayPal o transferencia bancaria).

### Revisión y Mantenimiento:

- Se incluye **1 mes de revisión y mantenimiento gratuito** posterior a la entrega final. Este periodo cubre la corrección de bugs o errores de funcionamiento que surjan del código desarrollado y que estuvieran contemplados en el alcance original.
- No incluye desarrollo de nuevas funcionalidades o cambios mayores no contemplados en esta propuesta. Estos se cotizarán de forma adicional.

### Costos de Infraestructura (Por cuenta del Cliente):
- El cliente será responsable de todos los costos asociados a la infraestructura necesaria para el funcionamiento de la plataforma:
  - Registro de Nombre de Dominio.
  - Servicio de Hosting o Servidor Web (VPS, Cloud, etc.).
  - Certificado SSL.
  - Cuentas de servicios de terceros (ej. cuenta de PayU y posibles comisiones por transacción que ellos cobren, servicios de envío de email si se usa uno especializado como SendGrid/Mailgun).

### Comunicaciones y Retroalimentación:

- Se mantendrá comunicación regular (ej. semanal) para reportar avances y resolver dudas.
- El cliente se compromete a proveer retroalimentación y materiales necesarios (logos, textos específicos, acceso a cuenta PayU para configuración) de manera oportuna para no retrasar el cronograma.

---

## 5. Alcance del proyecto

Esta cotización cubre exclusivamente las funcionalidades y módulos descritos anteriormente. Cualquier funcionalidad adicional o cambio significativo en el alcance requerirá una reevaluación y una cotización complementaria.
