import ITemplateEngine from "../Interfaces/ITemplateEngine";

export default class HandleBarsEngine implements ITemplateEngine {
  render(template: string, data: Object): string {
    return `Rendered with Handlebars: ${template}`;
  }
}
