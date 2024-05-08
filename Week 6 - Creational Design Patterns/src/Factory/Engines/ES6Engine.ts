import ITemplateEngine from "../Interfaces/ITemplateEngine";

export default class EJSEngine implements ITemplateEngine {
  render(template: string, data: Object): string {
    // Assume EJS rendering logic
    return `Rendered with EJS: ${template}`;
  }
}
