/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { ChatCategoryInterface, ChatDialogInterface, ChatLogo, ChatMessage, ChatNavItems, ChatWritingUserInterface, } from "./index";
export namespace Components {
    interface DialogCard {
        /**
          * карточка диалога
         */
        "mess": ChatDialogInterface;
        /**
          * карточка диалога
         */
        "theme": "comp" | "mobile";
    }
    interface DialogCategories {
        "categories": ChatCategoryInterface[];
        "theme": "comp" | "module" | "mobile";
    }
    interface FooterAudio {
        /**
          * Пропс с классом CSS
         */
        "theme": "comp" | "mobile" | "module";
    }
    interface FooterText {
        /**
          * Возможность записи аудио
         */
        "canRecordAudio": boolean;
        /**
          * Пропс с классом
         */
        "theme": "comp" | "mobile" | "module";
    }
    interface MChatDialogs {
        /**
          * массив диалогов
         */
        "dialogs": ChatDialogInterface[];
    }
    interface MChatFooter {
        /**
          * Данные выбора темы для Мобильная/Модульной версии
         */
        "theme": "mobile" | "module";
    }
    interface MChatHeader {
        /**
          * массив категорий диалогов
         */
        "categories": ChatCategoryInterface[];
    }
    interface MessageFrom {
        /**
          * Принимаем сообщения для пользователя
         */
        "message"?: ChatMessage;
    }
    interface MessageImg {
        /**
          * Проверка статуса доставки сообщения
         */
        "checkSendMess": any;
        /**
          * Принимаем сообщения для пользователя
         */
        "message": any;
    }
    interface MessageText {
        /**
          * Проверка статуса доставки сообщения
         */
        "checkSendMess": any;
        /**
          * Получаем время оттправки сообщения
         */
        "createSendTime": any;
        /**
          * Принимаем сообщения для пользователя
         */
        "message": ChatMessage;
    }
    interface MobileChat {
    }
    interface MobileDialogs {
        /**
          * массив категорий диалогов
         */
        "categories": ChatCategoryInterface[];
        /**
          * массив сообщений
         */
        "dialogs": ChatDialogInterface[];
    }
    interface MobilePersonal {
        /**
          * array data personal messages
         */
        "message": ChatMessage[];
    }
    interface ModuleChat {
    }
    interface MyComponent {
    }
    interface PersonalFooter {
        /**
          * Возможность записи аудио
         */
        "canRecordAudio": boolean;
        "theme": "comp" | "mobile" | "module";
    }
    interface PersonalMessage {
        /**
          * array data personal messages
         */
        "message": ChatMessage[];
        "theme": "mobile" | "module" | "comp";
        "writing": ChatWritingUserInterface[];
    }
    interface SAdamChat {
    }
    interface SAdamContacts {
        /**
          * массив категорий диалогов
         */
        "categories": ChatCategoryInterface[];
        /**
          * Массив с элементами диалога
         */
        "dialogs": ChatDialogInterface[];
    }
    interface SAdamCopying {
    }
    interface SAdamDirect {
        /**
          * Личный диалог
         */
        "message": ChatMessage[];
    }
    interface SAdamNavItem {
        /**
          * Иконки навигации
         */
        "navItems": ChatNavItems;
    }
    interface SAdamNavigate {
        /**
          * Логотип
         */
        "logo": ChatLogo;
        /**
          * Иконки навигации
         */
        "navItems": ChatNavItems[];
    }
    interface SAdamNoChat {
    }
    interface SAdamPersonalHeader {
        /**
          * Личный диалог
         */
        "message": ChatMessage[];
    }
    interface SAdamProfile {
        /**
          * Задаем стиль для мобильной/пк версии
         */
        "theme": "comp" | "mobile" | "module";
    }
    interface SAdamSearchContact {
    }
    interface UserProfile {
    }
}
declare global {
    interface HTMLDialogCardElement extends Components.DialogCard, HTMLStencilElement {
    }
    var HTMLDialogCardElement: {
        prototype: HTMLDialogCardElement;
        new (): HTMLDialogCardElement;
    };
    interface HTMLDialogCategoriesElement extends Components.DialogCategories, HTMLStencilElement {
    }
    var HTMLDialogCategoriesElement: {
        prototype: HTMLDialogCategoriesElement;
        new (): HTMLDialogCategoriesElement;
    };
    interface HTMLFooterAudioElement extends Components.FooterAudio, HTMLStencilElement {
    }
    var HTMLFooterAudioElement: {
        prototype: HTMLFooterAudioElement;
        new (): HTMLFooterAudioElement;
    };
    interface HTMLFooterTextElement extends Components.FooterText, HTMLStencilElement {
    }
    var HTMLFooterTextElement: {
        prototype: HTMLFooterTextElement;
        new (): HTMLFooterTextElement;
    };
    interface HTMLMChatDialogsElement extends Components.MChatDialogs, HTMLStencilElement {
    }
    var HTMLMChatDialogsElement: {
        prototype: HTMLMChatDialogsElement;
        new (): HTMLMChatDialogsElement;
    };
    interface HTMLMChatFooterElement extends Components.MChatFooter, HTMLStencilElement {
    }
    var HTMLMChatFooterElement: {
        prototype: HTMLMChatFooterElement;
        new (): HTMLMChatFooterElement;
    };
    interface HTMLMChatHeaderElement extends Components.MChatHeader, HTMLStencilElement {
    }
    var HTMLMChatHeaderElement: {
        prototype: HTMLMChatHeaderElement;
        new (): HTMLMChatHeaderElement;
    };
    interface HTMLMessageFromElement extends Components.MessageFrom, HTMLStencilElement {
    }
    var HTMLMessageFromElement: {
        prototype: HTMLMessageFromElement;
        new (): HTMLMessageFromElement;
    };
    interface HTMLMessageImgElement extends Components.MessageImg, HTMLStencilElement {
    }
    var HTMLMessageImgElement: {
        prototype: HTMLMessageImgElement;
        new (): HTMLMessageImgElement;
    };
    interface HTMLMessageTextElement extends Components.MessageText, HTMLStencilElement {
    }
    var HTMLMessageTextElement: {
        prototype: HTMLMessageTextElement;
        new (): HTMLMessageTextElement;
    };
    interface HTMLMobileChatElement extends Components.MobileChat, HTMLStencilElement {
    }
    var HTMLMobileChatElement: {
        prototype: HTMLMobileChatElement;
        new (): HTMLMobileChatElement;
    };
    interface HTMLMobileDialogsElement extends Components.MobileDialogs, HTMLStencilElement {
    }
    var HTMLMobileDialogsElement: {
        prototype: HTMLMobileDialogsElement;
        new (): HTMLMobileDialogsElement;
    };
    interface HTMLMobilePersonalElement extends Components.MobilePersonal, HTMLStencilElement {
    }
    var HTMLMobilePersonalElement: {
        prototype: HTMLMobilePersonalElement;
        new (): HTMLMobilePersonalElement;
    };
    interface HTMLModuleChatElement extends Components.ModuleChat, HTMLStencilElement {
    }
    var HTMLModuleChatElement: {
        prototype: HTMLModuleChatElement;
        new (): HTMLModuleChatElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLPersonalFooterElement extends Components.PersonalFooter, HTMLStencilElement {
    }
    var HTMLPersonalFooterElement: {
        prototype: HTMLPersonalFooterElement;
        new (): HTMLPersonalFooterElement;
    };
    interface HTMLPersonalMessageElement extends Components.PersonalMessage, HTMLStencilElement {
    }
    var HTMLPersonalMessageElement: {
        prototype: HTMLPersonalMessageElement;
        new (): HTMLPersonalMessageElement;
    };
    interface HTMLSAdamChatElement extends Components.SAdamChat, HTMLStencilElement {
    }
    var HTMLSAdamChatElement: {
        prototype: HTMLSAdamChatElement;
        new (): HTMLSAdamChatElement;
    };
    interface HTMLSAdamContactsElement extends Components.SAdamContacts, HTMLStencilElement {
    }
    var HTMLSAdamContactsElement: {
        prototype: HTMLSAdamContactsElement;
        new (): HTMLSAdamContactsElement;
    };
    interface HTMLSAdamCopyingElement extends Components.SAdamCopying, HTMLStencilElement {
    }
    var HTMLSAdamCopyingElement: {
        prototype: HTMLSAdamCopyingElement;
        new (): HTMLSAdamCopyingElement;
    };
    interface HTMLSAdamDirectElement extends Components.SAdamDirect, HTMLStencilElement {
    }
    var HTMLSAdamDirectElement: {
        prototype: HTMLSAdamDirectElement;
        new (): HTMLSAdamDirectElement;
    };
    interface HTMLSAdamNavItemElement extends Components.SAdamNavItem, HTMLStencilElement {
    }
    var HTMLSAdamNavItemElement: {
        prototype: HTMLSAdamNavItemElement;
        new (): HTMLSAdamNavItemElement;
    };
    interface HTMLSAdamNavigateElement extends Components.SAdamNavigate, HTMLStencilElement {
    }
    var HTMLSAdamNavigateElement: {
        prototype: HTMLSAdamNavigateElement;
        new (): HTMLSAdamNavigateElement;
    };
    interface HTMLSAdamNoChatElement extends Components.SAdamNoChat, HTMLStencilElement {
    }
    var HTMLSAdamNoChatElement: {
        prototype: HTMLSAdamNoChatElement;
        new (): HTMLSAdamNoChatElement;
    };
    interface HTMLSAdamPersonalHeaderElement extends Components.SAdamPersonalHeader, HTMLStencilElement {
    }
    var HTMLSAdamPersonalHeaderElement: {
        prototype: HTMLSAdamPersonalHeaderElement;
        new (): HTMLSAdamPersonalHeaderElement;
    };
    interface HTMLSAdamProfileElement extends Components.SAdamProfile, HTMLStencilElement {
    }
    var HTMLSAdamProfileElement: {
        prototype: HTMLSAdamProfileElement;
        new (): HTMLSAdamProfileElement;
    };
    interface HTMLSAdamSearchContactElement extends Components.SAdamSearchContact, HTMLStencilElement {
    }
    var HTMLSAdamSearchContactElement: {
        prototype: HTMLSAdamSearchContactElement;
        new (): HTMLSAdamSearchContactElement;
    };
    interface HTMLUserProfileElement extends Components.UserProfile, HTMLStencilElement {
    }
    var HTMLUserProfileElement: {
        prototype: HTMLUserProfileElement;
        new (): HTMLUserProfileElement;
    };
    interface HTMLElementTagNameMap {
        "dialog-card": HTMLDialogCardElement;
        "dialog-categories": HTMLDialogCategoriesElement;
        "footer-audio": HTMLFooterAudioElement;
        "footer-text": HTMLFooterTextElement;
        "m-chat-dialogs": HTMLMChatDialogsElement;
        "m-chat-footer": HTMLMChatFooterElement;
        "m-chat-header": HTMLMChatHeaderElement;
        "message-from": HTMLMessageFromElement;
        "message-img": HTMLMessageImgElement;
        "message-text": HTMLMessageTextElement;
        "mobile-chat": HTMLMobileChatElement;
        "mobile-dialogs": HTMLMobileDialogsElement;
        "mobile-personal": HTMLMobilePersonalElement;
        "module-chat": HTMLModuleChatElement;
        "my-component": HTMLMyComponentElement;
        "personal-footer": HTMLPersonalFooterElement;
        "personal-message": HTMLPersonalMessageElement;
        "s-adam-chat": HTMLSAdamChatElement;
        "s-adam-contacts": HTMLSAdamContactsElement;
        "s-adam-copying": HTMLSAdamCopyingElement;
        "s-adam-direct": HTMLSAdamDirectElement;
        "s-adam-nav-item": HTMLSAdamNavItemElement;
        "s-adam-navigate": HTMLSAdamNavigateElement;
        "s-adam-no-chat": HTMLSAdamNoChatElement;
        "s-adam-personal-header": HTMLSAdamPersonalHeaderElement;
        "s-adam-profile": HTMLSAdamProfileElement;
        "s-adam-search-contact": HTMLSAdamSearchContactElement;
        "user-profile": HTMLUserProfileElement;
    }
}
declare namespace LocalJSX {
    interface DialogCard {
        /**
          * карточка диалога
         */
        "mess"?: ChatDialogInterface;
        /**
          * clock on dialog
         */
        "onClickToDialog"?: (event: CustomEvent<ChatDialogInterface>) => void;
        /**
          * карточка диалога
         */
        "theme"?: "comp" | "mobile";
    }
    interface DialogCategories {
        "categories"?: ChatCategoryInterface[];
        /**
          * clock on Category
         */
        "onClickToCategory"?: (event: CustomEvent<ChatCategoryInterface>) => void;
        "theme"?: "comp" | "module" | "mobile";
    }
    interface FooterAudio {
        /**
          * Эвент окончания записи аудио
         */
        "onRecordFinished"?: (event: CustomEvent<boolean>) => void;
        /**
          * Пропс с классом CSS
         */
        "theme"?: "comp" | "mobile" | "module";
    }
    interface FooterText {
        /**
          * Возможность записи аудио
         */
        "canRecordAudio"?: boolean;
        "onSendTextMessage"?: (event: CustomEvent<string>) => void;
        /**
          * Пока футера аудио
         */
        "onShowRecordAudioFooter"?: (event: CustomEvent<void>) => void;
        "onShowSendFileFooter"?: (event: CustomEvent<void>) => void;
        /**
          * Пропс с классом
         */
        "theme"?: "comp" | "mobile" | "module";
    }
    interface MChatDialogs {
        /**
          * массив диалогов
         */
        "dialogs"?: ChatDialogInterface[];
    }
    interface MChatFooter {
        /**
          * click to click To Show Contacts
         */
        "onClickToShowContacts"?: (event: CustomEvent<void>) => void;
        /**
          * click to click To Show Dialogs
         */
        "onClickToShowDialogs"?: (event: CustomEvent<void>) => void;
        /**
          * click to click To Show Contacts
         */
        "onClickToShowMenuBar"?: (event: CustomEvent<void>) => void;
        /**
          * Данные выбора темы для Мобильная/Модульной версии
         */
        "theme"?: "mobile" | "module";
    }
    interface MChatHeader {
        /**
          * массив категорий диалогов
         */
        "categories"?: ChatCategoryInterface[];
        /**
          * cancel search
         */
        "onCancelSearchPersonal"?: (event: CustomEvent<void>) => void;
        /**
          * click to add dialog
         */
        "onClickToAddDialog"?: (event: CustomEvent<void>) => void;
        /**
          * clock on searchDialogs
         */
        "onSearchDialogs"?: (event: CustomEvent<ChatDialogInterface>) => void;
    }
    interface MessageFrom {
        /**
          * Принимаем сообщения для пользователя
         */
        "message"?: ChatMessage;
    }
    interface MessageImg {
        /**
          * Проверка статуса доставки сообщения
         */
        "checkSendMess"?: any;
        /**
          * Принимаем сообщения для пользователя
         */
        "message"?: any;
    }
    interface MessageText {
        /**
          * Проверка статуса доставки сообщения
         */
        "checkSendMess"?: any;
        /**
          * Получаем время оттправки сообщения
         */
        "createSendTime"?: any;
        /**
          * Принимаем сообщения для пользователя
         */
        "message"?: ChatMessage;
    }
    interface MobileChat {
    }
    interface MobileDialogs {
        /**
          * массив категорий диалогов
         */
        "categories"?: ChatCategoryInterface[];
        /**
          * массив сообщений
         */
        "dialogs"?: ChatDialogInterface[];
        /**
          * cancel
         */
        "onCancelSearchPersonal"?: (event: CustomEvent<void>) => void;
        /**
          * click to add dialog
         */
        "onClickToAddDialog"?: (event: CustomEvent<string>) => void;
        /**
          * clock on Category
         */
        "onClickToCategory"?: (event: CustomEvent<ChatCategoryInterface>) => void;
        /**
          * click to dialog
         */
        "onClickToDialog"?: (event: CustomEvent<string>) => void;
        /**
          * click to click To Show Contacts
         */
        "onClickToShowContacts"?: (event: CustomEvent<void>) => void;
        /**
          * click to click To Show Dialogs
         */
        "onClickToShowDialogs"?: (event: CustomEvent<void>) => void;
        /**
          * click to click To Show MenuBar
         */
        "onClickToShowMenuBar"?: (event: CustomEvent<void>) => void;
        /**
          * clock on searchDialogs
         */
        "onSearchDialogs"?: (event: CustomEvent<ChatDialogInterface>) => void;
    }
    interface MobilePersonal {
        /**
          * array data personal messages
         */
        "message"?: ChatMessage[];
        /**
          * cancel
         */
        "onCancelSearchPersonal"?: (event: CustomEvent<string>) => void;
        /**
          * click to show Dialogs
         */
        "onClickToShowDialogs"?: (event: CustomEvent<string>) => void;
        /**
          * click to user profile
         */
        "onClickToUserProfile"?: (event: CustomEvent<string>) => void;
        /**
          * search for private messages
         */
        "onSearchPersonalMessages"?: (event: CustomEvent<string>) => void;
    }
    interface ModuleChat {
    }
    interface MyComponent {
    }
    interface PersonalFooter {
        /**
          * Возможность записи аудио
         */
        "canRecordAudio"?: boolean;
        /**
          * click on navigate
         */
        "onClickToLink"?: (event: CustomEvent<any>) => void;
        "theme"?: "comp" | "mobile" | "module";
    }
    interface PersonalMessage {
        /**
          * array data personal messages
         */
        "message"?: ChatMessage[];
        "theme"?: "mobile" | "module" | "comp";
        "writing"?: ChatWritingUserInterface[];
    }
    interface SAdamChat {
    }
    interface SAdamContacts {
        /**
          * массив категорий диалогов
         */
        "categories"?: ChatCategoryInterface[];
        /**
          * Массив с элементами диалога
         */
        "dialogs"?: ChatDialogInterface[];
        /**
          * clock on Category
         */
        "onClickToCategory"?: (event: CustomEvent<ChatCategoryInterface>) => void;
        /**
          * Cобытие клика по диалогу
         */
        "onClickToDialog"?: (event: CustomEvent<ChatDialogInterface>) => void;
        /**
          * Поиск по контактам
         */
        "onSearchDialogs"?: (event: CustomEvent<ChatDialogInterface>) => void;
    }
    interface SAdamCopying {
    }
    interface SAdamDirect {
        /**
          * Личный диалог
         */
        "message"?: ChatMessage[];
        /**
          * Клик по иконке поиска
         */
        "onSearchPersonalMessage"?: (event: CustomEvent<ChatMessage>) => void;
        /**
          * клик по имени юзера в личной переписке
         */
        "onVisibleUserProfile"?: (event: CustomEvent<void>) => void;
    }
    interface SAdamNavItem {
        /**
          * Иконки навигации
         */
        "navItems"?: ChatNavItems;
    }
    interface SAdamNavigate {
        /**
          * Логотип
         */
        "logo"?: ChatLogo;
        /**
          * Иконки навигации
         */
        "navItems"?: ChatNavItems[];
    }
    interface SAdamNoChat {
    }
    interface SAdamPersonalHeader {
        /**
          * Личный диалог
         */
        "message"?: ChatMessage[];
        /**
          * Сброс фильтра сообщений
         */
        "onResetMessagesFilter"?: (event: CustomEvent<void>) => void;
        /**
          * Клик по иконке поиска
         */
        "onSearchPersonalMessage"?: (event: CustomEvent<ChatMessage>) => void;
        /**
          * клик по имени юзера в личной переписке
         */
        "onVisibleUserProfile"?: (event: CustomEvent<void>) => void;
    }
    interface SAdamProfile {
        "onClickToShowDialogs"?: (event: CustomEvent<any>) => void;
        /**
          * Задаем стиль для мобильной/пк версии
         */
        "theme"?: "comp" | "mobile" | "module";
    }
    interface SAdamSearchContact {
        /**
          * Поиск по контактам
         */
        "onSearchDialogs"?: (event: CustomEvent<ChatDialogInterface>) => void;
    }
    interface UserProfile {
        "onClickToShowDialogs"?: (event: CustomEvent<any>) => void;
    }
    interface IntrinsicElements {
        "dialog-card": DialogCard;
        "dialog-categories": DialogCategories;
        "footer-audio": FooterAudio;
        "footer-text": FooterText;
        "m-chat-dialogs": MChatDialogs;
        "m-chat-footer": MChatFooter;
        "m-chat-header": MChatHeader;
        "message-from": MessageFrom;
        "message-img": MessageImg;
        "message-text": MessageText;
        "mobile-chat": MobileChat;
        "mobile-dialogs": MobileDialogs;
        "mobile-personal": MobilePersonal;
        "module-chat": ModuleChat;
        "my-component": MyComponent;
        "personal-footer": PersonalFooter;
        "personal-message": PersonalMessage;
        "s-adam-chat": SAdamChat;
        "s-adam-contacts": SAdamContacts;
        "s-adam-copying": SAdamCopying;
        "s-adam-direct": SAdamDirect;
        "s-adam-nav-item": SAdamNavItem;
        "s-adam-navigate": SAdamNavigate;
        "s-adam-no-chat": SAdamNoChat;
        "s-adam-personal-header": SAdamPersonalHeader;
        "s-adam-profile": SAdamProfile;
        "s-adam-search-contact": SAdamSearchContact;
        "user-profile": UserProfile;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "dialog-card": LocalJSX.DialogCard & JSXBase.HTMLAttributes<HTMLDialogCardElement>;
            "dialog-categories": LocalJSX.DialogCategories & JSXBase.HTMLAttributes<HTMLDialogCategoriesElement>;
            "footer-audio": LocalJSX.FooterAudio & JSXBase.HTMLAttributes<HTMLFooterAudioElement>;
            "footer-text": LocalJSX.FooterText & JSXBase.HTMLAttributes<HTMLFooterTextElement>;
            "m-chat-dialogs": LocalJSX.MChatDialogs & JSXBase.HTMLAttributes<HTMLMChatDialogsElement>;
            "m-chat-footer": LocalJSX.MChatFooter & JSXBase.HTMLAttributes<HTMLMChatFooterElement>;
            "m-chat-header": LocalJSX.MChatHeader & JSXBase.HTMLAttributes<HTMLMChatHeaderElement>;
            "message-from": LocalJSX.MessageFrom & JSXBase.HTMLAttributes<HTMLMessageFromElement>;
            "message-img": LocalJSX.MessageImg & JSXBase.HTMLAttributes<HTMLMessageImgElement>;
            "message-text": LocalJSX.MessageText & JSXBase.HTMLAttributes<HTMLMessageTextElement>;
            "mobile-chat": LocalJSX.MobileChat & JSXBase.HTMLAttributes<HTMLMobileChatElement>;
            "mobile-dialogs": LocalJSX.MobileDialogs & JSXBase.HTMLAttributes<HTMLMobileDialogsElement>;
            "mobile-personal": LocalJSX.MobilePersonal & JSXBase.HTMLAttributes<HTMLMobilePersonalElement>;
            "module-chat": LocalJSX.ModuleChat & JSXBase.HTMLAttributes<HTMLModuleChatElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "personal-footer": LocalJSX.PersonalFooter & JSXBase.HTMLAttributes<HTMLPersonalFooterElement>;
            "personal-message": LocalJSX.PersonalMessage & JSXBase.HTMLAttributes<HTMLPersonalMessageElement>;
            "s-adam-chat": LocalJSX.SAdamChat & JSXBase.HTMLAttributes<HTMLSAdamChatElement>;
            "s-adam-contacts": LocalJSX.SAdamContacts & JSXBase.HTMLAttributes<HTMLSAdamContactsElement>;
            "s-adam-copying": LocalJSX.SAdamCopying & JSXBase.HTMLAttributes<HTMLSAdamCopyingElement>;
            "s-adam-direct": LocalJSX.SAdamDirect & JSXBase.HTMLAttributes<HTMLSAdamDirectElement>;
            "s-adam-nav-item": LocalJSX.SAdamNavItem & JSXBase.HTMLAttributes<HTMLSAdamNavItemElement>;
            "s-adam-navigate": LocalJSX.SAdamNavigate & JSXBase.HTMLAttributes<HTMLSAdamNavigateElement>;
            "s-adam-no-chat": LocalJSX.SAdamNoChat & JSXBase.HTMLAttributes<HTMLSAdamNoChatElement>;
            "s-adam-personal-header": LocalJSX.SAdamPersonalHeader & JSXBase.HTMLAttributes<HTMLSAdamPersonalHeaderElement>;
            "s-adam-profile": LocalJSX.SAdamProfile & JSXBase.HTMLAttributes<HTMLSAdamProfileElement>;
            "s-adam-search-contact": LocalJSX.SAdamSearchContact & JSXBase.HTMLAttributes<HTMLSAdamSearchContactElement>;
            "user-profile": LocalJSX.UserProfile & JSXBase.HTMLAttributes<HTMLUserProfileElement>;
        }
    }
}
