import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 's-adam-nav-item',
  styleUrl: 's-adam-nav-item.css',
  shadow: false,
})
export class SAdamNavItem implements ComponentInterface {
  /**
   * Иконки навигации
   */
  @Prop() navItems: any;

  render() {
    return (
        <div class="nav-item">
          <i class={'hover-link '+this.navItems.icon}></i>
        </div>
    );
  }

}