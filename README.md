# 🌌 OjitosInsanos — Tienda Gamer

Proyecto académico (CIBERTEC — 2025) construido con HTML, CSS y JavaScript para una plataforma web de venta y gestión de productos digitales (videojuegos para PC). Interfaz estilo gamer neon, catálogo por secciones y un carrito dinámico con guardado en LocalStorage y exportación a archivo .txt.

---

## 🎯 Resumen rápido
- Carrito de compras dinámico: agrega, elimina y administra productos en tiempo real.
- Guardado persistente: el carrito se mantiene con LocalStorage.
- Exportación a .txt: al ver el carrito, se genera/descarga un archivo de texto con la información de la compra.
- Catálogo por secciones y sección de ofertas.
- Diseño responsive con efectos neon y animaciones.

---

## ✨ Características principales

- 🛒 Carrito interactivo (añadir, eliminar, modificar cantidades).
- 💾 Guardado automático en LocalStorage para mantener el estado entre recargas.
- 📄 Generación de archivo "Carrito_OjitoInsano.txt" con el detalle de la compra.
- 🔥 Sección de Ofertas y catálogo con imágenes y precios.
- 🎨 Estética gamer: sombras, bordes luminosos y animaciones suaves.
- ♿ Estructura HTML semántica y estilos CSS organizados.

---

## 🚀 Instalación y uso (rápido)

1. Clona el repositorio:
   git clone https://github.com/luisespinozazapata/OjitoInsano.git
2. Abre `index.html` (o la página principal) en tu navegador.
3. Navega por el catálogo y añade juegos al carrito.
4. Ve a la vista del carrito para ver el guardado y descargar el archivo .txt si aplica.

Nota: No requiere servidor; funciona abriendo los archivos localmente. Para funcionalidades que interactúen con el sistema de archivos más allá de la descarga .txt, podría requerirse un backend o ejecución con permisos especiales.

---

## 🧭 Cómo funciona el carrito y el guardado

- Al añadir un producto se actualiza el estado del carrito en memoria y se persiste en LocalStorage.
- La interfaz recalcula total y cantidad en tiempo real.
- Cuando el usuario abre la vista del carrito, se crea/descarga un archivo de texto con el contenido detallado (nombre del juego, precio, cantidad y total).
- El guardado en .txt sirve como comprobante offline y ejemplo de exportación simple sin backend.

---

## 🛠️ Tecnologías

- HTML5 — Estructura y vistas.
- CSS3 — Estilos, efectos neon y responsive.
- JavaScript — Lógica del carrito, eventos y persistencia (LocalStorage).
- Archivo .txt — Mecanismo de exportación de la información del carrito.

---

## 📸 Capturas del sistema

Inicio  
<img width="1365" height="641" alt="image" src="https://github.com/user-attachments/assets/81e43c59-e952-472c-99fa-61cee8360b69" />

Ofertas  
<img width="1366" height="642" alt="image" src="https://github.com/user-attachments/assets/ece22242-7859-471c-8ee5-9d31c07792b6" />

Juegos  
<img width="1366" height="641" alt="image" src="https://github.com/user-attachments/assets/b7cd7781-4145-42be-b4ce-ec073761d9b3" />

Sobre Nosotros  
<img width="1366" height="640" alt="image" src="https://github.com/user-attachments/assets/888808a9-8923-49d2-8a8e-308cb81daa4f" />

Contacto  
<img width="1365" height="641" alt="image" src="https://github.com/user-attachments/assets/7844c72a-6bd2-44ae-886b-91649aadf23c" />

Guardar carrito (vista y descarga)  
<img width="1366" height="643" alt="image" src="https://github.com/user-attachments/assets/e98c7d3f-3179-4e91-80cc-6261ef7d9af5" />

Ejemplo: Carrito_OjitoInsano.txt  
<img width="907" height="518" alt="image" src="https://github.com/user-attachments/assets/35d6eca4-f75e-426b-ba35-b7fcee2409ec" />

---

## 🤝 Contribuir

1. Haz un fork del proyecto.
2. Crea una rama: git checkout -b mejorar-readme
3. Realiza tus cambios y haz commit.
4. Abre un Pull Request describiendo tus mejoras.

Si quieres que suba este README bonito directamente al repositorio, puedo crear la rama y abrir el PR por ti.

---

## 📬 Contacto
Autor: luisespinozazapata  
Proyecto académico — CIBERTEC 2025

---

## 📝 Licencia
MIT (o la que prefieras). Añade un archivo LICENSE si quieres publicar el proyecto públicamente.

¡Gracias por revisar OjitosInsanos! Si quieres que lo deje aún más elegante (badges, demo en GitHub Pages, o un CONTRIBUTING.md), lo preparo y lo subo.
