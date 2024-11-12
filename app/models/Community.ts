import { BSON, ObjectId } from "bson";

class Community{
    _id: ObjectId;
    name: string;
    description: string;
    tags: string[];
    category: string;
    admins: ObjectId[];
    members: ObjectId[]

    constructor(_id: ObjectId, name: string,description: string, tags:string[], category: string, admins: ObjectId[],members: ObjectId[]){
        this._id = _id;
        this.name = name;
        this.description = description;
        this.tags = tags;
        this.category = category;
        this.admins = admins;
        this.members = members;
    }
}