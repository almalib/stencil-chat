import {Component, ComponentInterface, EventEmitter, Event,  h, Prop} from "@stencil/core";
import { messages, categories } from "./res/interface/common.interface";
@Component({
  tag: "mobile-dialogs",
  styleUrl: "mobile-dialogs.css",
  shadow: false,
})
export class MobileDialogs implements ComponentInterface {
  /**
   * массив сообщений
   * */
  @Prop() messages: messages[];
  // @Prop() messages: any;
  /**
   * массив категорий диалогов
   * */
  @Prop() categories: categories[];

  /**
   * clock on Category
   * */
  @Event() clickCategory: EventEmitter;
  /**
   * clock on navigate
   * */
  @Event() selectDialog: EventEmitter;


  render() {
    return (
      <div class="m-chat-wrapper">
        <div class="m-chat-header">
          <div class="title-wrapper">
            <span class="search custom-link">
              <i class="fas fa-search"></i>
            </span>
            <span class="title">Messages</span>
            <span class="add custom-link">
              <i class="fas fa-plus-circle"></i>
            </span>
          </div>
          <div class="btns-nav">{this.getCategories(this.categories)}</div>
        </div>
        <div class="m-chat-dialogs">
          <Dialog mess={this.messages}></Dialog>
        </div>
        <div class="m-chat-footer">
          <span>
            <i class="far fa-comment"></i>
          </span>
          <span>
            <i class="fas fa-user-friends"></i>
          </span>
          <span>
            <i class="fas fa-bars"></i>
          </span>
        </div>
      </div>
    );
  }

  /**
   * Метод получения названий категорий
   * */
  public getCategories(array) {
    return array.map((item) => (
      <span class={item.id} onClick={() => this.clickCategory.emit(item.id)}>
        {item.name}
      </span>
    ));
  }


}

/**
 * Распаковка массива диалогов и выдача в компоненте <dialog-card/>
 * */
const Dialog = (array) => {
  return array.mess.map((item) => {
    return <dialog-card mess={item}></dialog-card>;
  });
};
