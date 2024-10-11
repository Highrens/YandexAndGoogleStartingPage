import caledar from "../Image/Google-Icons/calendar.png";
import disk from "../Image/Google-Icons/disk.png";
import docs from "../Image/Google-Icons/docs.png";
import keep from "../Image/Google-Icons/keep.png";
import mail from "../Image/Google-Icons/mail.png";
import maps from "../Image/Google-Icons/maps.png";
import photos from "../Image/Google-Icons/photos.png";
import tabs from "../Image/Google-Icons/tabs.png";
import translate from "../Image/Google-Icons/translate.png";

import Ydisk from "../Image/Yandex-icons/Disk_v3.svg";
import eda from "../Image/Yandex-icons/Eda_v3.svg";
import kino from "../Image/Yandex-icons/Kinopoisk_v4.svg";
import Ymaps from "../Image/Yandex-icons/Maps_v3.svg";
import market from "../Image/Yandex-icons/Market_v53.svg";
import taxi from "../Image/Yandex-icons/Taxi_v3.svg";
import Ytranslate from "../Image/Yandex-icons/Translate_v6.svg";
import weather from "../Image/Yandex-icons/Weather_v4.svg";
import music from "../Image/Yandex-icons/music_new.svg";

export const LightThemePurple = () => {
  document.documentElement.style.setProperty("--text-color", "rgb(50, 30, 70)");

  document.documentElement.style.setProperty(
    "--main-yandex-color",
    "rgb(120, 81, 169)" // Фиолетовый аналог
  );
  document.documentElement.style.setProperty(
    "--main-color",
    "rgb(128, 90, 175)" // Фиолетовый аналог
  );
  document.documentElement.style.setProperty(
    "--main-google-color",
    "rgb(136, 99, 182)" // Фиолетовый аналог
  );

  document.documentElement.style.setProperty(
    "--highlight-color",
    "rgb(102, 51, 153)" // Фиолетовый для выделений
  );

  document.documentElement.style.setProperty(
    "--border-color",
    "rgb(159, 121, 225)" // Фиолетовый аналог для границ
  );
};

export const LightBlueTheme = () => {
  document.documentElement.style.setProperty("--text-color", "rgb(30, 30, 70)");

  document.documentElement.style.setProperty(
    "--main-yandex-color",
    "rgb(70, 152, 181)"
  );
  document.documentElement.style.setProperty(
    "--main-color",
    "rgb(75, 157, 186)"
  );
  document.documentElement.style.setProperty(
    "--main-google-color",
    "rgb(80, 163, 191)"
  );

  document.documentElement.style.setProperty(
    "--highlight-color",
    "rgb(5, 149, 169)"
  );

  document.documentElement.style.setProperty(
    "--border-color",
    "rgb(75, 229, 238)"
  );
};

export const LightTheme = () => {
  document.documentElement.style.setProperty("--text-color", "rgb(10, 10, 10)");

  document.documentElement.style.setProperty(
    "--main-yandex-color",
    "rgb(200, 200, 200)"
  );
  document.documentElement.style.setProperty(
    "--main-color",
    "rgb(190, 190, 190)"
  );
  document.documentElement.style.setProperty(
    "--main-google-color",
    "rgb(180, 180, 180)"
  );

  document.documentElement.style.setProperty(
    "--highlight-color",
    "rgb(220, 220, 220)"
  );

  document.documentElement.style.setProperty(
    "--border-color",
    "rgb(230, 230, 230)"
  );
};

export const DarkTheme = () => {
  document.documentElement.style.setProperty(
    "--text-color",
    "rgb(250, 250, 255)"
  );
  document.documentElement.style.setProperty(
    "--main-yandex-color",
    "rgb(22, 22, 22)"
  );
  document.documentElement.style.setProperty("--main-color", "rgb(28, 28, 28)");
  document.documentElement.style.setProperty(
    "--main-google-color",
    "rgb(33, 33, 33)"
  );

  document.documentElement.style.setProperty(
    "--highlight-color",
    "rgb(58, 58, 58)"
  );

  document.documentElement.style.setProperty(
    "--border-color",
    "rgb(80, 80, 80)"
  );
};

export const defaultSettings = {
  isDarkTheme: true,
  openInNewTab: true,
  yandex: true,
  google: true
};

export function getGridTemplateAreas (yandexEnabled, googleEnabled) {
  if (yandexEnabled && googleEnabled) {
    return `
      "yandex google"
      "bookmarks bookmarks"
    `;
  } else if (yandexEnabled && !googleEnabled) {
    return `
      "yandex yandex"
      "bookmarks bookmarks"
    `;
  } else if (!yandexEnabled && googleEnabled) {
    return `
      "google google"
      "bookmarks bookmarks"
    `;
  } else if (!yandexEnabled && !googleEnabled) {
    return `
      "bookmarks bookmarks"
      "bookmarks bookmarks"
    `;
  }
};

export const GooogleApps = [
  {
    id: 1,
    url: "https://calendar.google.com/",
    icon: caledar,
    name: "Календарь",
  },
  {
    id: 2,
    url: "https://drive.google.com/drive/home",
    icon: disk,
    name: "Диск",
  },
  { id: 3, url: "https://docs.google.com/", icon: docs, name: "Документы" },
  { id: 4, url: "https://keep.google.com/", icon: keep, name: "Заметки" },
  { id: 5, url: "https://mail.google.com/", icon: mail, name: "Почта" },
  {
    id: 6,
    url: "https://www.google.com/maps?authuser=0",
    icon: maps,
    name: "Карты",
  },
  { id: 7, url: "https://photos.google.com/", icon: photos, name: "Фото" },
  {
    id: 8,
    url: "https://docs.google.com/spreadsheets/u/0/",
    icon: tabs,
    name: "Таблицы",
  },
  {
    id: 9,
    url: "https://translate.google.com/",
    icon: translate,
    name: "Переводчик",
  },
];

export const YandexApps = [
  { id: 1, url: "https://disk.yandex.ru/", icon: Ydisk, name: "Диск" },
  { id: 2, url: "https://eda.yandex.ru/", icon: eda, name: "Еда" },
  { id: 3, url: "https://www.kinopoisk.ru/", icon: kino, name: "Кинопоиск" },
  { id: 4, url: "https://yandex.ru/maps", icon: Ymaps, name: "Карты" },
  { id: 5, url: "https://market.yandex.ru/", icon: market, name: "Маркет" },
  { id: 6, url: "https://taxi.yandex.ru/", icon: taxi, name: "Такси" },
  {
    id: 7,
    url: "https://translate.yandex.ru/",
    icon: Ytranslate,
    name: "Переводчик",
  },
  { id: 8, url: "https://yandex.ru/pogoda", icon: weather, name: "Погода" },
  { id: 9, url: "https://music.yandex.ru/", icon: music, name: "Музыка" },
];
