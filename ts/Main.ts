/// <reference path="EventDispatcher.ts"/>
module sample {
    export class BtnSample extends events.EventDispatcher {
        constructor(public dom:HTMLElement) {
            super();
            dom.onclick = ()=>{
                this.btnClick();
            }
        }

        btnClick():void {
            this.dom.innerText = "クリック済み";
            this.dispatchEvent(new events.Event("clicked"));
        }

        getText():string {
            return this.dom.innerText;
        }
    }
}
