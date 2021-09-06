

export class Helpers{


    public static log(arg1, arg2 = null) {
        console.log(arg1, arg2);
    }

    
    public static logjson(json: any) {
        console.log(JSON.stringify(json));
    }

}