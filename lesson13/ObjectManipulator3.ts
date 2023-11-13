//import { ManipulatorObject } from "./interface2";
//3
interface ManipulatorObject {
    [key: string]: any;
}

export class ObjectManipulator  {
    constructor(protected obj:  ManipulatorObject) {
        this. obj = obj;
    }

    public set(key: string, value: any): ObjectManipulator {
        return new ObjectManipulator({ ...this.obj, [key]: value });
    }
    public get(key:string): any {
        return this.obj[key];
    }
    public delete(key: string): ObjectManipulator {
        const newObj = { ...this.obj };
        delete newObj[key];
        return new ObjectManipulator(newObj);
    }

    public getObject(): ManipulatorObject {
        return this.obj;
    }
}