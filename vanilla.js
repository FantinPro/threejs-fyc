//
// Initialiser un programme shader, de façon à ce que WebGL sache comment dessiner nos données
//
function initShaderProgram(gl, vsSource, fsSource) {
  const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
  const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);

  // Créer le programme shader

  const shaderProgram = gl.createProgram();
  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);
  gl.linkProgram(shaderProgram);

  // Si la création du programme shader a échoué, alerte

  if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
    alert(
      "Impossible d'initialiser le programme shader : " +
        gl.getProgramInfoLog(shaderProgram)
    );
    return null;
  }

  return shaderProgram;
}

//
// Crée un shader du type fourni, charge le source et le compile.
//
function loadShader(gl, type, source) {
  const shader = gl.createShader(type);

  // Envoyer le source à l'objet shader

  gl.shaderSource(shader, source);

  // Compiler le programme shader

  gl.compileShader(shader);

  // Vérifier s'il a ét compilé avec succès

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    alert(
      "An error occurred compiling the shaders: " + gl.getShaderInfoLog(shader)
    );
    gl.deleteShader(shader);
    return null;
  }

  return shader;
}

const canvas = document.querySelector("#glCanvas");
// Initialisation du contexte WebGL
const gl = canvas.getContext("webgl");

// Continuer seulement si WebGL est disponible et fonctionnel
if (!gl) {
  alert(
    "Impossible d'initialiser WebGL. Votre navigateur ou votre machine peut ne pas le supporter."
  );
  return;
}

// Définir la couleur d'effacement comme étant le noir, complètement opaque
gl.clearColor(0.0, 0.0, 0.0, 1.0);
// Effacer le tampon de couleur avec la couleur d'effacement spécifiée
gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
const shaderProgram = initShaderProgram(gl, vsSource, fsSource);
