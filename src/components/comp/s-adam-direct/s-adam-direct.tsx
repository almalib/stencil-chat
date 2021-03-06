import {Component, ComponentInterface, Event, EventEmitter, h, Prop,} from "@stencil/core";
import {ChatMessage, ChatUserActionStatusState, ChatUserPresenceState} from "../../../index";

@Component({
  tag: "s-adam-direct",
  styleUrl: "s-adam-direct.css",
  shadow: false,
  scoped: true,
})
export class SAdamDirect implements ComponentInterface {
  /**
   * Личный диалог
   */
  @Prop() message: ChatMessage[] = [];

  /**
   * клик по имени юзера в личной переписке
   */
  @Event() visibleUserProfile: EventEmitter<void>;

  /**
   * Клик по иконке поиска
   */
  @Event() searchPersonalMessage: EventEmitter<string>;

  /**
   * */
  @Prop() chatPresenceState: ChatUserPresenceState;

  /**
   * */
  @Prop() chatActionState: ChatUserActionStatusState;

  /**
   * меняет статус (присутстия собеседников или контакта) в чате
   * */
  // @Method() async updateChatPresenceState(item: ChatUserPresenceState) {
  //   this.chatPresenceState = item;
  // }

  render() {
    return (
      <div class="direct-comp">
        <s-adam-personal-header
          chatPresenceState={this.chatPresenceState}
          chatActionState={this.chatActionState}
        ></s-adam-personal-header>
        <div class="chat-messages">
          {this.message.map((message) => {
            return <message-from message={message}></message-from>;
          })}
        </div>
        <personal-footer></personal-footer>
      </div>
    );
  }
}
