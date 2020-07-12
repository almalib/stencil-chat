import {Component, ComponentInterface, h, Prop} from '@stencil/core';
import {ChatNavItems} from "../../../../../shared/interface/common.interface";

@Component({
  tag: 's-adam-nav-item',
  styleUrl: 's-adam-nav-item.css',
  shadow: false,
})
export class SAdamNavItem implements ComponentInterface {
  /**
   * Иконки навигации
   */
  @Prop() navItems: ChatNavItems;

  render() {
    return (
        <div class="nav-item">
          <i class={'hover-link '+this.navItems.icon}></i>
        </div>
    );
  }

}
