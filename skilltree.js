/*
 * @Descripttion: 这是一段狗屎代码
 * @version: 1.0.0
 * @Author: michael
 * @Date: 2022-12-11 20:17:58
 * @LastEditors: michael
 * @LastEditTime: 2023-01-03 14:24:39
 */

(function (window) {
//     let appTemplate = `<div id="active_background_fixed" class="well" style="max-width:44em;">
//     <h4>Active background</h4>
//     <p><code>background:false</code> will enable interaction with background content (hover, click, etc.), while the popup is visible, as the background div will not be added to DOM.</p>
//     <p><code>horizontal</code> and <code>vertical</code> will set the position.</p>
//     <p><code>keepfocus:false</code> will prevent locking tabbing inside of popup, and leave a focus on the opening element.</p>
//     <p><code>autozindex</code> will keep the popup on top of all other elements on the page.</p>
// <pre class="prettyprint">
// <code>$('#active_background_fixed').popup({
//   background: false,
//   horizontal: 'right',
//   vertical: 'bottom',
//   keepfocus: false,
//   autozindex: true,
//   blur: false
// });</code>
// </pre>
//     <button class="active_background_fixed_close active_background_absolute_open btn btn-success">Next Example</button>
// </div>`;

    // let githubApp = new Vue({
    //     data: {
    //         message: 'Hello world!',
    //         userInfo: {'login':'Unknown',
    //         'public_repos':'...',
    //         'public_gists':'...',
    //         'followers':'...'}
    //     },
    //     methods: {
    //         getUserId(url) {
    //             let userId = '';
    //             let regex = /github.com\/([^\/]*).*/;
    //             let found = url.match(regex);
    //             if (found && found.length > 1) {
    //                 userId = found[1];
    //                 this.getUserInfo(userId);
    //             }
    //         },
    //         getUserInfo(userId) {
    //             fetch('https://api.github.com/users/' + userId).then(res => {
    //                 return res.json();
    //             }).then(json => {
    //                     this.userInfo = json;
    //                 }
    //             );
    //         }
    //     },
    //     created: function () {
    //         this.getUserId(window.location.toString());
    //     }
    // });

    let appTemplate = `<div id="active_background_fixed" class="well" style="max-width:28rem; background-color: #eeeeee;">
    <div class="container">
        <div class="row">
            <div style="background-color: #f9fafb;line-height:2.5em">
                天赋树SkillTree
            </div>
        </div>
        <div class="row g-3" style="margin-top: 10px;background-color: #f9fafb;">
            <span>图谱</span>
            <div class="col" v-for="(value, key, index) in zoom">
                <div class="card">
                    <img src="WechatIMG1.jpeg" class="card-img-top img-show" alt="测试">
                </div>
                <span>中国纸膜技术adfa asdfa </span>
            </div>
            
        </div>

        <div class="row g-3" style="margin-top: 10px;background-color: #f9fafb;">
            <span>图谱</span>
            <div class="col">
                <div class="card">
                    <img src="WechatIMG1.jpeg" class="card-img-top img-show" alt="测试">
                </div>
                <span>中国纸膜技术adfa asdfa </span>
            </div>
            
        </div>
        <div class="row g-3" style="margin-top: 10px;background-color: #f9fafb;">
            <span>图谱</span>
            <div class="col">
                <div class="card">
                    <img src="WechatIMG1.jpeg" class="card-img-top img-show" alt="测试">
                </div>
                <span>中国纸膜技术adfa asdfa </span>
            </div>
        </div>
    </div>
</div>`;

    let githubApp = new Vue({
        data: {
            zoom: []
        },
        methods: {
            getUserId(url) {
                let userId = '';
                let regex = /github.com\/([^\/]*).*/;
                let found = url.match(regex);
                if (found && found.length > 1) {
                    userId = found[1];
                    this.getUserInfo(userId);
                }
            },
            getUserInfo(userId) {
                fetch('https://api.github.com/users/' + userId).then(res => {
                    return res.json();
                }).then(json => {
                        this.userInfo = json;
                    }
                );
            }
        },
        created: function () {
            console.log("打印******");
        }
    });

    window.skilltree = {
        startApp() {
            jq('body').append(appTemplate);
            githubApp.$mount('#active_background_fixed');
            jq('#active_background_fixed').popup({
                autoopen: true,
                background: false,
                horizontal: 'right',
                vertical: 'bottom',
                keepfocus: false,
                autozindex: true,
                blur: false,
                closebutton: false
            });
        }

    };
})(window);