import fs from "fs";
import path from "path";

export function isJSON(path: string) {
  return path.endsWith(".json");
}

export function fileExists(path: string) {
  return fs.existsSync(path);
}

export function listJSON(...jsonPath: string[]) {
  const files = fs.readdirSync(path.join(...jsonPath));
  return files.filter((file) => file.endsWith(".json"));
}

//Semelhante ao GET http.
export function readJSON(...jsonFile: string[]) {
  const jsonFilePath = path.join(...jsonFile);

  if (fileExists(jsonFilePath) && isJSON(jsonFilePath)) {
    return JSON.parse(fs.readFileSync(jsonFilePath).toString());
  } else {
    throw new Error("JSON file does not exist!");
  }
}

//Semelhante ao POST http
export function createJSON(
  jsonFile: string[],
  jsonContent: any,
  indentSize = 2
) {
  const jsonFilePath = path.join(...jsonFile);
  if (!fileExists(jsonFilePath) && isJSON(jsonFilePath)) {
    fs.writeFileSync(
      jsonFilePath,
      JSON.stringify(jsonContent, null, indentSize)
    );
  } else {
    throw new Error("Ja existe um arquivo nesse caminho!");
  }
}

//Semelhante ao DELETE http
export function deleteJSON(...jsonFile: string[]) {
  const jsonFilePath = path.join(...jsonFile);
  if (fileExists(jsonFilePath) && isJSON(jsonFilePath)) {
    return fs.unlinkSync(jsonFilePath);
  } else {
    throw new Error("JSON file does not exist!");
  }
}

//Semelhante ao PUT http.(Alteração por completo)
export function overwriteJSON(
  jsonFile: string[],
  jsonContent: any,
  indentSize = 2
) {
  const jsonFilePath = path.join(...jsonFile);
  if (fileExists(jsonFilePath) && isJSON(jsonFilePath)) {
    fs.writeFileSync(
      jsonFilePath,
      JSON.stringify(jsonContent, null, indentSize)
    );
  } else {
    throw new Error("The file does not extists");
  }
}

//Semelhante ao PATCH http.(Alteração PARCIAL)
//TODO ESTUDAR DIFERENÇAS ENTRE JSON.parse(), JSON.stringify() E toString().
export function updateJSON(
  jsonFile: string[],
  jsonContent: any,
  indentSize = 2
) {
  const jsonFilePath = path.join(...jsonFile);

  if (!fileExists(jsonFilePath) || !isJSON(jsonFilePath)) {
    throw new Error("The file does not extists");
  }
  const currentJsonContent = JSON.parse(
    fs.readFileSync(jsonFilePath).toString()
  );
  const newJsonContent = {
    ...currentJsonContent,
    ...jsonContent,
  };
  fs.writeFileSync(
    jsonFilePath,
    JSON.stringify(newJsonContent, null, indentSize)
  );
}

//T0dos os métodos HTTP podem frealizar qualquer operação do CRUD, MAS NÃO É UMA BOA PRÁTICA. EX. GET para deletar.

//Generate fake people
// const people = [
//   { id: 1, name: "Gustavo", surname: "Silva", age: 25 },
//   { id: 2, name: "Fernanda", surname: "Souza", age: 32 },
//   { id: 3, name: "Lucas", surname: "Pereira", age: 21 },
//   { id: 4, name: "Mariana", surname: "Santos", age: 45 },
//   { id: 5, name: "Rafael", surname: "Oliveira", age: 29 },
//   { id: 6, name: "Isabela", surname: "Costa", age: 37 },
//   { id: 7, name: "Tiago", surname: "Rodrigues", age: 19 },
//   { id: 8, name: "Ana", surname: "Lima", age: 28 },
//   { id: 9, name: "Carlos", surname: "Ferreira", age: 53 },
//   { id: 10, name: "Julia", surname: "Martins", age: 24 },
// ];

// people.map((item) => {
//   createJSON(["..", "pessoas", `${item.id}.json`], item);
// });

//Exporta os módulos quando utilizando JS, e require()
// module.exports = {
//   readJSON,
//   createJSON,
//   replaceJSON,
//   deleteJSON,
//   updateJSON,
//   listJSON,
// };
