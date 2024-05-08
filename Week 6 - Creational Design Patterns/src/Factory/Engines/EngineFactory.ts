import ITemplateEngine from "../Interfaces/ITemplateEngine";
import HandleBarsEngine from "./HandleBarsEngine";
import EJSEngine from "./ES6Engine";

export default class EngineFactory {
    static getEngine(engine: 'handlebars' | 'ejs'): ITemplateEngine {
        switch (engine) {
            case 'handlebars': return new HandleBarsEngine();
            case 'ejs': return new EJSEngine();
            default: throw new Error("Unsupported engine");
        }
    }
}