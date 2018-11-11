"use strict";
const socialPosts = {
    template:`
    <section class="socialpost">
    <header>
    <h1>My Thoughts</h1>
    <button>New Post</button>
    </header>
    <section class="main">
    <post ng-repeat="item in $ctrl.postitem track by $index" item="item"></post>
    </section>
    </section>
    <post-form></post-form>
    `,
    bindings: {
    },
    controller: [function(){
        const vm = this;
        vm.postitem = [{
            title: "My day 1",
            thought: "Today was beautiful sunny day"
        },
         {
            title: "My day 2",
            thought: "Today was snowy day"
        },
        {
            title: "My day 3",
            thought: "Today was cloudy day"
        }
    
    ]

        vm.addPost = (newPost) => {
            vm.postitem.push(newPost);
            console.log(vm.postitem);
        };

        vm.removePost = (index) => {
            vm.postitem.splice(index,1);
        };
    }]




     


}





angular
    .module("App")
    .component("socialPosts", socialPosts);