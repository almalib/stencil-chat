import {
  Component,
  ComponentInterface,
  Event,
  EventEmitter,
  h,
  Prop,
  State,
} from "@stencil/core";
import { ChatMessage } from "../../../../../../../../../index";

@Component({
  tag: "personal-header",
  styleUrl: "personal-header.css",
  shadow: false,
  scoped: true
})
export class PersonalHeader implements ComponentInterface {
  /**
   * array data personal messages
   * */
  @Prop() message: ChatMessage[];
  /**
   * clock on navigate
   * */
  @Event() clickToLink: EventEmitter<void>;
  @Event() clickToUserProfile: EventEmitter<void>;
  @Event() searchContact: EventEmitter;
  /**
   * search for private messages
   * */
  @Event() searchPersonalMessages: EventEmitter<string>;
  /**
   * click to show user profile
   * */
  @Event() clickToShowDialogs: EventEmitter<string>;
  @Event() cancelSearchPersonal: EventEmitter<void>;
  @State() isShowDropDown = false;
  @State() isPersonalMess = true;

  render() {
    return (
      <div>
        {this.isPersonalMess ? (
          <div class="personal-header">
            <div class="header-nav">
              <span
                class="custom-link"
                onClick={() => this.clickToShowDialogsHandler()}
              >
                <i class="fas fa-arrow-left"></i>
              </span>
              <span
                class="custom-link user-name-personal"
                onClick={() => this.clickToUserProfileHandler()}
              >
                {this.getNameUser()}
              </span>
              <span class="custom-link">
                <div class="dots-menu" onClick={() => this.showDrop()}>
                  <i class="fas fa-ellipsis-h"></i>
                </div>
                {this.isShowDropDown ? (
                  <div class="drop-down">
                    <ul>
                      <li>
                        <i
                          class="fas fa-search"
                          onClick={() => this.showInputSearchPersonalMess()}
                        ></i>
                      </li>
                      <li>
                        <i class="fas fa-trash"></i>
                      </li>
                      <li>
                        <i class="fas fa-share-alt"></i>
                      </li>
                    </ul>
                  </div>
                ) : (
                  ""
                )}
              </span>
            </div>
            <div class="users-nav">
              <div class="img-user-other">
                <div class="img online"></div>
              </div>
              <div class="img-user-other">
                <div class="img online"></div>
              </div>
              <div class="img-user-current">
                <div class="img online"></div>
              </div>
              <div class="img-user-other">
                <div class="img online"></div>
              </div>
              <div class="img-user-other">
                <div class="img online"></div>
              </div>
            </div>
          </div>
        ) : (
          <div class="search-wrapper">
            <div class="user-name-personal">{this.getNameUser()}</div>
            <div class="searchPersonalmess">
              <input
                type="text"
                placeholder="search"
                onInput={(e: KeyboardEvent) =>
                  this.searchPersonalMessagesHandler(e.target['value'])
                }
              />{" "}
              <span
                onClick={() => this.showInputSearchPersonalMess()}
                class="cancel-search"
              >
                cancel
              </span>
            </div>
          </div>
        )}
      </div>
    );
  }
  /**
   * get name user
   * */
  public getNameUser(): string {
    let name = "";

    this.message.forEach((item) => {
      if (name.indexOf(item.sender.name) === -1) {
        name = item.sender.name;
      }
    });

    return name;
  }

  public showDrop = () => (this.isShowDropDown = !this.isShowDropDown);

  public showInputSearchPersonalMess(): void {
    this.isPersonalMess = !this.isPersonalMess;
    this.isShowDropDown = false;
    this.cancelSearchPersonal.emit();
  }

  /**
   * show Dialogs
   * */
  public clickToShowDialogsHandler(): void {
    this.clickToShowDialogs.emit();
  }
  /**
   * click to show user profile
   * */
  public clickToUserProfileHandler(): void {
    this.clickToUserProfile.emit();
  }

  /**
   * search for private messages
   * */
  public searchPersonalMessagesHandler(value: string ): void {
    this.searchPersonalMessages.emit(value);
  }
}
