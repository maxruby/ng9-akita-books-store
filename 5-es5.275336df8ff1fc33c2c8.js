function _possibleConstructorReturn(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?_assertThisInitialized(t):e}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{lXdu:function(t,e,n){"use strict";n.r(e);var o=n("ofXK"),i=n("tyNb"),r=n("zP0r"),c=n("pLZG"),l=n("Kj3r"),s=n("eIep"),a=n("XNiG"),u=n("1G5W");function f(t){return"function"==typeof t}var p=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ngOnDestroy";return function(n){var o=t[e];if(!1===f(o))throw new Error("".concat(t.constructor.name," is using untilDestroyed but doesn't implement ").concat(e));return t.__takeUntilDestroy||(t.__takeUntilDestroy=new a.a,t[e]=function(){f(o)&&o.apply(this,arguments),t.__takeUntilDestroy.next(!0),t.__takeUntilDestroy.complete()}),n.pipe(Object(u.a)(t.__takeUntilDestroy))}},b=n("fXoL"),h=n("gRcL"),d=n("nYHP"),k=n("MSSf"),g=n("A2Vd"),m=n("G/Ji"),y=n("IRfi");function v(t,e){if(1&t&&(b.Tb(0,"span"),b.wc(1),b.Rb()),2&t){var n=b.ec();b.Ab(1),b.xc(n.error)}}var w,C=((w=function(){function t(){_classCallCheck(this,t),this.query="",this.searching=!1,this.error="",this.search=new b.m}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||w)},w.\u0275cmp=b.Hb({type:w,selectors:[["app-book-search"]],inputs:{query:"query",searching:"searching",error:"error"},outputs:{search:"search"},decls:9,vars:5,consts:[["matInput","","placeholder","Search for a book",3,"value","keyup"],[3,"diameter","strokeWidth"],[4,"ngIf"]],template:function(t,e){1&t&&(b.Tb(0,"mat-card"),b.Tb(1,"mat-card-title"),b.wc(2,"Find a Book"),b.Rb(),b.Tb(3,"mat-card-content"),b.Tb(4,"mat-form-field"),b.Tb(5,"input",0),b.bc("keyup",(function(t){return e.search.emit(t.target.value)})),b.Rb(),b.Rb(),b.Ob(6,"mat-spinner",1),b.Rb(),b.Tb(7,"mat-card-footer"),b.vc(8,v,2,1,"span",2),b.Rb(),b.Rb()),2&t&&(b.Ab(5),b.kc("value",e.query),b.Ab(1),b.Eb("show",e.searching),b.kc("diameter",30)("strokeWidth",3),b.Ab(2),b.kc("ngIf",e.error))},directives:[k.a,k.h,k.c,y.a,g.a,m.b,k.d,o.j],styles:["mat-card-content[_ngcontent-%COMP%], mat-card-footer[_ngcontent-%COMP%], mat-card-title[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center}mat-card-footer[_ngcontent-%COMP%]{color:red;padding:5px 0}.mat-form-field[_ngcontent-%COMP%]{min-width:300px;margin-right:10px}.mat-spinner[_ngcontent-%COMP%]{position:relative;top:10px;left:10px;visibility:hidden}.mat-spinner.show[_ngcontent-%COMP%]{visibility:visible}"]}),w),S=n("LRne"),_=n("xgIS"),O=n("5+tZ"),T=n("lJxs"),x=n("vkgz"),P=n("7o/Q"),D=n("D0XW"),I=function(){function t(e,n){_classCallCheck(this,t),this.period=e,this.scheduler=n}return _createClass(t,[{key:"call",value:function(t,e){return e.subscribe(new R(t,this.period,this.scheduler))}}]),t}(),R=function(t){function e(t,n,o){var i;return _classCallCheck(this,e),(i=_possibleConstructorReturn(this,_getPrototypeOf(e).call(this,t))).period=n,i.scheduler=o,i.hasValue=!1,i.add(o.schedule(M,n,{subscriber:_assertThisInitialized(i),period:n})),i}return _inherits(e,t),_createClass(e,[{key:"_next",value:function(t){this.lastValue=t,this.hasValue=!0}},{key:"notifyNext",value:function(){this.hasValue&&(this.hasValue=!1,this.destination.next(this.lastValue))}}]),e}(P.a);function M(t){var e=t.subscriber,n=t.period;e.notifyNext(),this.schedule(t,n)}function j(t,e,n,o){var i=window&&!!window.document&&window.document.documentElement,r=i&&e?window:n;if(t&&!(r=t&&i&&"string"==typeof t?function(t,e,n){return(n?window.document:e).querySelector(t)}(t,n.nativeElement,o):t))throw new Error("ngx-infinite-scroll {resolveContainerElement()}: selector for");return r}function U(t){return t&&!t.firstChange}var A={clientHeight:"clientHeight",offsetHeight:"offsetHeight",scrollHeight:"scrollHeight",pageYOffset:"pageYOffset",offsetTop:"offsetTop",scrollTop:"scrollTop",top:"top"},H={clientHeight:"clientWidth",offsetHeight:"offsetWidth",scrollHeight:"scrollWidth",pageYOffset:"pageXOffset",offsetTop:"offsetLeft",scrollTop:"scrollLeft",top:"left"},W=function(){function t(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];_classCallCheck(this,t),this.vertical=e,this.propsMap=e?A:H}return _createClass(t,[{key:"clientHeightKey",value:function(){return this.propsMap.clientHeight}},{key:"offsetHeightKey",value:function(){return this.propsMap.offsetHeight}},{key:"scrollHeightKey",value:function(){return this.propsMap.scrollHeight}},{key:"pageYOffsetKey",value:function(){return this.propsMap.pageYOffset}},{key:"offsetTopKey",value:function(){return this.propsMap.offsetTop}},{key:"scrollTopKey",value:function(){return this.propsMap.scrollTop}},{key:"topKey",value:function(){return this.propsMap.top}}]),t}();function K(t){return["Window","global"].some((function(e){return Object.prototype.toString.call(t).includes(e)}))}function N(t,e){return t?e.document.documentElement:null}function B(t,e){var n,o,i,r,c=(o=(n=e).container,i=n.isWindow,r=E(n.axis),Q(o,i,r.offsetHeightKey,r.clientHeightKey));return e.isWindow?function(t,e,n){var o=n.axis,i=n.container,r=n.isWindow,c=E(o),l=c.offsetHeightKey,s=c.clientHeightKey,a=t+L(N(r,i),o,r),u=Q(e.nativeElement,r,l,s);return{height:t,scrolled:a,totalToScroll:function(t,e,n){var o=e.topKey();if(t.getBoundingClientRect)return t.getBoundingClientRect()[o]+L(t,e,n)}(e.nativeElement,o,r)+u,isWindow:r}}(c,t,e):function(t,e,n){var o=n.axis,i=n.container;return{height:t,scrolled:i[o.scrollTopKey()],totalToScroll:i[o.scrollHeightKey()],isWindow:!1}}(c,0,e)}function E(t){return{offsetHeightKey:t.offsetHeightKey(),clientHeightKey:t.clientHeightKey()}}function Q(t,e,n,o){if(isNaN(t[n])){var i=N(e,t);return i?i[o]:0}return t[n]}function L(t,e,n){var o=e.pageYOffsetKey(),i=e.scrollTopKey(),r=e.offsetTopKey();return isNaN(window[o])?N(n,t)[i]:t.ownerDocument?t.ownerDocument.defaultView[o]:t[r]}function z(t,e,n){var o,i;if(t.totalToScroll<=0)return!1;var r=t.isWindow?t.scrolled:t.height+t.scrolled;return n?(o=(t.totalToScroll-r)/t.totalToScroll,i=e.down/10):(o=t.scrolled/(t.scrolled+(t.totalToScroll-r)),i=e.up/10),o<=i}var $=function(){function t(e){var n=e.totalToScroll;_classCallCheck(this,t),this.lastScrollPosition=0,this.lastTotalToScroll=0,this.totalToScroll=0,this.triggered={down:0,up:0},this.totalToScroll=n}return _createClass(t,[{key:"updateScrollPosition",value:function(t){return this.lastScrollPosition=t}},{key:"updateTotalToScroll",value:function(t){this.lastTotalToScroll!==t&&(this.lastTotalToScroll=this.totalToScroll,this.totalToScroll=t)}},{key:"updateScroll",value:function(t,e){this.updateScrollPosition(t),this.updateTotalToScroll(e)}},{key:"updateTriggeredFlag",value:function(t,e){e?this.triggered.down=t:this.triggered.up=t}},{key:"isTriggeredScroll",value:function(t,e){return e?this.triggered.down===t:this.triggered.up===t}}]),t}(),X={DOWN:"[NGX_ISE] DOWN",UP:"[NGX_ISE] UP"};function V(t){var e=t.scrollDown,n=t.stats.scrolled;return{type:e?X.DOWN:X.UP,payload:{currentScrollPosition:n}}}var q,J,Y,F,G,Z=((J=function(){function t(e,n){_classCallCheck(this,t),this.element=e,this.zone=n,this.scrolled=new b.m,this.scrolledUp=new b.m,this.infiniteScrollDistance=2,this.infiniteScrollUpDistance=1.5,this.infiniteScrollThrottle=150,this.infiniteScrollDisabled=!1,this.infiniteScrollContainer=null,this.scrollWindow=!0,this.immediateCheck=!1,this.horizontal=!1,this.alwaysCallback=!1,this.fromRoot=!1}return _createClass(t,[{key:"ngAfterViewInit",value:function(){this.infiniteScrollDisabled||this.setup()}},{key:"ngOnChanges",value:function(t){var e=t.infiniteScrollContainer,n=t.infiniteScrollDisabled,o=t.infiniteScrollDistance,i=U(e),r=U(n),c=U(o),l=!r&&!this.infiniteScrollDisabled||r&&!n.currentValue||c;(i||r||c)&&(this.destroyScroller(),l&&this.setup())}},{key:"setup",value:function(){var t=this;"undefined"!=typeof window&&this.zone.runOutsideAngular((function(){var e,n,o,i,r,l,s,a,u,f,p,b;t.disposeScroller=(e={fromRoot:t.fromRoot,alwaysCallback:t.alwaysCallback,disable:t.infiniteScrollDisabled,downDistance:t.infiniteScrollDistance,element:t.element,horizontal:t.horizontal,scrollContainer:t.infiniteScrollContainer,scrollWindow:t.scrollWindow,throttle:t.infiniteScrollThrottle,upDistance:t.infiniteScrollUpDistance},l=e.scrollContainer,s=e.scrollWindow,a=e.element,u=e.fromRoot,f=function(t,e){return Object.assign({},t,{container:t.isWindow||e&&!e.nativeElement?e:e.nativeElement})}({axis:(n={axis:new W(!e.horizontal),windowElement:j(l,s,a,u)}).axis,isWindow:K(o=n.windowElement)},o),p=new $({totalToScroll:B(a,f)}),b={up:e.upDistance,down:e.downDistance},(i={container:f.container,throttle:e.throttle},r=Object(_.a)(i.container,"scroll"),i.throttle&&(r=r.pipe(function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:D.a;return function(n){return n.lift(new I(t,e))}}(i.throttle))),r).pipe(Object(O.a)((function(){return Object(S.a)(B(a,f))})),Object(T.a)((function(t){return function(t,e,n){var o=function(t,e,n){var o=function(t,e){return t<e.scrolled}(t,e);return{fire:z(e,n,o),scrollDown:o}}(t,e,n);return{scrollDown:o.scrollDown,fire:o.fire,stats:e}}(p.lastScrollPosition,t,b)})),Object(x.a)((function(t){var e=t.stats;return p.updateScroll(e.scrolled,e.totalToScroll)})),Object(c.a)((function(t){var n=t.fire,o=t.scrollDown,i=t.stats.totalToScroll;return function(t,e,n){return!(!t||!e)||!(n||!e)}(e.alwaysCallback,n,p.isTriggeredScroll(i,o))})),Object(x.a)((function(t){var e=t.scrollDown,n=t.stats.totalToScroll;p.updateTriggeredFlag(n,e)})),Object(T.a)(V))).subscribe((function(e){return t.zone.run((function(){return t.handleOnScroll(e)}))}))}))}},{key:"handleOnScroll",value:function(t){var e=t.type,n=t.payload;switch(e){case X.DOWN:return this.scrolled.emit(n);case X.UP:return this.scrolledUp.emit(n);default:return}}},{key:"ngOnDestroy",value:function(){this.destroyScroller()}},{key:"destroyScroller",value:function(){this.disposeScroller&&this.disposeScroller.unsubscribe()}}]),t}()).\u0275fac=function(t){return new(t||J)(b.Nb(b.k),b.Nb(b.y))},J.\u0275dir=b.Ib({type:J,selectors:[["","infiniteScroll",""],["","infinite-scroll",""],["","data-infinite-scroll",""]],inputs:{infiniteScrollDistance:"infiniteScrollDistance",infiniteScrollUpDistance:"infiniteScrollUpDistance",infiniteScrollThrottle:"infiniteScrollThrottle",infiniteScrollDisabled:"infiniteScrollDisabled",infiniteScrollContainer:"infiniteScrollContainer",scrollWindow:"scrollWindow",immediateCheck:"immediateCheck",horizontal:"horizontal",alwaysCallback:"alwaysCallback",fromRoot:"fromRoot"},outputs:{scrolled:"scrolled",scrolledUp:"scrolledUp"},features:[b.yb()]}),J),tt=((q=function t(){_classCallCheck(this,t)}).\u0275mod=b.Lb({type:q}),q.\u0275inj=b.Kb({factory:function(t){return new(t||q)},providers:[],imports:[[]]}),q),et=n("kEI4"),nt=((G=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"transform",value:function(t){if(!t)return"Author Unknown";switch(t.length){case 0:return"Author Unknown";case 1:return t[0];case 2:return t.join(" and ");default:var e=t[t.length-1];return"".concat(t.slice(0,-1).join(", "),", and ").concat(e)}}}]),t}()).\u0275fac=function(t){return new(t||G)},G.\u0275pipe=b.Mb({name:"addCommas",type:G,pure:!0}),G),ot=((F=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"authors",get:function(){return this.book.volumeInfo.authors}}]),t}()).\u0275fac=function(t){return new(t||F)},F.\u0275cmp=b.Hb({type:F,selectors:[["app-book-authors"]],inputs:{book:"book"},decls:5,vars:3,consts:[["mat-subheader",""]],template:function(t,e){1&t&&(b.Tb(0,"h5",0),b.wc(1,"Written By:"),b.Rb(),b.Tb(2,"span"),b.wc(3),b.fc(4,"addCommas"),b.Rb()),2&t&&(b.Ab(3),b.yc(" ",b.gc(4,1,e.authors),"\n"))},directives:[et.d],pipes:[nt],styles:["h5[_ngcontent-%COMP%]{margin-bottom:5px}"]}),F),it=((Y=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"transform",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:250,n=t.replace(/(<([^>]+)>)/gi,"");return t.length>=e?"".concat(n.slice(0,e),"..."):n}}]),t}()).\u0275fac=function(t){return new(t||Y)},Y.\u0275pipe=b.Mb({name:"ellipsis",type:Y,pure:!0}),Y);function rt(t,e){if(1&t&&b.Ob(0,"img",4),2&t){var n=b.ec();b.kc("src",n.thumbnail,b.pc)}}function ct(t,e){if(1&t&&(b.Tb(0,"mat-card-subtitle"),b.wc(1),b.fc(2,"ellipsis"),b.Rb()),2&t){var n=b.ec();b.Ab(1),b.xc(b.hc(2,1,n.subtitle,40))}}function lt(t,e){if(1&t&&(b.Tb(0,"p"),b.wc(1),b.fc(2,"ellipsis"),b.Rb()),2&t){var n=b.ec();b.Ab(1),b.xc(b.gc(2,1,n.description))}}var st,at=function(t){return["/books",t]},ut=((st=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"id",get:function(){return this.book.id}},{key:"title",get:function(){return this.book.volumeInfo.title}},{key:"subtitle",get:function(){return this.book.volumeInfo.subtitle}},{key:"description",get:function(){return this.book.volumeInfo.description}},{key:"thumbnail",get:function(){return!!this.book.volumeInfo.imageLinks&&this.book.volumeInfo.imageLinks.smallThumbnail.replace("http:","")}}]),t}()).\u0275fac=function(t){return new(t||st)},st.\u0275cmp=b.Hb({type:st,selectors:[["app-book-preview"]],inputs:{book:"book"},decls:12,vars:11,consts:[[3,"routerLink"],["mat-card-sm-image","",3,"src",4,"ngIf"],[4,"ngIf"],[3,"book"],["mat-card-sm-image","",3,"src"]],template:function(t,e){1&t&&(b.Tb(0,"a",0),b.Tb(1,"mat-card"),b.Tb(2,"mat-card-title-group"),b.vc(3,rt,1,1,"img",1),b.Tb(4,"mat-card-title"),b.wc(5),b.fc(6,"ellipsis"),b.Rb(),b.vc(7,ct,3,4,"mat-card-subtitle",2),b.Rb(),b.Tb(8,"mat-card-content"),b.vc(9,lt,3,3,"p",2),b.Rb(),b.Tb(10,"mat-card-footer"),b.Ob(11,"app-book-authors",3),b.Rb(),b.Rb(),b.Rb()),2&t&&(b.kc("routerLink",b.lc(9,at,e.id)),b.Ab(3),b.kc("ngIf",e.thumbnail),b.Ab(2),b.xc(b.hc(6,6,e.title,35)),b.Ab(2),b.kc("ngIf",e.subtitle),b.Ab(2),b.kc("ngIf",e.description),b.Ab(2),b.kc("book",e.book))},directives:[i.f,k.a,k.i,o.j,k.h,k.c,k.d,ot,k.f,k.g],pipes:[it],styles:["[_nghost-%COMP%]{display:-webkit-box;display:flex}[_nghost-%COMP%]   a[_ngcontent-%COMP%]{display:-webkit-box;display:flex}mat-card[_ngcontent-%COMP%]{width:400px;margin:15px;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-flow:column;-webkit-box-pack:justify;justify-content:space-between}@media only screen and (max-width:768px){mat-card[_ngcontent-%COMP%]{margin:15px 0!important}}mat-card[_ngcontent-%COMP%]:hover{box-shadow:3px 3px 16px -2px rgba(0,0,0,.5)}mat-card-title[_ngcontent-%COMP%]{margin-right:10px}mat-card-title-group[_ngcontent-%COMP%]{margin:0}a[_ngcontent-%COMP%]{color:inherit;text-decoration:none}img[_ngcontent-%COMP%]{width:60px;min-width:60px;margin-left:5px}mat-card-content[_ngcontent-%COMP%]{margin:15px 0 0}span[_ngcontent-%COMP%]{display:inline-block;font-size:13px}mat-card-footer[_ngcontent-%COMP%]{padding:0 25px 25px}"]}),st);function ft(t,e){1&t&&b.Ob(0,"app-book-preview",2),2&t&&b.kc("book",e.$implicit)}var pt,bt,ht=((bt=function(){function t(){_classCallCheck(this,t),this.scrolled=new b.m,this.scrolledUp=new b.m,this.scrollDistance=2,this.scrollUpDistance=1.5,this.throttle=50,this.limit=500,this.page=1}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"onScrollDown",value:function(){this.scrolled.emit()}},{key:"onScrollUp",value:function(){this.scrolledUp.emit()}}]),t}()).\u0275fac=function(t){return new(t||bt)},bt.\u0275cmp=b.Hb({type:bt,selectors:[["app-book-preview-list"]],inputs:{books:"books"},outputs:{scrolled:"scrolled",scrolledUp:"scrolledUp"},decls:2,vars:5,consts:[["infiniteScroll","",1,"book-preview-list",3,"infiniteScrollDistance","infiniteScrollUpDistance","infiniteScrollThrottle","scrollWindow","scrolled","scrolledUp"],[3,"book",4,"ngFor","ngForOf"],[3,"book"]],template:function(t,e){1&t&&(b.Tb(0,"div",0),b.bc("scrolled",(function(t){return e.onScrollDown()}))("scrolledUp",(function(t){return e.onScrollUp()})),b.vc(1,ft,1,1,"app-book-preview",1),b.Rb()),2&t&&(b.kc("infiniteScrollDistance",e.scrollDistance)("infiniteScrollUpDistance",e.scrollUpDistance)("infiniteScrollThrottle",e.throttle)("scrollWindow",!1),b.Ab(1),b.kc("ngForOf",e.books))},directives:[Z,o.i,ut],styles:["[_nghost-%COMP%]{display:-webkit-box;display:flex;flex-wrap:wrap;-webkit-box-pack:center;justify-content:center}.book-preview-list[_ngcontent-%COMP%]{padding:10px 0;margin-top:30px;height:600px;flex-wrap:wrap;overflow-y:scroll}"]}),bt),dt=((pt=function(){function t(e,n){var o=this;_classCallCheck(this,t),this.booksQuery=e,this.booksService=n,this.searchQuery=this.booksQuery.getSearchTerm,this.loading$=this.booksQuery.selectLoading(),this.booksQuery.selectSearchTerm$.pipe(Object(r.a)(1),Object(c.a)(Boolean),Object(l.a)(300),p(this)).subscribe((function(t){o.booksService.searchBooks(t)})),this.books$=this.booksQuery.selectResultIds$.pipe(Object(s.a)((function(t){return o.booksQuery.selectMany(t)})))}return _createClass(t,[{key:"search",value:function(t){this.booksService.updateSearchTerm(t,t!==this.booksQuery.getSearchTerm)}},{key:"onScrolled",value:function(){this.booksService.updatePage("DOWN"),this.booksService.searchBooks(this.booksQuery.getSearchTerm)}},{key:"onScrolledUp",value:function(){this.booksService.updatePage("UP"),this.booksService.searchBooks(this.booksQuery.getSearchTerm)}},{key:"ngOnDestroy",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||pt)(b.Nb(h.a),b.Nb(d.a))},pt.\u0275cmp=b.Hb({type:pt,selectors:[["app-find-book"]],decls:5,vars:10,consts:[[3,"query","searching","error","search"],[3,"books","scrolled","scrolledUp"]],template:function(t,e){1&t&&(b.Tb(0,"app-book-search",0),b.bc("search",(function(t){return e.search(t)})),b.fc(1,"async"),b.fc(2,"async"),b.Rb(),b.Tb(3,"app-book-preview-list",1),b.bc("scrolled",(function(t){return e.onScrolled()}))("scrolledUp",(function(t){return e.onScrolledUp()})),b.fc(4,"async"),b.Rb()),2&t&&(b.kc("query",e.searchQuery)("searching",b.gc(1,4,e.loading$))("error",b.gc(2,6,e.error$)),b.Ab(3),b.kc("books",b.gc(4,8,e.books$)))},directives:[C,ht],pipes:[o.b],styles:[""],changeDetection:0}),pt),kt=n("Xlwt");function gt(t,e){if(1&t&&(b.Tb(0,"mat-card-subtitle"),b.wc(1),b.Rb()),2&t){var n=b.ec(2);b.Ab(1),b.xc(n.subtitle)}}function mt(t,e){if(1&t&&b.Ob(0,"img",9),2&t){var n=b.ec(2);b.kc("src",n.thumbnail,b.pc)}}function yt(t,e){if(1&t){var n=b.Ub();b.Tb(0,"button",10),b.bc("click",(function(t){b.nc(n);var e=b.ec(2);return e.remove.emit(e.book)})),b.wc(1," Remove Book from Collection "),b.Rb()}}function vt(t,e){if(1&t){var n=b.Ub();b.Tb(0,"button",5),b.bc("click",(function(t){b.nc(n);var e=b.ec(2);return e.add.emit(e.book)})),b.wc(1," Add Book to Collection "),b.Rb()}}function wt(t,e){if(1&t){var n=b.Ub();b.Tb(0,"mat-card"),b.Tb(1,"mat-card-title-group"),b.Tb(2,"mat-card-title"),b.wc(3),b.Rb(),b.vc(4,gt,2,1,"mat-card-subtitle",0),b.vc(5,mt,1,1,"img",1),b.Rb(),b.Tb(6,"mat-card-content"),b.Ob(7,"p",2),b.Rb(),b.Tb(8,"mat-card-footer",3),b.Ob(9,"app-book-authors",4),b.Tb(10,"button",5),b.bc("click",(function(t){return b.nc(n),b.ec().goBack()})),b.wc(11," Back "),b.Rb(),b.Rb(),b.Tb(12,"mat-card-actions",6),b.vc(13,yt,2,0,"button",7),b.vc(14,vt,2,0,"button",8),b.Rb(),b.Rb()}if(2&t){var o=b.ec();b.Ab(3),b.xc(o.title),b.Ab(1),b.kc("ngIf",o.subtitle),b.Ab(1),b.kc("ngIf",o.thumbnail),b.Ab(2),b.kc("innerHtml",o.description,b.oc),b.Ab(2),b.kc("book",o.book),b.Ab(4),b.kc("ngIf",o.inCollection),b.Ab(1),b.kc("ngIf",!o.inCollection)}}var Ct,St,_t,Ot,Tt,xt,Pt,Dt,It=((_t=function(){function t(e){_classCallCheck(this,t),this.location=e,this.add=new b.m,this.remove=new b.m}return _createClass(t,[{key:"goBack",value:function(){this.location.back()}},{key:"id",get:function(){return this.book.id}},{key:"title",get:function(){return this.book.volumeInfo.title}},{key:"subtitle",get:function(){return this.book.volumeInfo.subtitle}},{key:"description",get:function(){return this.book.volumeInfo.description}},{key:"thumbnail",get:function(){return this.book.volumeInfo.imageLinks&&this.book.volumeInfo.imageLinks.smallThumbnail&&this.book.volumeInfo.imageLinks.smallThumbnail.replace("http:","")}}]),t}()).\u0275fac=function(t){return new(t||_t)(b.Nb(o.g))},_t.\u0275cmp=b.Hb({type:_t,selectors:[["app-book-detail"]],inputs:{book:"book",inCollection:"inCollection"},outputs:{add:"add",remove:"remove"},decls:1,vars:1,consts:[[4,"ngIf"],["mat-card-sm-image","",3,"src",4,"ngIf"],[3,"innerHtml"],[1,"footer"],[3,"book"],["mat-raised-button","","color","primary",3,"click"],["align","start"],["mat-raised-button","","color","warn",3,"click",4,"ngIf"],["mat-raised-button","","color","primary",3,"click",4,"ngIf"],["mat-card-sm-image","",3,"src"],["mat-raised-button","","color","warn",3,"click"]],template:function(t,e){1&t&&b.vc(0,wt,15,7,"mat-card",0),2&t&&b.kc("ngIf",e.book)},directives:[o.j,k.a,k.i,k.h,k.c,k.d,ot,kt.a,k.b,k.g,k.f],styles:["[_nghost-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;margin:75px 0}mat-card[_ngcontent-%COMP%]{max-width:600px}mat-card-title-group[_ngcontent-%COMP%]{margin-left:0}img[_ngcontent-%COMP%]{width:60px;min-width:60px;margin-left:5px}mat-card-content[_ngcontent-%COMP%]{margin:15px 0 50px}mat-card-actions[_ngcontent-%COMP%]{margin:25px 0 0!important}mat-card-footer[_ngcontent-%COMP%]{padding:0 25px 25px;position:relative}"]}),_t),Rt=((St=function(){function t(e,n){_classCallCheck(this,t),this.booksQuery=e,this.booksService=n,this.book$=this.booksQuery.selectActive(),this.isSelectedBookInCollection$=this.booksQuery.isInCollection$}return _createClass(t,[{key:"updateCollection",value:function(t){var e=t.id;this.booksService.updateCollection(e)}}]),t}()).\u0275fac=function(t){return new(t||St)(b.Nb(h.a),b.Nb(d.a))},St.\u0275cmp=b.Hb({type:St,selectors:[["app-selected-book-page"]],decls:3,vars:6,consts:[[3,"book","inCollection","add","remove"]],template:function(t,e){1&t&&(b.Tb(0,"app-book-detail",0),b.bc("add",(function(t){return e.updateCollection(t)}))("remove",(function(t){return e.updateCollection(t)})),b.fc(1,"async"),b.fc(2,"async"),b.Rb()),2&t&&b.kc("book",b.gc(1,2,e.book$))("inCollection",b.gc(2,4,e.isSelectedBookInCollection$))},directives:[It],pipes:[o.b],styles:[""],changeDetection:0}),St),Mt=((Ct=function(){function t(e,n){_classCallCheck(this,t),this.bookService=e,this.route=n}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this.route.snapshot.paramMap.get("id");this.bookService.setActive(t)}}]),t}()).\u0275fac=function(t){return new(t||Ct)(b.Nb(d.a),b.Nb(i.a))},Ct.\u0275cmp=b.Hb({type:Ct,selectors:[["app-view-book-page"]],decls:1,vars:0,template:function(t,e){1&t&&b.Ob(0,"app-selected-book-page")},directives:[Rt],styles:[""],changeDetection:0}),Ct),jt=n("JIr8"),Ut=n("2tW2"),At=((Ot=function(){function t(e,n,o,i){_classCallCheck(this,t),this.googleBooks=e,this.router=n,this.bookQuery=o,this.bookSerivce=i}return _createClass(t,[{key:"hasBookInApi",value:function(t){var e=this;return this.googleBooks.retrieveBook(t).pipe(Object(T.a)((function(t){return!!t})),Object(jt.a)((function(){return e.router.navigate(["/404"]),Object(S.a)(!1)})))}},{key:"hasBook",value:function(t){return this.bookQuery.hasEntity(t)?(this.bookSerivce.setActive(t),Object(S.a)(!0)):this.hasBookInApi(t)}},{key:"canActivate",value:function(t){return this.hasBook(t.params.id)}}]),t}()).\u0275fac=function(t){return new(t||Ot)(b.Xb(Ut.a),b.Xb(i.d),b.Xb(h.a),b.Xb(d.a))},Ot.\u0275prov=b.Jb({token:Ot,factory:Ot.\u0275fac,providedIn:"root"}),Ot),Ht=[{path:"find",component:dt},{path:":id",component:Mt,canActivate:[At]},{path:"",component:(Tt=function t(e){_classCallCheck(this,t),this.bookQuery=e,this.books$=this.bookQuery.selectMany(this.bookQuery.collection)},Tt.\u0275fac=function(t){return new(t||Tt)(b.Nb(h.a))},Tt.\u0275cmp=b.Hb({type:Tt,selectors:[["app-collection-page"]],decls:5,vars:3,consts:[[3,"books"]],template:function(t,e){1&t&&(b.Tb(0,"mat-card"),b.Tb(1,"mat-card-title"),b.wc(2,"My Collection"),b.Rb(),b.Rb(),b.Ob(3,"app-book-preview-list",0),b.fc(4,"async")),2&t&&(b.Ab(3),b.kc("books",b.gc(4,1,e.books$)))},directives:[k.a,k.h,ht],pipes:[o.b],styles:["mat-card-title[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center}"],changeDetection:0}),Tt)}],Wt=((xt=function t(){_classCallCheck(this,t)}).\u0275mod=b.Lb({type:xt}),xt.\u0275inj=b.Kb({factory:function(t){return new(t||xt)},imports:[[i.g.forChild(Ht)],i.g]}),xt),Kt=n("3Pt+"),Nt=n("xJ9m"),Bt=((Dt=function t(){_classCallCheck(this,t)}).\u0275mod=b.Lb({type:Dt}),Dt.\u0275inj=b.Kb({factory:function(t){return new(t||Dt)}}),Dt),Et=((Pt=function t(){_classCallCheck(this,t)}).\u0275mod=b.Lb({type:Pt}),Pt.\u0275inj=b.Kb({factory:function(t){return new(t||Pt)},imports:[[o.c,Kt.k,Nt.a,i.g,Bt,tt]]}),Pt);n.d(e,"BooksModule",(function(){return Lt}));var Qt,Lt=((Qt=function t(){_classCallCheck(this,t)}).\u0275mod=b.Lb({type:Qt}),Qt.\u0275inj=b.Kb({factory:function(t){return new(t||Qt)},providers:[At],imports:[[o.c,Wt,Et,Nt.a]]}),Qt)}}]);