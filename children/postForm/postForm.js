"use strict";
const postForm = {
    template: `
    <section ng-submit="$ctrl.addPost($ctrl.item);">
    <p>Title</p>
    <input ng-model="$ctrl.item.title"></input>
    <p>Thought</p>
    <input ng-model="$ctrl.item.thought"></input>
    <button>Add Post</button>
    </section>
    `,
    bindings: {
        addPost: "&"
    },
    controller: [function(){
        const vm = this;
    }]
}


angular
    .module("App")
    .component("postForm", postForm);