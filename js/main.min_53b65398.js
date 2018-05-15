var __reflect=this&&this.__reflect||function(t,e,i){t.__class__=e,i?i.push(e):i=[e],t.__types__=t.__types__?i.concat(t.__types__):i},__extends=this&&this.__extends||function(t,e){function i(){this.constructor=t}for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);i.prototype=e.prototype,t.prototype=new i},__awaiter=this&&this.__awaiter||function(t,e,i,n){return new(i||(i=Promise))(function(r,a){function s(t){try{h(n.next(t))}catch(e){a(e)}}function o(t){try{h(n["throw"](t))}catch(e){a(e)}}function h(t){t.done?r(t.value):new i(function(e){e(t.value)}).then(s,o)}h((n=n.apply(t,e||[])).next())})},__generator=this&&this.__generator||function(t,e){function i(t){return function(e){return n([t,e])}}function n(i){if(r)throw new TypeError("Generator is already executing.");for(;h;)try{if(r=1,a&&(s=a[2&i[0]?"return":i[0]?"throw":"next"])&&!(s=s.call(a,i[1])).done)return s;switch(a=0,s&&(i=[0,s.value]),i[0]){case 0:case 1:s=i;break;case 4:return h.label++,{value:i[1],done:!1};case 5:h.label++,a=i[1],i=[0];continue;case 7:i=h.ops.pop(),h.trys.pop();continue;default:if(s=h.trys,!(s=s.length>0&&s[s.length-1])&&(6===i[0]||2===i[0])){h=0;continue}if(3===i[0]&&(!s||i[1]>s[0]&&i[1]<s[3])){h.label=i[1];break}if(6===i[0]&&h.label<s[1]){h.label=s[1],s=i;break}if(s&&h.label<s[2]){h.label=s[2],h.ops.push(i);break}s[2]&&h.ops.pop(),h.trys.pop();continue}i=e.call(t,h)}catch(n){i=[6,n],a=0}finally{r=s=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}var r,a,s,o,h={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return o={next:i(0),"throw":i(1),"return":i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o},barball;!function(t){var e=function(t){function e(e,i,n,r){var a=t.call(this)||this;return a.speed=15,a.bmp=new egret.Bitmap(e),a.direction=i,n&&(a.bmp.width=n,a.bmp.height=r),a.addChild(a.bmp),a}return __extends(e,t),Object.defineProperty(e.prototype,"CenterX",{get:function(){return this.x+this.bmp.width/2},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"CenterY",{get:function(){return this.y+this.bmp.height/2},enumerable:!0,configurable:!0}),e.prototype.setDirection=function(t){this.direction=t},e.prototype.getDirection=function(){return this.direction},e.prototype.setTouchObject=function(t){this.touchObject=t},e.prototype.getTouchObject=function(){return this.touchObject},e.prototype.setStageType=function(t){this.stageType=t},e.prototype.getStageType=function(){return this.stageType},e.prototype.setStarType=function(t){this.starType=t},e.prototype.getStarType=function(){return this.starType},e.prototype.move=function(){"Right-Down"==this.direction?(this.x=this.x+1,this.y=this.y+1):"Right-Up"==this.direction?(this.x=this.x+1,this.y=this.y-1):"Left-Up"==this.direction?(this.x=this.x-1,this.y=this.y-1):"Left-Down"==this.direction&&(this.x=this.x-1,this.y=this.y+1)},e.prototype.changeDir=function(){"Right-Up"==this.direction&&"Stage"==this.touchObject&&"Stage-Right"==this.stageType?this.setDirection("Left-Up"):"Right-Up"==this.direction&&"Stage"==this.touchObject&&"Stage-Top"==this.stageType?this.setDirection("Right-Down"):"Left-Up"==this.direction&&"Stage"==this.touchObject&&"Stage-Left"==this.stageType?this.setDirection("Right-Up"):"Left-Up"==this.direction&&"Stage"==this.touchObject&&"Stage-Top"==this.stageType?this.setDirection("Left-Down"):"Right-Down"==this.direction&&"Stage"==this.touchObject&&"Stage-Right"==this.stageType?this.setDirection("Left-Down"):"Right-Down"==this.direction&&"Stage"==this.touchObject&&"Stage-Bottom"==this.stageType?this.setDirection("Right-Up"):"Left-Down"==this.direction&&"Stage"==this.touchObject&&"Stage-Left"==this.stageType?this.setDirection("Right-Down"):"Left-Down"==this.direction&&"Stage"==this.touchObject&&"Stage-Bottom"==this.stageType?this.setDirection("Left-Up"):"Left-Down"==this.direction&&"Bar"==this.touchObject?this.setDirection("Left-Up"):"Right-Down"==this.direction&&"Bar"==this.touchObject?this.setDirection("Right-Up"):"Right-Up"==this.direction&&"Star"==this.touchObject&&"Star-Left"==this.starType?this.setDirection("Left-Up"):"Right-Up"==this.direction&&"Star"==this.touchObject&&"Star-Bottom"==this.starType?this.setDirection("Right-Down"):"Left-Up"==this.direction&&"Star"==this.touchObject&&"Star-Bottom"==this.starType?this.setDirection("Left-Down"):"Left-Up"==this.direction&&"Star"==this.touchObject&&"Star-Right"==this.starType?this.setDirection("Right-Up"):"Left-Down"==this.direction&&"Star"==this.touchObject&&"Star-Top"==this.starType?this.setDirection("Left-Up"):"Left-Down"==this.direction&&"Star"==this.touchObject&&"Star-Right"==this.starType?this.setDirection("Right-Down"):"Right-Down"==this.direction&&"Star"==this.touchObject&&"Star-Top"==this.starType?this.setDirection("Right-Up"):"Right-Down"==this.direction&&"Star"==this.touchObject&&"Star-Left"==this.starType&&this.setDirection("Left_Down")},e}(egret.DisplayObjectContainer);t.Ball=e,__reflect(e.prototype,"barball.Ball")}(barball||(barball={}));var AssetAdapter=function(){function t(){}return t.prototype.getAsset=function(t,e,i){function n(n){e.call(i,n,t)}if(RES.hasRes(t)){var r=RES.getRes(t);r?n(r):RES.getResAsync(t,n,this)}else RES.getResByUrl(t,n,this,RES.ResourceItem.TYPE_IMAGE)},t}();__reflect(AssetAdapter.prototype,"AssetAdapter",["eui.IAssetAdapter"]);var Main=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.isThemeLoadEnd=!1,e}return __extends(e,t),e.prototype.createChildren=function(){t.prototype.createChildren.call(this),egret.lifecycle.addLifecycleListener(function(t){}),egret.lifecycle.onPause=function(){egret.ticker.pause()},egret.lifecycle.onResume=function(){egret.ticker.resume()};var e=new AssetAdapter;egret.registerImplementation("eui.IAssetAdapter",e),egret.registerImplementation("eui.IThemeAdapter",new ThemeAdapter),RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE,this.onConfigComplete,this),this.runGame()["catch"](function(t){console.log(t)})},e.prototype.runGame=function(){return __awaiter(this,void 0,void 0,function(){var t,e;return __generator(this,function(i){switch(i.label){case 0:return[4,this.loadResource()];case 1:return i.sent(),this.createGameScene(),[4,RES.getResAsync("description_json")];case 2:return t=i.sent(),this.startAnimation(t),[4,platform.login()];case 3:return i.sent(),[4,platform.getUserInfo()];case 4:return e=i.sent(),console.log(e),[2]}})})},e.prototype.loadResource=function(){return __awaiter(this,void 0,void 0,function(){var t,e;return __generator(this,function(i){switch(i.label){case 0:return i.trys.push([0,5,,6]),t=new LoadingUI,this.stage.addChild(t),[4,RES.loadConfig("resource/default.res.json","resource/")];case 1:return i.sent(),[4,this.loadTheme()];case 2:return i.sent(),[4,RES.loadGroup("BallBall",0,t)];case 3:return i.sent(),[4,RES.loadGroup("preload",1,t)];case 4:return i.sent(),this.stage.removeChild(t),[3,6];case 5:return e=i.sent(),console.error(e),[3,6];case 6:return[2]}})})},e.prototype.loadTheme=function(){var t=this;return new Promise(function(e,i){var n=new eui.Theme("resource/default.thm.json",t.stage);n.addEventListener(eui.UIEvent.COMPLETE,function(){t.isThemeLoadEnd=!0,console.log("onThemeLoadComplete !"),e()},t)})},e.prototype.onConfigComplete=function(t){RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE,this.onConfigComplete,this),RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.onResourceLoadComplete,this)},e.prototype.onThemeLoadComplete=function(){this.isThemeLoadEnd=!0,console.log("onThemeLoadComplete !")},e.prototype.onResourceLoadComplete=function(t){"PanelUI"==t.groupName?console.log("onResourceLoadComplete PanelUI !"):"loading"==t.groupName?console.log("onResourceLoadComplete loading !"):(console.log("onResourceLoadComplete loading !  -- "+t.groupName),SoundManager.Instance().MainBGM||RES.getResAsync("bgm_mp3",function(t,e){SoundManager.Instance().MainBGM=t,SoundManager.Instance().bBGMComplete=!0,SoundManager.Instance().PlayMainBGM()},this),SoundManager.Instance().BtnEffect||RES.getResAsync("BtnEffect_mp3",function(t,e){SoundManager.Instance().BtnEffect=t,SoundManager.Instance().bEffectComplete=!0},this))},e.prototype.createGameScene=function(){var t=new barball.GameContainer;this.addChild(t)},e.prototype.createBitmapByName=function(t){var e=new egret.Bitmap,i=RES.getRes(t);return e.texture=i,e},e.prototype.startAnimation=function(t){return void console.log(t)},e.prototype.changeDescription=function(t,e){t.removeChildren();for(var i=0,n=0;n<e.length;n++){var r=e[n],a=new egret.TextField;a.x=i,a.anchorOffsetX=a.anchorOffsetY=0,a.textColor=parseInt(r.textColor),a.text=r.text,a.size=40,t.addChild(a),i+=a.width}},e}(eui.UILayer);__reflect(Main.prototype,"Main");var MainOld=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.prototype.createChildren=function(){t.prototype.createChildren.call(this),egret.lifecycle.addLifecycleListener(function(t){}),egret.lifecycle.onPause=function(){egret.ticker.pause()},egret.lifecycle.onResume=function(){egret.ticker.resume()};var e=new AssetAdapter;egret.registerImplementation("eui.IAssetAdapter",e),egret.registerImplementation("eui.IThemeAdapter",new ThemeAdapter),this.runGame()["catch"](function(t){console.log(t)})},e.prototype.runGame=function(){return __awaiter(this,void 0,void 0,function(){var t,e;return __generator(this,function(i){switch(i.label){case 0:return[4,this.loadResource()];case 1:return i.sent(),this.createGameScene(),[4,RES.getResAsync("description_json")];case 2:return t=i.sent(),this.startAnimation(t),[4,platform.login()];case 3:return i.sent(),[4,platform.getUserInfo()];case 4:return e=i.sent(),console.log(e),[2]}})})},e.prototype.loadResource=function(){return __awaiter(this,void 0,void 0,function(){var t,e;return __generator(this,function(i){switch(i.label){case 0:return i.trys.push([0,4,,5]),t=new LoadingUI,this.stage.addChild(t),[4,RES.loadConfig("resource/default.res.json","resource/")];case 1:return i.sent(),[4,this.loadTheme()];case 2:return i.sent(),[4,RES.loadGroup("preload",0,t)];case 3:return i.sent(),this.stage.removeChild(t),[3,5];case 4:return e=i.sent(),console.error(e),[3,5];case 5:return[2]}})})},e.prototype.loadTheme=function(){var t=this;return new Promise(function(e,i){var n=new eui.Theme("resource/default.thm.json",t.stage);n.addEventListener(eui.UIEvent.COMPLETE,function(){e()},t)})},e.prototype.createGameScene=function(){var t=this.createBitmapByName("bg_jpg");this.addChild(t);var e=this.stage.stageWidth,i=this.stage.stageHeight;t.width=e,t.height=i;var n=new egret.Shape;n.graphics.beginFill(0,.5),n.graphics.drawRect(0,0,e,172),n.graphics.endFill(),n.y=33,this.addChild(n);var r=this.createBitmapByName("egret_icon_png");this.addChild(r),r.x=26,r.y=33;var a=new egret.Shape;a.graphics.lineStyle(2,16777215),a.graphics.moveTo(0,0),a.graphics.lineTo(0,117),a.graphics.endFill(),a.x=172,a.y=61,this.addChild(a);var s=new egret.TextField;s.textColor=16777215,s.width=e-172,s.textAlign="center",s.text="Hello Egret",s.size=24,s.x=172,s.y=80,this.addChild(s);var o=new egret.TextField;this.addChild(o),o.alpha=0,o.width=e-172,o.textAlign=egret.HorizontalAlign.CENTER,o.size=24,o.textColor=16777215,o.x=172,o.y=135,this.textfield=o;var h=new eui.Button;h.label="Click!",h.horizontalCenter=0,h.verticalCenter=0,this.addChild(h),h.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onButtonClick,this)},e.prototype.createBitmapByName=function(t){var e=new egret.Bitmap,i=RES.getRes(t);return e.texture=i,e},e.prototype.startAnimation=function(t){var e=this,i=new egret.HtmlTextParser,n=t.map(function(t){return i.parse(t)}),r=this.textfield,a=-1,s=function(){a++,a>=n.length&&(a=0);var t=n[a];r.textFlow=t;var i=egret.Tween.get(r);i.to({alpha:1},200),i.wait(2e3),i.to({alpha:0},200),i.call(s,e)};s()},e.prototype.onButtonClick=function(t){var e=new eui.Panel;e.title="Title",e.horizontalCenter=0,e.verticalCenter=0,this.addChild(e)},e}(eui.UILayer);__reflect(MainOld.prototype,"MainOld");var DebugPlatform=function(){function t(){}return t.prototype.getUserInfo=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2,{nickName:"username"}]})})},t.prototype.login=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2]})})},t}();__reflect(DebugPlatform.prototype,"DebugPlatform",["Platform"]),window.platform||(window.platform=new DebugPlatform);var SoundManager=function(){function t(){this.bActiveBGM=!0,this.bActiveEffect=!0,this.bBGMComplete=!1,this.bEffectComplete=!1}return t.Instance=function(){return null==t._instance&&(t._instance=new t),t._instance},t.prototype.onLoadComplete=function(){},t.prototype.PlayBtnEffect=function(t,e){this.bActiveEffect&&(e?this.BtnEffect.play(t,e):this.BtnEffect.play())},t.prototype.PlayBombEffect=function(t,e){this.bActiveEffect&&(e?this.BombEffect.play(t,e):this.BombEffect.play())},t.prototype.PlayMainBGM=function(t,e){this.bActiveBGM&&(this.MainBGMSoundChannel&&this.MainBGMSoundChannel.stop(),e?this.MainBGMSoundChannel=this.MainBGM.play(t,e):this.MainBGMSoundChannel=this.MainBGM.play())},t.prototype.PlayFubenBGM=function(t,e){this.bActiveBGM&&(this.MainBGMSoundChannel.stop(),e?this.MainBGMSoundChannel=this.FubenBGM.play(t,e):this.MainBGMSoundChannel=this.FubenBGM.play())},t.prototype.ChangeBGMState=function(t,e,i){!this.bActiveBGM&&t?i?this.MainBGMSoundChannel=this.MainBGM.play(e,i):this.MainBGMSoundChannel=this.MainBGM.play():this.bActiveBGM&&!t&&this.MainBGMSoundChannel.stop(),this.bActiveBGM=t},t.prototype.ChangeEffectState=function(t,e,i){this.bActiveEffect=t},t._instance=null,t}();__reflect(SoundManager.prototype,"SoundManager");var ThemeAdapter=function(){function t(){}return t.prototype.getTheme=function(t,e,i,n){function r(t){e.call(n,t)}function a(e){e.resItem.url==t&&(RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,a,null),i.call(n))}var s=this;"undefined"!=typeof generateEUI?egret.callLater(function(){e.call(n,generateEUI)},this):"undefined"!=typeof generateEUI2?RES.getResByUrl("resource/gameEui.bin",function(t,i){window.JSONParseClass.setData(t),r(t),egret.callLater(function(){e.call(n,generateEUI2)},s)},this,RES.ResourceItem.TYPE_BIN):(RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,a,null),RES.getResByUrl(t,r,this,RES.ResourceItem.TYPE_TEXT))},t}();__reflect(ThemeAdapter.prototype,"ThemeAdapter",["eui.IThemeAdapter"]);var LoadingUI=function(t){function e(){var e=t.call(this)||this;return e.createView(),e}return __extends(e,t),e.prototype.createView=function(){this.textField=new egret.TextField,this.addChild(this.textField),this.textField.y=300,this.textField.width=480,this.textField.height=100,this.textField.textAlign="center"},e.prototype.onProgress=function(t,e){this.textField.text="Loading..."+t+"/"+e},e}(egret.Sprite);__reflect(LoadingUI.prototype,"LoadingUI",["RES.PromiseTaskReporter"]);var barball;!function(t){var e=function(t){function e(e,i,n){var r=t.call(this)||this;return r.bmp=new egret.Bitmap(e),i&&(r.bmp.width=i,r.bmp.height=n),r.addChild(r.bmp),r}return __extends(e,t),e}(egret.DisplayObjectContainer);t.Bar=e,__reflect(e.prototype,"barball.Bar")}(barball||(barball={}));var barball;!function(t){var e=function(e){function i(){var t=e.call(this)||this;return t.removeStar=-1,t.levelStage=4,i.instance_=t,t.addEventListener(egret.Event.ADDED_TO_STAGE,t.onAddToStage,t),t}return __extends(i,e),i.prototype.onAddToStage=function(e){this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this),this.createGameScene(),this.scorePanel=new t.ScorePanel,this.scorePanel.addEventListener(egret.TouchEvent.TOUCH_TAP,this.GameAgain,this),this.createStartPanel()},i.prototype.createStartPanel=function(){this.startPanel=new t.StartPanel,this.addChild(this.startPanel)},i.prototype.createGameScene=function(){this.starArray=[],this.stageW=this.stage.stageWidth,this.stageH=this.stage.stageHeight,this.backGround=t.createBitmapByName("BackGround_png"),this.backGround.name="backGround",this.addChild(this.backGround),this.backGround.touchEnabled=!0,this.backGround.width=this.stage.stageWidth,this.backGround.height=this.stage.stageHeight,this.bar=new t.Bar(RES.getRes("bar_png"),224,40),this.bar.name="bar",this.bar.x=this.stage.stageWidth/2-this.bar.width/2,this.bar.y=4*this.stage.stageHeight/5,this.addChild(this.bar),this.ball=new t.Ball(RES.getRes("qiu1_png"),"Right-Up",86,96),this.ball.name="ball",this.ball.x=this.bar.x+this.bar.width/2-this.ball.width/2,this.ball.y=this.bar.y-this.ball.height,this.addChild(this.ball);for(var e=0;e<1*this.levelStage;e++)for(var i=7-e%2,n=0;i>n;n++){var r=Math.floor(2+4*Math.random()),a=new t.Star(RES.getRes("qiu"+r+"_png"),134,151);a.name="star_"+e+"_"+n,a.x=40+144*n+e%2*67,a.y=50+161*e,this.starArray.push(a),this.addChild(a)}},i.prototype.checkStarLocation=function(t){for(var e=this.starArray.length-1;e>=0;e--)if(t.x<=this.starArray[e].x+this.starArray[e].width&&t.x>=this.starArray[e].x&&t.y>=this.starArray[e].y&&t.y<=this.starArray[e].y+this.starArray[e].height)return!0;return!1},i.prototype.gameStart=function(){this.contains(this.startPanel)&&this.removeChild(this.startPanel),this.removeStarCount=0,this.PlayTime=new Date,this.scorePanel.parent==this&&this.removeChild(this.scorePanel),this.touchEnabled=!0,this.addEventListener(egret.Event.ENTER_FRAME,this.gameViewUpdate,this),this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onTouchBegin,this),this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.onTouchMove,this)},i.prototype.gameViewUpdate=function(){for(var t=0;t<this.ball.speed;t++)if(this.ball.move(),this.ballStageTouch()&&this.ball.changeDir(),this.ballBarTouch()&&this.ball.changeDir(),this.ballStarTouch()&&(this.removeChild(this.starArray[this.removeStar]),this.starArray[this.removeStar].x=-1,this.starArray[this.removeStar].y=-1,this.removeStarCount=this.removeStarCount+1,this.ball.changeDir()),this.gameStop()){this.removeEventListener(egret.Event.ENTER_FRAME,this.gameViewUpdate,this),this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onTouchBegin,this),this.removeEventListener(egret.TouchEvent.TOUCH_MOVE,this.onTouchMove,this),this.scorePanel.showScore(this.removeStarCount),this.scorePanel.x=(this.stageW-this.scorePanel.width)/2,this.scorePanel.y=500,this.addChild(this.scorePanel);break}},i.prototype.GameAgain=function(){this.removeChildren(),this.startPanel=null,this.scorePanel=null,this.createGameScene(),this.scorePanel=new t.ScorePanel,this.scorePanel.addEventListener(egret.TouchEvent.TOUCH_TAP,this.GameAgain,this),this.createStartPanel()},i.prototype.ballStageTouch=function(){return this.ball.x-.5<=0?(this.ball.setTouchObject("Stage"),this.ball.setStageType("Stage-Left"),!0):this.ball.x+this.ball.width+.5>=this.stageW?(console.log(this.ball.x+":"+this.ball.width),this.ball.setTouchObject("Stage"),this.ball.setStageType("Stage-Right"),!0):this.ball.y<=0?(this.ball.setTouchObject("Stage"),this.ball.setStageType("Stage-Top"),!0):this.ball.y+this.ball.height+.5>=this.stageH?(this.ball.setTouchObject("Stage"),this.ball.setStageType("Stage-Bottom"),!0):!1},i.prototype.ballStarTouch=function(){for(var t=this.starArray.length-1;t>=0;t--)if(-1!=this.starArray[t].x||-1!=this.starArray[t].y){if(this.ball.x+this.ball.width==this.starArray[t].x&&this.ball.y>=this.starArray[t].y&&this.ball.y<=this.starArray[t].y+this.starArray[t].height)return this.removeStar=t,this.ball.setTouchObject("Star"),this.ball.setStarType("Star-Left"),!0;if(this.ball.y+this.ball.height==this.starArray[t].y&&this.ball.x>=this.starArray[t].x&&this.ball.x<=this.starArray[t].x+this.starArray[t].width)return this.removeStar=t,this.ball.setTouchObject("Star"),this.ball.setStarType("Star-Top"),!0;if(this.ball.x==this.starArray[t].x+this.starArray[t].width&&this.ball.y>=this.starArray[t].y&&this.ball.y<=this.starArray[t].y+this.starArray[t].height)return this.removeStar=t,this.ball.setTouchObject("Star"),this.ball.setStarType("Star-Right"),!0;if(this.ball.y==this.starArray[t].y+this.starArray[t].height&&this.ball.x>=this.starArray[t].x&&this.ball.x<=this.starArray[t].x+this.starArray[t].width)return this.removeStar=t,this.ball.setTouchObject("Star"),this.ball.setStarType("Star-Bottom"),!0}return!1},i.prototype.ballBarTouch=function(){return this.ball.y+this.ball.height+.5>=this.bar.y&&this.ball.x+this.ball.width/2+.5>=this.bar.x&&this.ball.x+this.ball.width/2-.5<=this.bar.x+this.bar.width?(this.ball.setTouchObject("Bar"),!0):!1},i.prototype.onTouchBegin=function(t){this.bar.x=t.stageX-this.bar.width/2,this.bar.x+this.bar.width>=this.stageW?this.bar.x=this.stageW-this.bar.width:this.bar.x<0&&(this.bar.x=0),this.bar.y=4*this.stage.stageHeight/5},i.prototype.onTouchMove=function(t){this.bar.x=t.stageX-this.bar.width/2,this.bar.x+this.bar.width>=this.stageW?this.bar.x=this.stageW-this.bar.width:this.bar.x<0&&(this.bar.x=0),this.bar.y=4*this.stage.stageHeight/5},i.prototype.gameStop=function(){return this.removeStarCount==this.starArray.length?(console.log("Game Over"),!0):this.ball.y>=this.bar.y+this.ball.height+20?!0:!1},i.instance_=null,i}(egret.DisplayObjectContainer);t.GameContainer=e,__reflect(e.prototype,"barball.GameContainer")}(barball||(barball={}));var barball;!function(t){var e=function(e){function i(){var t=e.call(this)||this,i=t.graphics;return i.beginFill(0,.8),i.drawRect(0,0,500,250),i.endFill(),t.txt=new egret.TextField,t.txt.width=500,t.txt.height=250,t.txt.textAlign="center",t.txt.textColor=16777215,t.txt.size=40,t.txt.y=70,t.addChild(t.txt),t.touchChildren=!0,t.touchEnabled=!0,t}return __extends(i,e),i.prototype.showScore=function(e){var i=100*e,n=new Date,r=n.getTime()-t.GameContainer.instance_.PlayTime.getTime();if(i+=Math.floor(r/500),400>=i)var a="分数:"+i+"\n"+e+"颗星!有点儿菜哦！\n再来一次吧";else if(i>400&&800>=i)var a="分数:"+i+"\n"+e+"颗星!哎呦，不错哦！\n再来一次吧";else if(i>800)var a="分数:"+i+"\n"+e+"颗星!神一样啊，偶吧！\n再来一次吧";this.txt.text=a},i}(egret.Sprite);t.ScorePanel=e,__reflect(e.prototype,"barball.ScorePanel")}(barball||(barball={}));var barball;!function(t){var e=function(t){function e(e,i,n){var r=t.call(this)||this;return r.bmp=new egret.Bitmap(e),i&&(r.bmp.width=i,r.bmp.height=n),r.addChild(r.bmp),r}return __extends(e,t),Object.defineProperty(e.prototype,"CenterX",{get:function(){return this.x+this.bmp.width/2},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"CenterY",{get:function(){return this.y+this.bmp.height/2},enumerable:!0,configurable:!0}),e}(egret.DisplayObjectContainer);t.Star=e,__reflect(e.prototype,"barball.Star")}(barball||(barball={}));var barball;!function(t){var e=function(e){function i(){var i=e.call(this)||this;return i.bOpenBGM=!0,i.stageW=t.GameContainer.instance_.stage.stageWidth,i.stageH=t.GameContainer.instance_.stage.stageHeight,i.backGround=t.createBitmapByName("BackGround_png"),i.backGround.name="StartPanel backGround",i.addChild(i.backGround),i.backGround.touchEnabled=!0,i.backGround.width=t.GameContainer.instance_.stage.stageWidth,i.backGround.height=t.GameContainer.instance_.stage.stageHeight,i.Logo=t.createBitmapByName("logo_png"),i.Logo.name="Logo",i.Logo.width=1130,i.Logo.height=488,i.Logo.x=(i.stageW-i.Logo.width)/2,i.Logo.y=(i.stageH-i.Logo.height)/2-250,i.addChild(i.Logo),i.btnStart=t.createBitmapByName("btnStart_png"),i.btnStart.name="btnStart",i.btnStart.touchEnabled=!0,i.btnStart.width=573,i.btnStart.height=198,i.btnStart.x=(i.stageW-i.btnStart.width)/2,i.btnStart.y=(i.stageH-i.btnStart.height)/2+300,i.btnStart.addEventListener(egret.TouchEvent.TOUCH_TAP,i.gameStart,i),i.addChild(i.btnStart),i.btnsound=t.createBitmapByName("sound_png"),i.btnsound.name="btnsound",i.btnsound.touchEnabled=!0,i.btnsound.width=139,i.btnsound.height=149,i.btnsound.x=70,i.btnsound.y=100,i.btnsound.addEventListener(egret.TouchEvent.TOUCH_TAP,i.ChangeBGMState,i),i.addChild(i.btnsound),i.btnrank=t.createBitmapByName("rank_png"),i.btnrank.name="btnrank",i.btnrank.width=139,i.btnrank.height=149,i.btnrank.x=170,i.btnrank.y=1550,i.addChild(i.btnrank),i.btnhelp=t.createBitmapByName("help_png"),i.btnhelp.name="btnhelp",i.btnhelp.width=139,i.btnhelp.height=149,i.btnhelp.x=370,i.btnhelp.y=1550,i.addChild(i.btnhelp),i.btnsetting=t.createBitmapByName("setting_png"),i.btnsetting.name="btnsetting",i.btnsetting.width=139,i.btnsetting.height=149,i.btnsetting.x=570,i.btnsetting.y=1550,i.addChild(i.btnsetting),i.btnmore=t.createBitmapByName("more_png"),i.btnmore.name="btnmore",i.btnmore.width=139,i.btnmore.height=149,i.btnmore.x=770,i.btnmore.y=1550,i.addChild(i.btnmore),i}return __extends(i,e),i.prototype.ChangeBGMState=function(){SoundManager.Instance().PlayBtnEffect(0,1),this.bOpenBGM=!this.bOpenBGM,SoundManager.Instance().ChangeBGMState(this.bOpenBGM)},i.prototype.gameStart=function(e){SoundManager.Instance().PlayBtnEffect(0,1),t.GameContainer.instance_.gameStart()},i}(egret.Sprite);t.StartPanel=e,__reflect(e.prototype,"barball.StartPanel")}(barball||(barball={}));var barball;!function(t){function e(t){var e=new egret.Bitmap,i=RES.getRes(t);return e.texture=i,e}var i=function(){function t(){}return t.hitTest=function(t,e){var i=t.getBounds(),n=e.getBounds();return i.x=t.x,i.y=t.y,n.x=e.x,n.y=e.y,i.intersects(n)},t}();t.GameUtil=i,__reflect(i.prototype,"barball.GameUtil"),t.createBitmapByName=e}(barball||(barball={}));