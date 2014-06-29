var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/// <reference path="EventDispatcher.ts"/>
var sample;
(function (sample) {
    var BtnSample = (function (_super) {
        __extends(BtnSample, _super);
        function BtnSample(dom) {
            var _this = this;
            _super.call(this);
            this.dom = dom;
            dom.onclick = function () {
                _this.btnClick();
            };
        }
        BtnSample.prototype.btnClick = function () {
            this.dom.innerText = "クリック済み";
            this.dispatchEvent(new events.Event("clicked"));
        };

        BtnSample.prototype.getText = function () {
            return this.dom.innerText;
        };
        return BtnSample;
    })(events.EventDispatcher);
    sample.BtnSample = BtnSample;
})(sample || (sample = {}));
