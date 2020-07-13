import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  h,
  Prop,
  State,
} from "@stencil/core";
import {ChatMessage} from "../../../index";

@Component({
  tag: "s-adam-personal-header",
  styleUrl: "s-adam-personal-header.css",
  shadow: false,
  scoped: true
})
export class SAdamPersonalHeader implements ComponentInterface {

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
  @Event() searchPersonalMessage: EventEmitter<ChatMessage>;

  /**
   * Сброс фильтра сообщений
   */
  @Event() resetMessagesFilter: EventEmitter<void>;

  /**
   * Стейт для переключения окна поиска сообщений
   */
  @State() searchVisible = false;

  render() {
    return <div>{this.toggleHeader()}</div>;
  }

  /**
   * Переключатель стейта
   */
  public toggleSearchVisible() {
    this.searchVisible = !this.searchVisible;
    this.resetMessagesFilter.emit()
  }

  /**
   * Переключение шапки в личной переписке
   */
  public toggleHeader() {
    if (this.searchVisible === false) {
      return (
        <div class="header">
          <div
            class="search-message"
            onClick={() => this.toggleSearchVisible()}
          >
            <i class="fas fa-search hover-link"></i>
          </div>
          <div class="user">
            <div class="user-name">{this.getNameUser()}</div>
            <div class="online-marker"></div>
          </div>
          <div
            class="settings"
            onClick={() => this.visibleUserProfileHandler()}
          >
            <i class="fas fa-cog hover-link"></i>
          </div>
        </div>
      );
    } else {
      return (
        <div class="header-search-block">
          <div class="search-message-wrapper">
            <i
              class="fas fa-arrow-left hover-link"
              onClick={() => this.toggleSearchVisible()}
            ></i>
            <input
              onInput={(e) => this.searchPersonalMessageHandler(e)}
              type="text"
              placeholder="Search messages"
            />
          </div>
        </div>
      );
    }
  }

  /**
   * Вывод имени юзера в шапке личной переписки
   * */
  public getNameUser() {
    let name = "";

    this.message.forEach((item) => {
      if (name.indexOf(item.sender.name) === -1) {
        name = item.sender.name;
      }
    });

    return name;
  }

  /**
   * Показать личный профиль юзера
   */
  public visibleUserProfileHandler() {
      this.visibleUserProfile.emit()
  }

  /**
   * Поиск сообщений в личной переписке
   * @param e
   */
  public searchPersonalMessageHandler(e) {
    this.searchPersonalMessage.emit(e)
  }
}
