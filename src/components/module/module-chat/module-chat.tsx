import { Component, ComponentInterface, h, State } from "@stencil/core";
import { dialogs, MessageMock } from "../../../utils/mock";

@Component({
  tag: "module-chat",
  styleUrl: "module-chat.css",
  shadow: false,
})
export class ModuleChat implements ComponentInterface {
  /**
   * массив данных для диалогов
   * */
  @State() dialogs = dialogs;
  @State() personalMessage = MessageMock;

  render() {
    return (
      <s-saqhan-chat-app
        messages={this.dialogs}
        personalMessage={this.personalMessage}
        onClickOnSearchChat={(event) => this.clickOnSearchChat(event)}
      ></s-saqhan-chat-app>
    );
  }
  /**
   *  Метод поиска по чату
   * */
  public clickOnSearchChat({ detail }) {
    return console.log('clickOnSearchChat',detail.data);
  }

}