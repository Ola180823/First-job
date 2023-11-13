//3
/*interface ManipulatorObject<T> {
 [key: string]: T[keyof T];
}
export class ObjectManipulator<T> {
    constructor(protected obj :
        ManipulatorObject<T>) {
        }       
       
        public set(key: keyof T, value: T[keyof T]): ObjectManipulator<T> {
            return new ObjectManipulator({...this.obj, [key]: value});
        }
        public get(key: keyof T): T[keyof T] {
            return this.obj[key];
    }
        public delete(key: keyof T):
        ObjectManipulator <T> {
            const newObj = {...this.obj};
            delete newObj[key];
            return new ObjectManipulator(newObj);
        }
    
        public getObject():
        ManipulatorObject<T> {
            return this.obj;
        }
    }*/