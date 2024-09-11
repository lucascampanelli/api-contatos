export const pessoaSchema = {
    "required": [
      "nome",
      "email"
    ],
    "type": "object",
    "properties": {
      "nome": {
        "type": "string",
        "description": "Nome da referida pessoa"
      },
      "email": {
        "type": "string",
        "description": "Endereço eletrônico da pessoa"
      },
      "telefone": {
        "type": "string",
        "description": "Número de telefone da pessoa"
      },
      "tags": {
        "type": "array",
        "items": {
          "type": "string"
        },
        "description": "Tags de identificação da pessoa"
      }
    }
}