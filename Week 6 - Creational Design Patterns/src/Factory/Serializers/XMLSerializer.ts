import ISerializer from "../Interfaces/ISerializer";

export default class XMLSerializer implements ISerializer {
  serialize(data: Object): string {
    return `<data>${data.toString()}</data>`;
  }
}
