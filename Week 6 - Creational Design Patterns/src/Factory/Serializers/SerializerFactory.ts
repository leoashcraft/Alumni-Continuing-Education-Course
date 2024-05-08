import ISerializer from "../Interfaces/ISerializer";
import JSONSerializer from "../Serializers/JSONSerializer";
import XMLSerializer from "../Serializers/XMLSerializer"; //

export default class SerializerFactory {
    static getSerializer(format: 'json' | 'xml'): ISerializer {
        switch (format) {
            case 'json': return new JSONSerializer();
            case 'xml': return new XMLSerializer();
            default: throw new Error("Unsupported format");
        }
    }
}