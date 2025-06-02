
import React from 'react';
import { TutorialStepData } from './types';

export const tutorialSteps: TutorialStepData[] = [
  {
    title: "Paso 1: Configuración Inicial de FoxyProxy y Burp Suite",
    objective: "Configurar Firefox para que todo su tráfico pase a través de Burp Suite.",
    actions: [
      <li key="1-1">
        <strong>Abrir Burp Suite:</strong>
        <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
          <li>Inicia Burp Suite.</li>
          <li>Selecciona <code className="bg-gray-700 px-1 rounded text-sm">Temporary project</code> y haz clic en <code className="bg-gray-700 px-1 rounded text-sm">Next</code>.</li>
          <li>Usa <code className="bg-gray-700 px-1 rounded text-sm">Use Burp defaults</code> y haz clic en <code className="bg-gray-700 px-1 rounded text-sm">Start Burp</code>.</li>
          <li>(Opcional: Si aparece el mensaje "Burp Suite is out of date", puedes marcar <code className="bg-gray-700 px-1 rounded text-sm">Don't show again for this version</code> y hacer clic en <code className="bg-gray-700 px-1 rounded text-sm">OK</code>).</li>
        </ul>
      </li>,
      <li key="1-2" className="mt-2">
        <strong>Configurar FoxyProxy en Firefox:</strong>
        <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
          <li>Abre Firefox.</li>
          <li>Haz clic en el icono de FoxyProxy (generalmente un zorro) en la barra de herramientas.</li>
          <li>Selecciona <strong>"Opciones"</strong>.</li>
          <li>Si te pide permisos de navegación privada, haz clic en <strong>"Aceptar"</strong>.</li>
          <li>En la pestaña "FoxyProxy Opciones":
            <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
              <li>Haz clic en <strong>"Proxies"</strong> en el menú de la izquierda (o puede que ya estés ahí).</li>
              <li>Haz clic en <strong>"Añadir"</strong> (o si ya tienes una configuración de Burp, edítala).</li>
              <li><strong>Configura los siguientes campos:</strong>
                <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                  <li><strong>Título o Descripción:</strong> <code className="bg-gray-700 px-1 rounded text-sm">Burp</code> (o el nombre que prefieras)</li>
                  <li><strong>Tipo de Proxy:</strong> HTTP</li>
                  <li><strong>Hostname o Dirección IP:</strong> <code className="bg-gray-700 px-1 rounded text-sm">127.0.0.1</code></li>
                  <li><strong>Puerto:</strong> <code className="bg-gray-700 px-1 rounded text-sm">8080</code></li>
                  <li><strong>Color de la Pestaña:</strong> Elige un color distintivo (opcional, en la imagen de referencia se usa rojo).</li>
                  <li>Haz clic en <strong>"Save"</strong>.</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>Cierra la pestaña de opciones de FoxyProxy.</li>
          <li>Haz clic de nuevo en el icono de FoxyProxy y selecciona la configuración que acabas de crear (ej. "Burp"). El icono debería cambiar de color o indicar que el proxy está activo.</li>
        </ul>
      </li>
    ]
  },
  {
    title: "Paso 2: Importar el Certificado CA de Burp en Firefox",
    objective: "Permitir que Firefox confíe en el certificado de Burp para interceptar tráfico HTTPS sin errores de seguridad.",
    actions: [
      <li key="2-1">
        <strong>En Burp Suite:</strong>
        <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
          <li>Ve a la pestaña <strong>Proxy</strong> &rarr; <strong>Options</strong>.</li>
          <li>Asegúrate de que el proxy listener (<code className="bg-gray-700 px-1 rounded text-sm">127.0.0.1:8080</code>) esté activo (marcado en la columna "Running").</li>
          <li>Haz clic en <strong>"Import / export CA certificate"</strong>.</li>
          <li>Elige <strong>"Export Certificate in DER format"</strong>.</li>
          <li>Haz clic en <strong>"Next"</strong>.</li>
          <li>Haz clic en <strong>"Select file..."</strong>, navega a tu carpeta de Descargas (o donde quieras guardarlo), nombra el archivo (ej. <code className="bg-gray-700 px-1 rounded text-sm">cacert.der</code>) y haz clic en <strong>"Save"</strong>.</li>
          <li>Haz clic en <strong>"Next"</strong> y luego en <strong>"Close"</strong>.</li>
        </ul>
      </li>,
      <li key="2-2" className="mt-2">
        <strong>En Firefox:</strong>
        <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
          <li>Abre el menú de Firefox (icono de hamburguesa) &rarr; <strong>Settings</strong> (Ajustes).</li>
          <li>En la barra de búsqueda de los ajustes, escribe <code className="bg-gray-700 px-1 rounded text-sm">certificates</code> (o <code className="bg-gray-700 px-1 rounded text-sm">certificados</code>).</li>
          <li>Haz clic en <strong>"View Certificates..."</strong> (Ver certificados...).</li>
          <li>En la ventana "Certificate Manager" (Administrador de certificados):
            <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
              <li>Ve a la pestaña <strong>"Authorities"</strong> (Autoridades).</li>
              <li>Haz clic en <strong>"Import..."</strong>.</li>
              <li>Navega a la carpeta donde guardaste <code className="bg-gray-700 px-1 rounded text-sm">cacert.der</code>, selecciónalo y haz clic en <strong>"Open"</strong>.</li>
              <li>En la ventana emergente "Downloading Certificate" (Descargando certificado):
                <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                  <li>Marca la casilla <strong>"Trust this CA to identify websites"</strong> (Confiar en esta CA para identificar sitios web).</li>
                  <li>Haz clic en <strong>"OK"</strong>.</li>
                </ul>
              </li>
              <li>Haz clic en <strong>"OK"</strong> para cerrar el Administrador de certificados.</li>
            </ul>
          </li>
          <li>Cierra y vuelve a abrir Firefox, o simplemente intenta recargar la página del laboratorio. Si el proxy está activo, ahora deberías poder navegar sitios HTTPS sin advertencias de seguridad (a menos que el interceptor de Burp esté activado).</li>
        </ul>
      </li>
    ]
  },
  {
    title: "Paso 3: Acceder al Laboratorio y Capturar una Petición de Login",
    objective: "Acceder al laboratorio de PortSwigger y capturar una petición de inicio de sesión para analizarla.",
    actions: [
        <li key="3-1">
            <strong>Navegar al Laboratorio:</strong>
            <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                <li>En Firefox (con FoxyProxy configurado para Burp y el certificado importado):</li>
                <li>Ve a <code className="bg-gray-700 px-1 rounded text-sm">https://portswigger.net/web-security</code>.</li>
                <li>Busca la sección de "Authentication".</li>
                <li>Dentro de "Vulnerabilities in password-based authentication", localiza el laboratorio llamado <strong>"Username enumeration via different responses"</strong>.</li>
                <li>Haz clic en <strong>"Access the Lab"</strong>. Se abrirá una nueva pestaña con el laboratorio.</li>
            </ul>
        </li>,
        <li key="3-2" className="mt-2">
            <strong>Capturar la Petición de Login:</strong>
            <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                <li>En la página del laboratorio, haz clic en <strong>"My account"</strong> para ir a la página de login.</li>
                <li><strong>En Burp Suite:</strong> Ve a la pestaña <strong>Proxy</strong> &rarr; <strong>Intercept</strong>. Asegúrate de que el botón diga <strong>"Intercept is on"</strong>.</li>
                <li><strong>En Firefox (página de login del laboratorio):</strong>
                    <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                        <li>Escribe un nombre de usuario cualquiera (ej. <code className="bg-gray-700 px-1 rounded text-sm">testuser</code>) y una contraseña cualquiera (ej. <code className="bg-gray-700 px-1 rounded text-sm">testpass</code>).</li>
                        <li>Haz clic en <strong>"Log in"</strong>.</li>
                    </ul>
                </li>
                <li>La petición será interceptada por Burp Suite. Deberías verla en la pestaña <strong>Proxy &rarr; Intercept</strong>.</li>
                <li>Observa la petición. Verás los parámetros <code className="bg-gray-700 px-1 rounded text-sm">username</code> y <code className="bg-gray-700 px-1 rounded text-sm">password</code>.</li>
                <li>Haz clic en <strong>"Forward"</strong> varias veces hasta que la petición se complete y veas la respuesta en el navegador (probablemente "Invalid username" o "Incorrect password").</li>
                <li><strong>En Burp Suite:</strong> Vuelve a la pestaña <strong>Proxy &rarr; Intercept</strong> y pon <strong>"Intercept is off"</strong>.</li>
            </ul>
        </li>
    ]
  },
  {
    title: "Paso 4: Enumerar Nombres de Usuario con Burp Intruder",
    objective: "Usar Burp Intruder para probar una lista de nombres de usuario comunes y encontrar uno válido basándose en la respuesta del servidor.",
    actions: [
        <li key="4-1">
            <strong>Enviar Petición a Intruder:</strong>
            <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                <li>En Burp Suite, ve a la pestaña <strong>Proxy</strong> &rarr; <strong>HTTP history</strong>.</li>
                <li>Localiza la petición <code className="bg-gray-700 px-1 rounded text-sm">POST /login</code> que acabas de hacer. Selecciónala.</li>
                <li>Haz clic derecho sobre la petición y selecciona <strong>"Send to Intruder"</strong>.</li>
            </ul>
        </li>,
        <li key="4-2" className="mt-2">
            <strong>Configurar Posiciones en Intruder:</strong>
            <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                <li>Ve a la pestaña <strong>Intruder</strong>. Se abrirá automáticamente en la sub-pestaña <strong>"Target"</strong>, pero debes ir a la sub-pestaña <strong>"Positions"</strong>.</li>
                <li>Por defecto, Burp puede haber marcado varias posiciones de payload. Haz clic en el botón <strong>"Clear §"</strong> a la derecha para desmarcar todo.</li>
                <li>En el cuerpo de la petición (abajo), selecciona <strong>únicamente el valor</strong> del parámetro <code className="bg-gray-700 px-1 rounded text-sm">username</code> (ej. <code className="bg-gray-700 px-1 rounded text-sm">testuser</code>).</li>
                <li>Haz clic en el botón <strong>"Add §"</strong>. Esto definirá el punto de inyección para el payload.</li>
                <li>El <strong>"Attack type"</strong> (Tipo de ataque) debería ser <strong>"Sniper"</strong> (es el adecuado para un solo conjunto de payloads en una sola posición).</li>
            </ul>
        </li>,
        <li key="4-3" className="mt-2">
            <strong>Configurar Payloads en Intruder:</strong>
            <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                <li>Ve a la sub-pestaña <strong>"Payloads"</strong>.</li>
                <li>En <strong>"Payload set: 1"</strong> (ya que solo hay un <code className="bg-gray-700 px-1 rounded text-sm">§</code>).</li>
                <li><strong>"Payload type:"</strong> selecciona <strong>"Simple list"</strong>.</li>
                <li><strong>En Firefox</strong>, vuelve a la descripción del laboratorio ("Username enumeration via different responses").</li>
                <li>Haz clic en el enlace <strong>"Candidate usernames"</strong>. Se abrirá una página con una lista de nombres de usuario.</li>
                <li>Selecciona y copia (<code className="bg-gray-700 px-1 rounded text-sm">Ctrl+C</code>) toda la lista de nombres de usuario.</li>
                <li><strong>En Burp Intruder</strong>, en la sección <strong>"Payload Options"</strong> para "Simple list":
                    <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                        <li>Haz clic en <strong>"Paste"</strong> para pegar la lista de nombres de usuario. Deberías ver la lista de usuarios en el cuadro.</li>
                    </ul>
                </li>
            </ul>
        </li>,
        <li key="4-4" className="mt-2">
            <strong>Iniciar Ataque y Analizar Resultados (Username):</strong>
            <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                <li>Haz clic en el botón <strong>"Start attack"</strong> en la esquina superior derecha de la ventana de Intruder.</li>
                <li>Se abrirá una nueva ventana ("Intruder attack").</li>
                <li>(Si aparece un aviso sobre la versión Community, haz clic en "OK").</li>
                <li>Observa las columnas, especialmente <strong>"Status"</strong> y <strong>"Length"</strong>.</li>
                <li>Espera a que el ataque complete algunas peticiones.</li>
                <li><strong>Busca una anomalía:</strong> La mayoría de los intentos con usuarios inválidos tendrán un código de estado (ej. 200) y una longitud de respuesta similares. Un nombre de usuario VÁLIDO a menudo produce una respuesta con una <strong>longitud diferente</strong> (aunque el código de estado sea el mismo).</li>
                <li>En este caso, el usuario <code className="bg-gray-700 px-1 rounded text-sm">academic</code> produce una longitud de respuesta diferente (ej. 3170) comparado con los demás (ej. 3248). Este es tu usuario válido.</li>
                <li>Una vez identificado, puedes hacer clic en "Attack" &rarr; "Pause" y luego "Attack" &rarr; "Close attack window" (o "Discard" si te pregunta).</li>
            </ul>
        </li>
    ]
  },
  {
    title: "Paso 5: Enumerar Contraseñas para el Usuario Válido",
    objective: "Usar Burp Intruder para probar una lista de contraseñas comunes contra el nombre de usuario válido encontrado.",
    actions: [
        <li key="5-1">
            <strong>Modificar Petición en Intruder:</strong>
            <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                <li>Vuelve a la pestaña principal de Burp Suite &rarr; <strong>Intruder</strong> &rarr; <strong>"Positions"</strong>.</li>
                <li>Haz clic en <strong>"Clear §"</strong> para borrar la marca de payload del username.</li>
                <li>Cambia el valor del parámetro <code className="bg-gray-700 px-1 rounded text-sm">username</code> al usuario válido que encontraste (ej. <code className="bg-gray-700 px-1 rounded text-sm">academic</code>).</li>
                <li>Ahora, selecciona <strong>únicamente el valor</strong> del parámetro <code className="bg-gray-700 px-1 rounded text-sm">password</code> (ej. <code className="bg-gray-700 px-1 rounded text-sm">testpass</code>).</li>
                <li>Haz clic en el botón <strong>"Add §"</strong>.</li>
            </ul>
        </li>,
        <li key="5-2" className="mt-2">
            <strong>Configurar Payloads (Password):</strong>
            <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                <li>Ve a la sub-pestaña <strong>"Payloads"</strong>.</li>
                <li>En <strong>"Payload set: 1"</strong>.</li>
                <li><strong>"Payload type:"</strong> sigue siendo <strong>"Simple list"</strong>.</li>
                <li><strong>En Firefox</strong>, vuelve a la descripción del laboratorio.</li>
                <li>Haz clic en el enlace <strong>"Candidate passwords"</strong>. Se abrirá una página con una lista de contraseñas.</li>
                <li>Selecciona y copia (<code className="bg-gray-700 px-1 rounded text-sm">Ctrl+C</code>) toda la lista de contraseñas.</li>
                <li><strong>En Burp Intruder</strong>, en la sección <strong>"Payload Options"</strong>:
                    <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                        <li>Haz clic en <strong>"Clear"</strong> para borrar la lista de usuarios anterior.</li>
                        <li>Haz clic en <strong>"Paste"</strong> para pegar la lista de contraseñas.</li>
                    </ul>
                </li>
            </ul>
        </li>,
        <li key="5-3" className="mt-2">
            <strong>Configurar Opciones de Grep (Opcional pero útil):</strong>
            <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                <li>Ve a la sub-pestaña <strong>"Options"</strong>.</li>
                <li>Baja hasta la sección <strong>"Grep - Match"</strong>.</li>
                <li>Haz clic en <strong>"Clear"</strong> para borrar las reglas predeterminadas.</li>
                <li>Haz clic en <strong>"Add"</strong>. En el cuadro de texto que aparece, escribe el mensaje exacto de error para una contraseña incorrecta (cuando el usuario es válido). Por ejemplo: <code className="bg-gray-700 px-1 rounded text-sm">Incorrect password</code> (verifica esto en el navegador si es necesario con un intento manual).</li>
                <li>Haz clic en <strong>"OK"</strong>. Esto añadirá una columna a los resultados del ataque, marcando las respuestas que contengan esa frase.</li>
            </ul>
        </li>,
        <li key="5-4" className="mt-2">
            <strong>Iniciar Ataque y Analizar Resultados (Password):</strong>
            <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                <li>Haz clic en el botón <strong>"Start attack"</strong>.</li>
                <li>Se abrirá una nueva ventana ("Intruder attack").</li>
                <li>Observa las columnas <strong>"Status"</strong>, <strong>"Length"</strong> y la columna de "Grep - Match" (si la configuraste).</li>
                <li><strong>Busca una anomalía:</strong>
                    <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                        <li>Si el login es exitoso, el <strong>Status code</strong> será diferente (probablemente un <code className="bg-gray-700 px-1 rounded text-sm">302 Found</code> que indica una redirección).</li>
                        <li>La <strong>Length</strong> de la respuesta también será diferente.</li>
                        <li>La columna "Grep - Match" (ej. "Incorrect password") <strong>NO</strong> estará marcada para la contraseña correcta.</li>
                    </ul>
                </li>
                <li>En este caso, la contraseña <code className="bg-gray-700 px-1 rounded text-sm">soccer</code> para el usuario <code className="bg-gray-700 px-1 rounded text-sm">academic</code> es la que produce una respuesta <code className="bg-gray-700 px-1 rounded text-sm">302 Found</code> y tiene una longitud diferente.</li>
                <li>Una vez identificada la contraseña, puedes pausar y cerrar la ventana del ataque.</li>
            </ul>
        </li>
    ]
  },
  {
    title: "Paso 6: Iniciar Sesión y Completar el Laboratorio",
    objective: "Usar las credenciales encontradas para iniciar sesión y resolver el laboratorio.",
    actions: [
        <li key="6-1">
            <strong>En Firefox:</strong>
            <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                <li>Vuelve a la pestaña del laboratorio donde está la página de login.</li>
                <li>Asegúrate de que FoxyProxy esté <strong>DESACTIVADO</strong> (elige "Turn Off FoxyProxy" o "Use system proxy settings") O que en Burp Suite <strong>Proxy &rarr; Intercept</strong> esté en <strong>"Intercept is off"</strong>. Esto es para que la petición de login final no sea interceptada.</li>
                <li>Introduce el nombre de usuario válido: <code className="bg-gray-700 px-1 rounded text-sm">academic</code></li>
                <li>Introduce la contraseña válida: <code className="bg-gray-700 px-1 rounded text-sm">soccer</code></li>
                <li>Haz clic en <strong>"Log in"</strong>.</li>
                <li>Deberías ver un mensaje de "Congratulations, you solved the lab!".</li>
            </ul>
        </li>,
        <li key="6-2" className="mt-2">
           <strong>¡Felicidades!</strong> Has completado el laboratorio.
        </li>
    ]
  },
  {
    title: "Paso 7: Notas Adicionales sobre el Video",
    objective: "Observaciones y consejos adicionales basados en el video de referencia.",
    actions: [
        <li key="7-1">
            <strong>tipAlex:</strong> Muestras cómo aumentar la memoria RAM de Burp Suite. Esto es útil para ataques grandes, pero no estrictamente necesario para este laboratorio en particular con la edición Community. Si lo haces, se edita el script de inicio de Burp (<code className="bg-gray-700 px-1 rounded text-sm">burpsuite_community.sh</code> en Linux) o se usan opciones de JVM al lanzarlo.
        </li>,
        <li key="7-2" className="mt-2">
            <strong>tipAlex:</strong> Te aparece el error "No se ha conectado: Posible problema de seguridad". Esto es porque FoxyProxy está activo y dirigiendo el tráfico a Burp, pero el certificado CA de Burp aún no ha sido importado en Firefox. El Paso 2 de este tutorial soluciona esto.
        </li>,
        <li key="7-3" className="mt-2">
            <strong>tipAlex:</strong> Vas a la página <code className="bg-gray-700 px-1 rounded text-sm">https://portswigger.net/web-security/sql-injection</code> y luego a la página de addons de Firefox, y finalmente a <code className="bg-gray-700 px-1 rounded text-sm">http://burp</code>. Esto es para descargar el certificado CA.
        </li>,
        <li key="7-4" className="mt-2">
            <strong>tipAlex:</strong> Abres Burp Suite nuevamente, esto podría ser para reiniciar el ataque o empezar uno nuevo. El tutorial asume que continúas con la misma instancia de Burp o empiezas una nueva como se indica.
        </li>,
        <li key="7-5" className="mt-2">
            <strong>tipAlex:</strong> Se ven problemas de conexión a la red. Es importante asegurarse de que la conectividad a Internet general y la configuración del proxy (FoxyProxy y Burp Listener) son correctas si los ataques no parecen funcionar o dan errores de conexión.
        </li>
    ]
  }
];
