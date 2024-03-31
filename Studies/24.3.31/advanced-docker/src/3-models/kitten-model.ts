import { UploadedFile } from 'express-fileupload';

class KittenModel {

    public id: number;
    public name: string;
    public age: number;
    public image: UploadedFile;
    public imageName: string;
    public imageUrl: string;

    public constructor(kitten: KittenModel) {
        this.id = kitten.id;
        this.name = kitten.name;
        this.age = kitten.age;
        this.image = kitten.image;
        this.imageName = kitten.imageName;
        this.imageUrl = kitten.imageUrl;
    }

    public validate() {
        if(!this.name) return "Missing name.";
        if(!this.age) return "Missing age.";
        if(isNaN(this.age)) return "Age must be numeric.";
        if(this.age < 0) return "Age can't be negative.";
        if(!this.image) return "Missing image."
        return null;
    }
}

export default KittenModel;