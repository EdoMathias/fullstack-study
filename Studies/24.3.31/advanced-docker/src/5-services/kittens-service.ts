import path from "path";
import { v4 as uuid } from "uuid";
import dal from "../2-utils/dal";
import { ValidationError } from "../3-models/error-models";
import KittenModel from "../3-models/kitten-model";

const imagesFolder = path.join(__dirname, "..", "1-assets/images");

async function getAllKittens(): Promise<KittenModel[]> {
    const kittens = await dal.loadKittens();
    for(const kitten of kittens) {
        kitten.imageUrl = "/api/kittens/images/" + kitten.imageName;
        delete kitten.imageName;
    }
    return kittens;
}

async function addKitten(kitten: KittenModel): Promise<KittenModel> {
    const error = kitten.validate();
    if(error) throw new ValidationError(error);
    const kittens = await dal.loadKittens();
    kitten.id = kittens[kittens.length - 1].id + 1;
    const extension = kitten.image.name.substring(kitten.image.name.lastIndexOf("."));
    kitten.imageName = uuid() + extension;
    await kitten.image.mv(path.join(imagesFolder, kitten.imageName));
    delete kitten.image;
    kittens.push(kitten);
    await dal.saveKittens(kittens);
    kitten.imageUrl = "/api/kittens/images/" + kitten.imageName;
    delete kitten.imageName;
    return kitten;
}

function getImagePath(imageName: string): string {
    return path.join(imagesFolder, imageName);
}

export default {
    getAllKittens,
    addKitten,
    getImagePath
};