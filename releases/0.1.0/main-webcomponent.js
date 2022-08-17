(function () {

    let tmpl = document.createElement('template');
    tmpl.innerHTML = '\
    <style>\
        #scrollhelper-hint {\
            font-size: 50px;\
            background-color: #aaaaaa;\
            opacity: 0.5;\
            line-height: 64px;\
            height: 100%;\
            border-radius: 100%;\
            text-align: center;\
            display: none;\
        }\
        #scrollhelper-hint.visible {\
            display: block;\
        }\
    </style>\
    <div id="scrollhelper-hint" width="100%" height="100%" title="This widget is not visible during run time. Please use the API to show popovers.">i</div>\
    ';

    class ScrollHelper extends HTMLElement {
        constructor() {
            super();
            let shadowRoot = this.attachShadow({ mode: 'open' });
            shadowRoot.appendChild(tmpl.content.cloneNode(true));
            this.style.height = "100%";
            this.style.display = "block";
            if (document.body.querySelector(".sapAppBuildingOutlineCanvasSplitter")) {
                this.shadowRoot.querySelector("#scrollhelper-hint").className = "visible";
            }
        }

        set height(v) {
            this.style.height = v;
        }

        set width(v) {
            this.style.width = v;
        }

        set x(x) {
            document.querySelector(".sapLumiraStoryReusableLayoutScrollableContainer").scrollLeft = x;
        }

        set y(y) {
            document.querySelector(".sapLumiraStoryReusableLayoutScrollableContainer").scrollTop = y;
        }

        get x() {
            return document.querySelector(".sapLumiraStoryReusableLayoutScrollableContainer").scrollLeft;
        }

        get y() {
            return document.querySelector(".sapLumiraStoryReusableLayoutScrollableContainer").scrollTop;
        }

        getScrollX() {
            return this.x;
        }

        getScrollY() {
            return this.y;
        }

    }

    customElements.define('sdk-scrollhelper', ScrollHelper);

})();