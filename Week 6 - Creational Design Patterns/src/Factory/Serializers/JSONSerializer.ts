import ISeraializer from "../Interfaces/ISerializer";

export default class JSONSerializer implements ISeraializer {
  serialize(data: Object): string {
    return JSON.stringify(data);
  }
}
