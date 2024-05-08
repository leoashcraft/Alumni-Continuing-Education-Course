export default interface ITemplateEngine {
    render(template:string, data: Object): string;
}