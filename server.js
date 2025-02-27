const express = require("express");
const ajv = require("./schemas");

const app = express();
app.use(express.json());

// Función para validar JSON
function validateJSON(json, schemaName) {
  const validate = ajv.getSchema(schemaName);
  if (validate(json)) {
    return { valid: true };
  } else {
    return { valid: false, errors: validate.errors };
  }
}

//Validar piloto de carreras
app.post("/validate-driver", (req, res) => {
  const result = validateJSON(req.body, "driver");
  if (result.valid) {
    res.status(200).json({ message: "Piloto válido" });
  } else {
    res.status(400).json({ error: "Piloto inválido", details: result.errors });
  }
});

//Validar equipo de fútbol
app.post("/validate-team", (req, res) => {
  const result = validateJSON(req.body, "footballTeam");
  if (result.valid) {
    res.status(200).json({ message: "Equipo de fútbol válido" });
  } else {
    res.status(400).json({ error: "Equipo de fútbol inválido", details: result.errors });
  }
});

// Iniciar servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
