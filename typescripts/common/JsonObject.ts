export default abstract class JsonObjetc {

    public fromJson(obj: any, jsonObject: JSON) {
        for (let key in jsonObject) {
            if (!obj.hasOwnProperty(key)) {
                continue;
            }
            obj[key] = jsonObject[key];
        }
    }

}
