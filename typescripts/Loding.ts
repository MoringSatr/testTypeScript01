import Global from "./Global";
import {Socket} from "net";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Loding extends cc.Component {


    start() {
        Global.getInstance().load();
        setTimeout(() => {
            cc.director.loadScene("helloworld");
        }, 1000);
    }


}