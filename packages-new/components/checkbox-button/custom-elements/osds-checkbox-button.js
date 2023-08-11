import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { O as OdsThemeColorIntent, d as defineCustomElement$2, a as ODS_ICON_SIZE } from './osds-icon2.js';

var ODS_ICON_NAME;
(function (ODS_ICON_NAME) {
  ODS_ICON_NAME["ADD"] = "add";
  ODS_ICON_NAME["ARROW_DOWN_RIGHT"] = "arrow-down-right";
  ODS_ICON_NAME["ARROW_DOWN"] = "arrow-down";
  ODS_ICON_NAME["ARROW_LEFT"] = "arrow-left";
  ODS_ICON_NAME["ARROW_RIGHT"] = "arrow-right";
  ODS_ICON_NAME["ARROW_TRANSFER"] = "arrow-transfer";
  ODS_ICON_NAME["ARROW_UP_RIGHT"] = "arrow-up-right";
  ODS_ICON_NAME["ARROW_UP"] = "arrow-up";
  ODS_ICON_NAME["BELL"] = "bell";
  ODS_ICON_NAME["BIN"] = "bin";
  ODS_ICON_NAME["BOOK"] = "book";
  ODS_ICON_NAME["CALENDAR"] = "calendar";
  ODS_ICON_NAME["CART"] = "cart";
  ODS_ICON_NAME["CHAT"] = "chat";
  ODS_ICON_NAME["CHECK"] = "check";
  ODS_ICON_NAME["CHEVRON_DOWN"] = "chevron-down";
  ODS_ICON_NAME["CHEVRON_LEFT"] = "chevron-left";
  ODS_ICON_NAME["CHEVRON_RIGHT"] = "chevron-right";
  ODS_ICON_NAME["CHEVRON_UP_DOWN"] = "chevron-up-down";
  ODS_ICON_NAME["CHEVRON_UP"] = "chevron-up";
  ODS_ICON_NAME["CLOCK_WAIT"] = "clock-wait";
  ODS_ICON_NAME["CLOSE"] = "close";
  ODS_ICON_NAME["COPY"] = "copy";
  ODS_ICON_NAME["DOWNLOAD"] = "download";
  ODS_ICON_NAME["ELLIPSIS_VERTICAL"] = "ellipsis-vertical";
  ODS_ICON_NAME["ELLIPSIS"] = "ellipsis";
  ODS_ICON_NAME["EMAIL"] = "email";
  ODS_ICON_NAME["EQUAL"] = "equal";
  ODS_ICON_NAME["ERROR_CIRCLE"] = "error-circle";
  ODS_ICON_NAME["ERROR"] = "error";
  ODS_ICON_NAME["EXTERNAL_LINK"] = "external-link";
  ODS_ICON_NAME["EYE_CLOSED"] = "eye-closed";
  ODS_ICON_NAME["EYE_OPEN"] = "eye-open";
  ODS_ICON_NAME["FILE"] = "file";
  ODS_ICON_NAME["FILTER"] = "filter";
  ODS_ICON_NAME["FOLDER"] = "folder";
  ODS_ICON_NAME["GEAR"] = "gear";
  ODS_ICON_NAME["GUIDES"] = "guides";
  ODS_ICON_NAME["HAMBURGER"] = "hamburger";
  ODS_ICON_NAME["HELP_CIRCLE"] = "help-circle";
  ODS_ICON_NAME["HELP"] = "help";
  ODS_ICON_NAME["HOME"] = "home";
  ODS_ICON_NAME["INDETERMINATE"] = "indeterminate";
  ODS_ICON_NAME["INFO_CIRCLE"] = "info-circle";
  ODS_ICON_NAME["INFO"] = "info";
  ODS_ICON_NAME["LIGHTBULB"] = "lightbulb";
  ODS_ICON_NAME["LIST"] = "list";
  ODS_ICON_NAME["LOCATION"] = "location";
  ODS_ICON_NAME["LOCK"] = "lock";
  ODS_ICON_NAME["MINUS"] = "minus";
  ODS_ICON_NAME["OK"] = "ok";
  ODS_ICON_NAME["OVH"] = "ovh";
  ODS_ICON_NAME["PEN"] = "pen";
  ODS_ICON_NAME["PHONE"] = "phone";
  ODS_ICON_NAME["PLUS"] = "plus";
  ODS_ICON_NAME["PRINTER"] = "printer";
  ODS_ICON_NAME["REFRESH"] = "refresh";
  ODS_ICON_NAME["REMOVE"] = "remove";
  ODS_ICON_NAME["SEARCH"] = "search";
  ODS_ICON_NAME["SETTINGS"] = "settings";
  ODS_ICON_NAME["SHAPE_CIRCLE"] = "shape-circle";
  ODS_ICON_NAME["SHAPE_DOT"] = "shape-dot";
  ODS_ICON_NAME["SORT_DOWN"] = "sort-down";
  ODS_ICON_NAME["SORT_UP"] = "sort-up";
  ODS_ICON_NAME["SORT"] = "sort";
  ODS_ICON_NAME["SUCCESS_CIRCLE"] = "success-circle";
  ODS_ICON_NAME["SUCCESS"] = "success";
  ODS_ICON_NAME["TIME"] = "time";
  ODS_ICON_NAME["TRANSFER"] = "transfer";
  ODS_ICON_NAME["TRASH"] = "trash";
  ODS_ICON_NAME["TRIANGLE_DOWN"] = "triangle-down";
  ODS_ICON_NAME["TRIANGLE_LEFT"] = "triangle-left";
  ODS_ICON_NAME["TRIANGLE_RIGHT"] = "triangle-right";
  ODS_ICON_NAME["TRIANGLE_UP"] = "triangle-up";
  ODS_ICON_NAME["TRUCK"] = "truck";
  ODS_ICON_NAME["USER"] = "user";
  ODS_ICON_NAME["WARNING_CIRCLE"] = "warning-circle";
  ODS_ICON_NAME["WARNING"] = "warning";
  ODS_ICON_NAME["ANTI_DDOS_PROTECTION_CONCEPT"] = "anti-ddos-protection-concept";
  ODS_ICON_NAME["APP_GEAR_CONCEPT"] = "app-gear-concept";
  ODS_ICON_NAME["APP_REPLICATION_CONCEPT"] = "app-replication-concept";
  ODS_ICON_NAME["APP_SCRIPT_CONCEPT"] = "app-script-concept";
  ODS_ICON_NAME["APP_WORLD_CONCEPT"] = "app-world-concept";
  ODS_ICON_NAME["APPLICATION_CONCEPT"] = "application-concept";
  ODS_ICON_NAME["ARROW_CROSSED_CONCEPT"] = "arrow-crossed-concept";
  ODS_ICON_NAME["ARROW_DOWN_CONCEPT"] = "arrow-down-concept";
  ODS_ICON_NAME["ARROW_LEFT_CONCEPT"] = "arrow-left-concept";
  ODS_ICON_NAME["ARROW_RIGHT_CONCEPT"] = "arrow-right-concept";
  ODS_ICON_NAME["ARROW_UNDO_CONCEPT"] = "arrow-undo-concept";
  ODS_ICON_NAME["BALANCE_CONCEPT"] = "balance-concept";
  ODS_ICON_NAME["BANDWIDTH_CONCEPT"] = "bandwidth-concept";
  ODS_ICON_NAME["BELL_CONCEPT"] = "bell-concept";
  ODS_ICON_NAME["BIRD_CONCEPT"] = "bird-concept";
  ODS_ICON_NAME["BOOK_CLOSE_CONCEPT"] = "book-close-concept";
  ODS_ICON_NAME["BOOK_CONTACT_CONCEPT"] = "book-contact-concept";
  ODS_ICON_NAME["BOOK_OPEN_CONCEPT"] = "book-open-concept";
  ODS_ICON_NAME["BROOM_CONCEPT"] = "broom-concept";
  ODS_ICON_NAME["BRUSH_CONCEPT"] = "brush-concept";
  ODS_ICON_NAME["CABLE_SPEED_CONCEPT"] = "cable-speed-concept";
  ODS_ICON_NAME["CALENDAR_PAY_AS_YOU_GO_CONCEPT"] = "calendar-pay-as-you-go-concept";
  ODS_ICON_NAME["CALENDAR_CONCEPT"] = "calendar-concept";
  ODS_ICON_NAME["CAMERA_CONCEPT"] = "camera-concept";
  ODS_ICON_NAME["CART_CONCEPT"] = "cart-concept";
  ODS_ICON_NAME["CDN_CONCEPT"] = "cdn-concept";
  ODS_ICON_NAME["CHATBOT_CONCEPT"] = "chatbot-concept";
  ODS_ICON_NAME["CHRONO_CONCEPT"] = "chrono-concept";
  ODS_ICON_NAME["CLOCK_AVAILABLE_CONCEPT"] = "clock-available-concept";
  ODS_ICON_NAME["CLOCK_CONCEPT"] = "clock-concept";
  ODS_ICON_NAME["CLOUD_DATA_SHARING_CONCEPT"] = "cloud-data-sharing-concept";
  ODS_ICON_NAME["CLOUD_EDGE_COMPUTING_CONCEPT"] = "cloud-edge-computing-concept";
  ODS_ICON_NAME["CLOUD_ESSENTIAL_CONCEPT"] = "cloud-essential-concept";
  ODS_ICON_NAME["CLOUD_EYE_CONCEPT"] = "cloud-eye-concept";
  ODS_ICON_NAME["CLOUD_HAND_CONCEPT"] = "cloud-hand-concept";
  ODS_ICON_NAME["CLOUD_HYBRID_CONCEPT"] = "cloud-hybrid-concept";
  ODS_ICON_NAME["CLOUD_INFINITY_CONCEPT"] = "cloud-infinity-concept";
  ODS_ICON_NAME["CLOUD_PADLOCK_CONCEPT"] = "cloud-padlock-concept";
  ODS_ICON_NAME["CLOUD_SERVER_CONCEPT"] = "cloud-server-concept";
  ODS_ICON_NAME["CLOUD_CONCEPT"] = "cloud-concept";
  ODS_ICON_NAME["COMMUNITY_CONCEPT"] = "community-concept";
  ODS_ICON_NAME["COMPONENT_SQUARE_CONCEPT"] = "component-square-concept";
  ODS_ICON_NAME["COMPONENT_CONCEPT"] = "component-concept";
  ODS_ICON_NAME["COMPUTE_CONCEPT"] = "compute-concept";
  ODS_ICON_NAME["COMPUTER_CURVE_CONCEPT"] = "computer-curve-concept";
  ODS_ICON_NAME["COMPUTER_FLOPPY_CONCEPT"] = "computer-floppy-concept";
  ODS_ICON_NAME["COMPUTER_FOLDER_CONCEPT"] = "computer-folder-concept";
  ODS_ICON_NAME["COMPUTER_LAPTOP_CLOUD_CONCEPT"] = "computer-laptop-cloud-concept";
  ODS_ICON_NAME["COMPUTER_LAPTOP_CONCEPT"] = "computer-laptop-concept";
  ODS_ICON_NAME["COMPUTER_V_R_OPS_CONCEPT"] = "computer-v-r-ops-concept";
  ODS_ICON_NAME["COMPUTER_CONCEPT"] = "computer-concept";
  ODS_ICON_NAME["CONTAINER_CONCEPT"] = "container-concept";
  ODS_ICON_NAME["COUNTER_CONCEPT"] = "counter-concept";
  ODS_ICON_NAME["CREDIT_CARD_CLOCK_CONCEPT"] = "credit-card-clock-concept";
  ODS_ICON_NAME["CREDIT_CARD_CONCEPT"] = "credit-card-concept";
  ODS_ICON_NAME["CURVE_CONCEPT"] = "curve-concept";
  ODS_ICON_NAME["DATABASE_COLD_ARCHIVE_CONCEPT"] = "database-cold-archive-concept";
  ODS_ICON_NAME["DATABASE_SQL_CONCEPT"] = "database-sql-concept";
  ODS_ICON_NAME["DATABASE_CONCEPT"] = "database-concept";
  ODS_ICON_NAME["DATACENTER_CONCEPT"] = "datacenter-concept";
  ODS_ICON_NAME["DEVICE_MOBILE_CONCEPT"] = "device-mobile-concept";
  ODS_ICON_NAME["DEVICE_TABLET_CONCEPT"] = "device-tablet-concept";
  ODS_ICON_NAME["DIAMOND_CONCEPT"] = "diamond-concept";
  ODS_ICON_NAME["DIFFERENT_CONCEPT"] = "different-concept";
  ODS_ICON_NAME["DNS_ANYCAST_CONCEPT"] = "dns-anycast-concept";
  ODS_ICON_NAME["DOMAINS_CONCEPT"] = "domains-concept";
  ODS_ICON_NAME["DOWNLOAD_CONCEPT"] = "download-concept";
  ODS_ICON_NAME["DSLAM_CONCEPT"] = "dslam-concept";
  ODS_ICON_NAME["ENVELOP_LETTER_CONCEPT"] = "envelop-letter-concept";
  ODS_ICON_NAME["ENVELOP_CONCEPT"] = "envelop-concept";
  ODS_ICON_NAME["ETHERNET_ADD_CONCEPT"] = "ethernet-add-concept";
  ODS_ICON_NAME["ETHERNET_CONCEPT"] = "ethernet-concept";
  ODS_ICON_NAME["EXPANSION_ARROWS_CONCEPT"] = "expansion-arrows-concept";
  ODS_ICON_NAME["EXPORT_CONCEPT"] = "export-concept";
  ODS_ICON_NAME["EYE_CONCEPT"] = "eye-concept";
  ODS_ICON_NAME["FLASK_CONCEPT"] = "flask-concept";
  ODS_ICON_NAME["FLOPPY_CLOCK_CONCEPT"] = "floppy-clock-concept";
  ODS_ICON_NAME["FLOPPY_RELOAD_CONCEPT"] = "floppy-reload-concept";
  ODS_ICON_NAME["FLOPPY_CONCEPT"] = "floppy-concept";
  ODS_ICON_NAME["FOLDER_FTP_CONCEPT"] = "folder-ftp-concept";
  ODS_ICON_NAME["FOLDER_CONCEPT"] = "folder-concept";
  ODS_ICON_NAME["GEAR_ARROW_CONCEPT"] = "gear-arrow-concept";
  ODS_ICON_NAME["GEAR_DOLLAR_CONCEPT"] = "gear-dollar-concept";
  ODS_ICON_NAME["GEAR_CONCEPT"] = "gear-concept";
  ODS_ICON_NAME["GEOLOCALISATION_OVHCLOUD_CONCEPT"] = "geolocalisation-ovhcloud-concept";
  ODS_ICON_NAME["GEOLOCALISATION_PLAN_CONCEPT"] = "geolocalisation-plan-concept";
  ODS_ICON_NAME["GIFT_CONCEPT"] = "gift-concept";
  ODS_ICON_NAME["GRAPH_CONCEPT"] = "graph-concept";
  ODS_ICON_NAME["HAND_LEAF_CONCEPT"] = "hand-leaf-concept";
  ODS_ICON_NAME["HAND_WORLD_CONCEPT"] = "hand-world-concept";
  ODS_ICON_NAME["HANDSHAKE_CONCEPT"] = "handshake-concept";
  ODS_ICON_NAME["HARDWARE_GPU_CONCEPT"] = "hardware-gpu-concept";
  ODS_ICON_NAME["HARDWARE_SATA_CONCEPT"] = "hardware-sata-concept";
  ODS_ICON_NAME["HARDWARE_SSD_CONCEPT"] = "hardware-ssd-concept";
  ODS_ICON_NAME["HASHTAG_CONCEPT"] = "hashtag-concept";
  ODS_ICON_NAME["HOURGLASS_CONCEPT"] = "hourglass-concept";
  ODS_ICON_NAME["HOUSE_CONCEPT"] = "house-concept";
  ODS_ICON_NAME["IMPORT_CONCEPT"] = "import-concept";
  ODS_ICON_NAME["INFINITE_CONCEPT"] = "infinite-concept";
  ODS_ICON_NAME["INFO_CONCEPT"] = "info-concept";
  ODS_ICON_NAME["INVADER_CONCEPT"] = "invader-concept";
  ODS_ICON_NAME["IO_T_CONCEPT"] = "io-t-concept";
  ODS_ICON_NAME["KEY_CONCEPT"] = "key-concept";
  ODS_ICON_NAME["KEYPAD_CONCEPT"] = "keypad-concept";
  ODS_ICON_NAME["LEAF_CONCEPT"] = "leaf-concept";
  ODS_ICON_NAME["LIFEBUOY_CONCEPT"] = "lifebuoy-concept";
  ODS_ICON_NAME["LIGHTBULB_CONCEPT"] = "lightbulb-concept";
  ODS_ICON_NAME["LINE_COMMUNICATING_CONCEPT"] = "line-communicating-concept";
  ODS_ICON_NAME["LINES_SYMMETRICAL_CONCEPT"] = "lines-symmetrical-concept";
  ODS_ICON_NAME["MAGNIFYING_GLASS_CHECK_CONCEPT"] = "magnifying-glass-check-concept";
  ODS_ICON_NAME["MAGNIFYING_GLASS_PERSON_CONCEPT"] = "magnifying-glass-person-concept";
  ODS_ICON_NAME["MAGNIFYING_GLASS_CONCEPT"] = "magnifying-glass-concept";
  ODS_ICON_NAME["MAP_FRANCE_CONCEPT"] = "map-france-concept";
  ODS_ICON_NAME["MEASURE_CONCEPT"] = "measure-concept";
  ODS_ICON_NAME["MEDAL_CONCEPT"] = "medal-concept";
  ODS_ICON_NAME["MICROPHONE_CONCEPT"] = "microphone-concept";
  ODS_ICON_NAME["MODEM_CONCEPT"] = "modem-concept";
  ODS_ICON_NAME["MULTI_DEVICE_CONCEPT"] = "multi-device-concept";
  ODS_ICON_NAME["NETWORK_CONCEPT"] = "network-concept";
  ODS_ICON_NAME["NEWTAB_CONCEPT"] = "newtab-concept";
  ODS_ICON_NAME["NRA_CONCEPT"] = "nra-concept";
  ODS_ICON_NAME["OPENSTACK_CONCEPT"] = "openstack-concept";
  ODS_ICON_NAME["OVER_THE_BOX_CONCEPT"] = "over-the-box-concept";
  ODS_ICON_NAME["PADLOCK_CLOSED_CONCEPT"] = "padlock-closed-concept";
  ODS_ICON_NAME["PADLOCK_OPENED_CONCEPT"] = "padlock-opened-concept";
  ODS_ICON_NAME["PADLOCK_TRANSIT_CONCEPT"] = "padlock-transit-concept";
  ODS_ICON_NAME["PAGE_CERTIFICATE_CONCEPT"] = "page-certificate-concept";
  ODS_ICON_NAME["PAGE_INFO_CONCEPT"] = "page-info-concept";
  ODS_ICON_NAME["PAGE_QUESTION_CONCEPT"] = "page-question-concept";
  ODS_ICON_NAME["PAGE_SCRIPT_CONCEPT"] = "page-script-concept";
  ODS_ICON_NAME["PAGE_CONCEPT"] = "page-concept";
  ODS_ICON_NAME["PAPERPLANE_CONCEPT"] = "paperplane-concept";
  ODS_ICON_NAME["PARTNER_PLATFORMSH_CONCEPT"] = "partner-platformsh-concept";
  ODS_ICON_NAME["PAUSE_CONCEPT"] = "pause-concept";
  ODS_ICON_NAME["PEN_CONCEPT"] = "pen-concept";
  ODS_ICON_NAME["PERSON_HAPPY_CONCEPT"] = "person-happy-concept";
  ODS_ICON_NAME["PERSON_CONCEPT"] = "person-concept";
  ODS_ICON_NAME["PHONE_DOTS_CONCEPT"] = "phone-dots-concept";
  ODS_ICON_NAME["PHONE_FILTER_CONCEPT"] = "phone-filter-concept";
  ODS_ICON_NAME["PHONE_FOBIDDEN_CONCEPT"] = "phone-fobidden-concept";
  ODS_ICON_NAME["PHONE_FORWARD_CONCEPT"] = "phone-forward-concept";
  ODS_ICON_NAME["PHONE_CONCEPT"] = "phone-concept";
  ODS_ICON_NAME["PROMOTION"] = "promotion";
  ODS_ICON_NAME["PIG_CONCEPT"] = "pig-concept";
  ODS_ICON_NAME["PLAY_CONCEPT"] = "play-concept";
  ODS_ICON_NAME["PLUG_N_PLAY_CONCEPT"] = "plug-n-play-concept";
  ODS_ICON_NAME["POWER_CONCEPT"] = "power-concept";
  ODS_ICON_NAME["PRINTER_CONCEPT"] = "printer-concept";
  ODS_ICON_NAME["PUZZLE_CONCEPT"] = "puzzle-concept";
  ODS_ICON_NAME["RAM_CONCEPT"] = "ram-concept";
  ODS_ICON_NAME["RECEIPT_CONCEPT"] = "receipt-concept";
  ODS_ICON_NAME["RELOAD_CONCEPT"] = "reload-concept";
  ODS_ICON_NAME["REPLICATION_CONCEPT"] = "replication-concept";
  ODS_ICON_NAME["RSS_CONCEPT"] = "rss-concept";
  ODS_ICON_NAME["SCALE_UP_CONCEPT"] = "scale-up-concept";
  ODS_ICON_NAME["SERVER_GEAR_CONCEPT"] = "server-gear-concept";
  ODS_ICON_NAME["SERVER_MANAGED_CONCEPT"] = "server-managed-concept";
  ODS_ICON_NAME["SERVER_CONCEPT"] = "server-concept";
  ODS_ICON_NAME["SHARE_CONCEPT"] = "share-concept";
  ODS_ICON_NAME["SHIELD_CONCEPT"] = "shield-concept";
  ODS_ICON_NAME["SMILEY_HAPPY_CONCEPT"] = "smiley-happy-concept";
  ODS_ICON_NAME["SMILEY_SAD_CONCEPT"] = "smiley-sad-concept";
  ODS_ICON_NAME["SMS_CONCEPT"] = "sms-concept";
  ODS_ICON_NAME["SOFTWARE_CONCEPT"] = "software-concept";
  ODS_ICON_NAME["SPANNER_CONCEPT"] = "spanner-concept";
  ODS_ICON_NAME["SPEAKER_OFF_CONCEPT"] = "speaker-off-concept";
  ODS_ICON_NAME["SPEAKER_ON_CONCEPT"] = "speaker-on-concept";
  ODS_ICON_NAME["SPEECH_BUBBLE_CONCEPT"] = "speech-bubble-concept";
  ODS_ICON_NAME["STAR_CONCEPT"] = "star-concept";
  ODS_ICON_NAME["STOP_CONCEPT"] = "stop-concept";
  ODS_ICON_NAME["SUB_REPARTITOR_CONCEPT"] = "sub-repartitor-concept";
  ODS_ICON_NAME["TAPE_CONCEPT"] = "tape-concept";
  ODS_ICON_NAME["THUMB_UP_CONCEPT"] = "thumb-up-concept";
  ODS_ICON_NAME["TODO_LIST_CONCEPT"] = "todo-list-concept";
  ODS_ICON_NAME["TRAFFIC_CONE_CONCEPT"] = "traffic-cone-concept";
  ODS_ICON_NAME["TRANSFER_CONCEPT"] = "transfer-concept";
  ODS_ICON_NAME["TRASH_CONCEPT"] = "trash-concept";
  ODS_ICON_NAME["TRUCK_CONCEPT"] = "truck-concept";
  ODS_ICON_NAME["TYPING_CONCEPT"] = "typing-concept";
  ODS_ICON_NAME["UPLOAD_CONCEPT"] = "upload-concept";
  ODS_ICON_NAME["USER_FORBID_CONCEPT"] = "user-forbid-concept";
  ODS_ICON_NAME["USER_SUPPORT_CONCEPT"] = "user-support-concept";
  ODS_ICON_NAME["USER_CONCEPT"] = "user-concept";
  ODS_ICON_NAME["VIRTUAL_MACHINE_CONCEPT"] = "virtual-machine-concept";
  ODS_ICON_NAME["WALLET_CONCEPT"] = "wallet-concept";
  ODS_ICON_NAME["WARNING_CONCEPT"] = "warning-concept";
  ODS_ICON_NAME["WIFI_CONCEPT"] = "wifi-concept";
  ODS_ICON_NAME["WORLD_ADD_CONCEPT"] = "world-add-concept";
  ODS_ICON_NAME["WORLD_CONCEPT"] = "world-concept";
})(ODS_ICON_NAME || (ODS_ICON_NAME = {}));
Object.freeze(Object.values(ODS_ICON_NAME));

class OdsCheckboxButtonController {
  computeIconName(checked = false, indeterminate = false) {
    if (indeterminate) {
      return ODS_ICON_NAME.MINUS;
    }
    else if (checked) {
      return ODS_ICON_NAME.OK;
    }
    return undefined;
  }
}

var OdsCheckboxButtonSize;
(function (OdsCheckboxButtonSize) {
  OdsCheckboxButtonSize["sm"] = "sm";
  OdsCheckboxButtonSize["md"] = "md";
})(OdsCheckboxButtonSize || (OdsCheckboxButtonSize = {}));
const OdsCheckboxButtonSizes = Object.freeze(Object.values(OdsCheckboxButtonSize));

const DEFAULT_ATTRIBUTE = Object.freeze({
  checked: false,
  checking: false,
  color: OdsThemeColorIntent.default,
  disabled: false,
  hasFocus: false,
  indeterminate: false,
  interactive: false,
  size: OdsCheckboxButtonSize.md,
});

const osdsCheckboxButtonCss = ":host{align-items:center;display:grid;grid-template-columns:auto 1fr auto;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;cursor:pointer}:host .checkbox-button{border-radius:var(--ods-size-border-radius-02);border-style:solid;position:relative;text-align:center;vertical-align:middle}:host .checkbox-button osds-icon{display:none;position:absolute}:host(:is([checked],[indeterminate])) .checkbox-button osds-icon{display:block}:host([disabled]){opacity:0.5;cursor:not-allowed}slot{display:block}:host .checkbox-button{outline:none}:host(:not([color])) .checkbox-button{border-color:var(--ods-color-default-500)}:host(:not([color]):not([disabled])[interactive]:hover) .checkbox-button{background-color:var(--ods-color-default-100)}:host(:not([color]):not([disabled])[interactive]:active) .checkbox-button{background-color:var(--ods-color-default-200)}:host([color^=default]) .checkbox-button{border-color:var(--ods-color-default-500)}:host([color^=default]:not([disabled])[interactive]:hover) .checkbox-button{background-color:var(--ods-color-default-100)}:host([color^=default]:not([disabled])[interactive]:active) .checkbox-button{background-color:var(--ods-color-default-200)}:host([color^=primary]) .checkbox-button{border-color:var(--ods-color-primary-500)}:host([color^=primary]:not([disabled])[interactive]:hover) .checkbox-button{background-color:var(--ods-color-primary-100)}:host([color^=primary]:not([disabled])[interactive]:active) .checkbox-button{background-color:var(--ods-color-primary-200)}:host([color^=text]) .checkbox-button{border-color:var(--ods-color-text-500)}:host([color^=text]:not([disabled])[interactive]:hover) .checkbox-button{background-color:var(--ods-color-text-100)}:host([color^=text]:not([disabled])[interactive]:active) .checkbox-button{background-color:var(--ods-color-text-200)}:host([color^=accent]) .checkbox-button{border-color:var(--ods-color-accent-500)}:host([color^=accent]:not([disabled])[interactive]:hover) .checkbox-button{background-color:var(--ods-color-accent-100)}:host([color^=accent]:not([disabled])[interactive]:active) .checkbox-button{background-color:var(--ods-color-accent-200)}:host([color^=error]) .checkbox-button{border-color:var(--ods-color-error-500)}:host([color^=error]:not([disabled])[interactive]:hover) .checkbox-button{background-color:var(--ods-color-error-100)}:host([color^=error]:not([disabled])[interactive]:active) .checkbox-button{background-color:var(--ods-color-error-200)}:host([color^=warning]) .checkbox-button{border-color:var(--ods-color-warning-500)}:host([color^=warning]:not([disabled])[interactive]:hover) .checkbox-button{background-color:var(--ods-color-warning-100)}:host([color^=warning]:not([disabled])[interactive]:active) .checkbox-button{background-color:var(--ods-color-warning-200)}:host([color^=success]) .checkbox-button{border-color:var(--ods-color-success-500)}:host([color^=success]:not([disabled])[interactive]:hover) .checkbox-button{background-color:var(--ods-color-success-100)}:host([color^=success]:not([disabled])[interactive]:active) .checkbox-button{background-color:var(--ods-color-success-200)}:host([color^=info]) .checkbox-button{border-color:var(--ods-color-info-500)}:host([color^=info]:not([disabled])[interactive]:hover) .checkbox-button{background-color:var(--ods-color-info-100)}:host([color^=info]:not([disabled])[interactive]:active) .checkbox-button{background-color:var(--ods-color-info-200)}:host([color^=promotion]) .checkbox-button{border-color:var(--ods-color-promotion-500)}:host([color^=promotion]:not([disabled])[interactive]:hover) .checkbox-button{background-color:var(--ods-color-promotion-100)}:host([color^=promotion]:not([disabled])[interactive]:active) .checkbox-button{background-color:var(--ods-color-promotion-200)}:host([size=md]) .checkbox-button{border-width:var(--ods-size-checkbox-button-md-border-width);height:var(--ods-size-checkbox-button-md-height);margin:var(--ods-size-checkbox-button-md-margin);width:var(--ods-size-checkbox-button-md-width);aspect-ratio:1/1}:host([size=sm]) .checkbox-button{border-width:var(--ods-size-checkbox-button-sm-border-width);height:var(--ods-size-checkbox-button-sm-height);margin:var(--ods-size-checkbox-button-sm-margin);width:var(--ods-size-checkbox-button-sm-width);aspect-ratio:1/1}:host([size=sm]) slot{font-family:var(--ods-typography-body-600-font-family);font-size:var(--ods-typography-body-600-font-size);font-style:var(--ods-typography-body-600-font-style);font-weight:var(--ods-typography-body-600-font-weight);letter-spacing:var(--ods-typography-body-600-letter-spacing);line-height:var(--ods-typography-body-600-line-height)}:host([size=md]) slot{font-family:var(--ods-typography-body-600-font-family);font-size:var(--ods-typography-body-600-font-size);font-style:var(--ods-typography-body-600-font-style);font-weight:var(--ods-typography-body-600-font-weight);letter-spacing:var(--ods-typography-body-600-letter-spacing);line-height:var(--ods-typography-body-600-line-height)}";

const OsdsCheckboxButton$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.controller = new OdsCheckboxButtonController();
    /** @see OdsCheckboxButtonAttribute.checked */
    this.checked = DEFAULT_ATTRIBUTE.checked;
    /** @see OdsCheckboxButtonAttribute.checking */
    this.checking = DEFAULT_ATTRIBUTE.checking;
    /** @see OdsCheckboxButtonAttribute.color */
    this.color = DEFAULT_ATTRIBUTE.color;
    /** @see OdsCheckboxButtonAttribute.disabled */
    this.disabled = DEFAULT_ATTRIBUTE.disabled;
    /** @see OdsCheckboxButtonAttribute.hasFocus */
    this.hasFocus = DEFAULT_ATTRIBUTE.hasFocus;
    /** @see OdsCheckboxButtonAttribute.indeterminate */
    this.indeterminate = DEFAULT_ATTRIBUTE.indeterminate;
    /** @see OdsCheckboxButtonAttribute.interactive */
    this.interactive = DEFAULT_ATTRIBUTE.interactive;
    /** @see OdsCheckboxButtonAttribute.label */
    this.size = DEFAULT_ATTRIBUTE.size;
  }
  render() {
    const { checked, color, indeterminate, size, } = this;
    const iconName = this.controller.computeIconName(checked, indeterminate);
    let iconSize;
    // make corresponding between button size and icon size
    switch (size) {
      case OdsCheckboxButtonSize.sm:
        iconSize = ODS_ICON_SIZE.sm;
        break;
      case OdsCheckboxButtonSize.md:
        iconSize = ODS_ICON_SIZE.md;
        break;
      default:
        iconSize = ODS_ICON_SIZE.sm;
        break;
    }
    return (h(Host, null, h("slot", { name: 'start' }), h("div", Object.assign({ class: 'checkbox-button' }, {
      ref: (el) => this.mainEl = el,
    }), h("osds-icon", { color: color, name: iconName, size: iconSize })), h("slot", { name: 'end' })));
  }
  get el() { return this; }
  static get style() { return osdsCheckboxButtonCss; }
}, [1, "osds-checkbox-button", {
    "checked": [516],
    "checking": [516],
    "color": [513],
    "disabled": [516],
    "hasFocus": [516, "has-focus"],
    "indeterminate": [516],
    "interactive": [516],
    "size": [513]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["osds-checkbox-button", "osds-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "osds-checkbox-button":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OsdsCheckboxButton$1);
      }
      break;
    case "osds-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OsdsCheckboxButton = OsdsCheckboxButton$1;
const defineCustomElement = defineCustomElement$1;

export { OdsCheckboxButtonSize as O, OsdsCheckboxButton, OdsCheckboxButtonSizes as a, defineCustomElement };
