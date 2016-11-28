import { Lethargy } from 'lethargy';
import { throttle, debounce } from 'throttle-debounce';

var lethargy = new Lethargy;


export default class ScrollHandler {
  constructor(moveNextAction, movePrevAction) {
    this['next'] = moveNextAction;
    this['prev'] = movePrevAction;

    this.container = document.body;

    this.isTouchDevice = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/);
    this.isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0) || (navigator.maxTouchPoints));



    this.touchStartY = 0;
    this.touchStartX = 0;
    this.touchEndY = 0;
    this.touchEndX = 0;

    this.scrollHandler = this.handleScroll.bind(this);
    this.boundTouchStartHandler = this.touchStartHandler.bind(this);
    this.boundTouchMoveHandler = this.touchMoveHandler.bind(this);

    this.move = throttle(200, this.move, true);
    this.handleTouchMove = debounce(100, this.handleTouchMove);

    this.createScrollListener();
    this.addTouchHandler();


  }

  move(direction) {
    this[direction]()
  }

  destroy() {
    this.destroyScrollListener();
    this.removeTouchHandler();
  }

  handleScroll(e) {
    e = e || window.event

    var scrollInfo = lethargy.check(e)
    if (scrollInfo != false) {
      if (scrollInfo === -1) {
        this.move('next');
      } else {
        this.move('prev');
      }
    }

    this.preventDefault(e)
  }

  createScrollListener () {
    let elem = this.container;
    if (elem.addEventListener) {
      if ('onScroll' in document) {
        return elem.addEventListener("wheel", this.scrollHandler);
      } else if ('onmousewheel' in document) {
        return elem.addEventListener("mousewheel", this.scrollHandler);
      } else {
        return elem.addEventListener("MozMousePixelScroll", this.scrollHandler);
      }
    } else {
      return elem.attachEvent("onmousewheel", this.scrollHandler);
    }
  }

  destroyScrollListener () {
    let elem = this.container;
    if (elem.removeEventListener) {
      if ('onScroll' in document) {
        return elem.removeEventListener("wheel", this.scrollHandler);
      } else if ('onmousewheel' in document) {
        return elem.removeEventListener("mousewheel", this.scrollHandler);
      } else {
        return elem.removeEventListener("MozMousePixelScroll", this.scrollHandler);
      }
    } else {
      return elem.detachEvent("onmousewheel", this.scrollHandler);
    }
  }


  touchMoveHandler(event) {
    let e = event || window.event || e || e.originalEvent;
    this.preventDefault(e);
    if (this.isReallyTouch(e)) {
      this.preventDefault(e);
      return this.handleTouchMove(e);
    }
  }


  handleTouchMove(e) {
    let touchEvents = this.getEventsPage(e);
    this.touchEndY = touchEvents.y;
    this.touchEndX = touchEvents.x;
    let h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
    if (Math.abs(this.touchStartX - this.touchEndX) < Math.abs(this.touchStartY - this.touchEndY)) {
      if (Math.abs(this.touchStartY - this.touchEndY) > (h / 100) * 5) {
        if (this.touchStartY > this.touchEndY) {
          this.move('next');
        } else if (this.touchEndY > this.touchStartY) {
          this.move('prev');
        }
      }
    }



  }

  isReallyTouch(e) {
    return typeof e.pointerType === 'undefined' || e.pointerType !== 'mouse';
  }

  touchStartHandler(event) {
    let e = event || window.event || e || e.originalEvent;
    if (this.isReallyTouch(e)) {
      let touchEvents = this.getEventsPage(e);
      this.touchStartY = touchEvents.y;
      this.touchStartX = touchEvents.x;
    }
  }


  addTouchHandler() {
    if (this.isTouchDevice || this.isTouch) {
      let wrapper = this.container;
      if (document.addEventListener) {
        let MSPointer = this.getMSPointer();
        wrapper.removeEventListener('touchstart', this.boundTouchStartHandler);
        wrapper.removeEventListener(MSPointer.down, this.boundTouchStartHandler);
        wrapper.removeEventListener('touchmove', this.boundTouchMoveHandler);
        wrapper.removeEventListener(MSPointer.move, this.boundTouchMoveHandler);
        this.addListenerMulti(wrapper, `touchstart ${MSPointer.down}`, this.boundTouchStartHandler);
        this.addListenerMulti(wrapper, `touchmove ${MSPointer.move}`, this.boundTouchMoveHandler);
      }
    }
  }

  removeTouchHandler() {
    if (this.isTouchDevice || this.isTouch) {
      let wrapper = this.container;
      if (document.addEventListener) {
        let MSPointer = this.getMSPointer();
        wrapper.removeEventListener('touchstart', this.boundTouchStartHandler);
        wrapper.removeEventListener(MSPointer.down, this.boundTouchStartHandler);
        wrapper.removeEventListener('touchmove', this.boundTouchMoveHandler);
        wrapper.removeEventListener(MSPointer.move, this.boundTouchMoveHandler);
        this.removeListenerMulti(wrapper, `touchstart ${MSPointer.down}`, this.boundTouchStartHandler);
        this.removeListenerMulti(wrapper, `touchmove ${MSPointer.move}`, this.boundTouchMoveHandler);
      }
    }
  }

  getMSPointer() {
    let pointer = undefined;
    if (window.PointerEvent) {
      pointer = {
        down: 'pointerdown',
        move: 'pointermove'
      };
    } else {
      pointer = {
        down: 'MSPointerDown',
        move: 'MSPointerMove'
      };
    }
    return pointer;
  }

  addListenerMulti(el, s, fn) {
    let evts = s.split(' ');
    let i = 0;
    let iLen = evts.length;
    while (i < iLen) {
      if (document.addEventListener) {
        el.addEventListener(evts[i], fn, false);
      } else {
        el.attachEvent(evts[i], fn, false);
      }
        //IE 6/7/8
      i++;
    }
  }

  removeListenerMulti(el, s, fn) {
    let evts = s.split(' ');
    let i = 0;
    let iLen = evts.length;
    while (i < iLen) {
      if (document.addEventListener) {
        el.removeEventListener(evts[i], fn, false);
      } else {
        el.deattachEvent(evts[i], fn, false);
      }
        //IE 6/7/8
      i++;
    }
  }

  getEventsPage(e) {
    let events = [];
    events.y = typeof e.pageY !== 'undefined' && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY;
    events.x = typeof e.pageX !== 'undefined' && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX;
    if (this.isTouch && this.isReallyTouch(e)) {
      events.y = e.touches[0].pageY;
      events.x = e.touches[0].pageX;
    }
    return events;
  }


  preventDefault(event) {
    if (event.preventDefault) { return event.preventDefault(); } else { return event.returnValue = false; }
  }



}
