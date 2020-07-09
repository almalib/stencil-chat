import {Component, ComponentInterface, Event, EventEmitter, h, Prop} from '@stencil/core';

@Component({
  tag: 's-saqhan-chat-users-wrapper',
  styleUrl: 's-saqhan-chat-users-wrapper.css',
  shadow: false,
})
export class SSaqhanChatUsersWrapper implements ComponentInterface {

  /**
   * Массив данных с диалогами
   * */
  @Prop() messages:any;

  /**
   *
   * */
  @Prop() categories:any;

  /**
   * Массив данных с личным чатом
   * */
  @Prop() personalMessage:any;

  /**
   *
   * */
  @Event() clickToCategory: EventEmitter;

  /**
   *
   * */
  @Event() searchDialog: EventEmitter;

  /**
   *
   * */
  @Event() clickToLink: EventEmitter;

  render() {
    return (
      <div>
        <s-saqhan-chat-form-search categories={this.categories}   ></s-saqhan-chat-form-search>

        <div class="chat-wrap">
          <s-saqhan-chat-users messages={this.messages} personalMessage={this.personalMessage} ></s-saqhan-chat-users>
        </div>
        <s-saqhan-chat-add-question></s-saqhan-chat-add-question>
      </div>
    );
  }


}