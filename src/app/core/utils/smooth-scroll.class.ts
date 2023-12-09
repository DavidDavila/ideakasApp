declare const TweenMax: any;
declare const Power1: any;

export class SmoothScroll {
  moving: boolean;
  pos: number;
  delta: number = 0;
  currentY: number = window.scrollY;

  tweenMax = TweenMax;
  constructor(
    public target: HTMLElement,
    public speed: number = 0.5,
    public smooth: number = 1000
  ) {
    this.moving = false;
    this.pos = this.target.scrollTop;

    // Agrega el evento de desplazamiento solo una vez
    window.addEventListener('scroll', this.handleScroll.bind(this), {
      passive: true,
    });
  }

  handleScroll(e: Event) {
    console.log(8);

    var scrollTop = window.scrollY;
    var finalScroll = scrollTop - this.normalizeDelta(e) * this.smooth;
    console.log(scrollTop, finalScroll);
    window.scrollTo({ top: finalScroll, behavior: 'smooth' });
  }

  normalizeDelta(e: any): 1 | -1 {
    const res: 1 | -1 = e.clientY > this.currentY ? 1 : -1;
    this.currentY = e.clientY;
    return res;
  }
}
