"use strict";
const post = {
    template: `
    <div class="post">
        <h3>{{$ctrl.item.title}}</h3>
        <p>{{$ctrl.item.thought}}</p>
        <p ng-click="$ctrl.removePost(index);" class="x">X</p>
    </div>
    `,
    bindings: {
        item: "<",
        removePost: "&"
    },
    controller:[function(){
        const vm = this;
    
    }]

}


angular
    .module("App")
    .component("post", post);