export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;
    public timeCreate: string;

    constructor(name: string, desc: string, imagePath: string, timeCreate: string) {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.timeCreate = timeCreate;
    }
}