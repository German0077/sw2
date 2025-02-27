const Ajv2020 = require("ajv/dist/2020");
const ajv = new Ajv2020();

const schema_driver = require("./driver.schema.json");
const schema_football_team = require("./footballTeam.schema.json");

ajv.addSchema(schema_driver, "driver");
ajv.addSchema(schema_football_team, "footballTeam");

module.exports = ajv;
