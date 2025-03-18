import {
  DashboardOutlined,
  FileTextOutlined,
  GiftOutlined,
  MailOutlined,
  MobileOutlined,
  PictureOutlined,
  SettingOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserAddOutlined,
  UsergroupAddOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { APP_PREFIX_PATH } from "configs/AppConfig";

const dashBoardNavTree = [
  {
    key: "home",
    path: `${APP_PREFIX_PATH}/home`,
    title: "home",
    icon: DashboardOutlined,
    breadcrumb: false,
    submenu: [],
  },
];

const mainNavTree = [
  {
    key: "main",
    path: `${APP_PREFIX_PATH}/main`,
    title: "Основные",
    icon: '',
    breadcrumb: false,
    submenu: [
      {
        key: "main-dashboard",
        path: `${APP_PREFIX_PATH}/main/dashboard`,
        title: "Дашборд",
        icon: DashboardOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "main-catalog",
        path: `${APP_PREFIX_PATH}/main/catalog`,
        title: "Каталог",
        icon: ShoppingCartOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: "main-catalog-items",
            path: `${APP_PREFIX_PATH}/main/catalog/items`,
            title: "Товары",
            icon: "",
            breadcrumb: false,
            submenu: [],
          },
          {
            key: "main-catalog-categories",
            path: `${APP_PREFIX_PATH}/main/catalog/categories`,
            title: "Категории",
            icon: "",
            breadcrumb: false,
            submenu: [],
          },
          {
            key: "main-catalog-collections",
            path: `${APP_PREFIX_PATH}/main/catalog/collections`,
            title: "Коллекции",
            icon: "",
            breadcrumb: false,
            submenu: [],
          },
          {
            key: "main-catalog-combo",
            path: `${APP_PREFIX_PATH}/main/catalog/combo`,
            title: "Комбо",
            icon: "",
            breadcrumb: false,
            submenu: [],
          },
        ],
      },
      {
        key: "main-orders",
        path: `${APP_PREFIX_PATH}/main/orders`,
        title: "Заказы",
        icon: ShoppingOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "main-users",
        path: `${APP_PREFIX_PATH}/main/users`,
        title: "Клиенты",
        icon: UserOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: "main-users-list",
            path: `${APP_PREFIX_PATH}/main/users/list`,
            title: "Список клиентов",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "main-users-group",
            path: `${APP_PREFIX_PATH}/main/users/group`,
            title: "Группы клиентов",
            icon: "",
            breadcrumb: false,
            submenu: [],
          },
        ],
      },
      {
        key: "main-banners",
        path: `${APP_PREFIX_PATH}/main/banners`,
        title: "Баннеры",
        icon: PictureOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "main-promocodes",
        path: `${APP_PREFIX_PATH}/main/promocodes`,
        title: "Промокоды",
        icon: GiftOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "main-shops",
        path: `${APP_PREFIX_PATH}/main/shops`,
        title: "Оффлайн точки",
        icon: ShopOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: "main-shops-addresses",
            path: `${APP_PREFIX_PATH}/main/shops/addresses`,
            title: "Адреса",
            icon: "",
            breadcrumb: false,
            submenu: [],
          },
          {
            key: "main-shops-geozones",
            path: `${APP_PREFIX_PATH}/main/shops/geozones`,
            title: "Геозоны",
            icon: "",
            breadcrumb: false,
            submenu: [],
          },
        ],
      },
      {
        key: "main-workers",
        path: `${APP_PREFIX_PATH}/main/workers`,
        title: "Сотрудники",
        icon: UsergroupAddOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "main-mail",
        path: `${APP_PREFIX_PATH}/main/mail`,
        title: "Рассылки",
        icon: MailOutlined,
        breadcrumb: false,
        submenu: [],
      },
    ],
  },
];

const systemNavTree = [{
  key: 'system',
  path: `${APP_PREFIX_PATH}/system`,
  title: 'Системные',
  icon: '',
  breadcrumb: false,
  submenu: [
    {
      key: 'system-settings',
      path: `${APP_PREFIX_PATH}/system/settings`,
      title: 'Настройки',
      icon: SettingOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'system-mobile',
      path: `${APP_PREFIX_PATH}/system/mobile`,
      title: 'Мобильное приложение',
      icon: MobileOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'system-logs',
      path: `${APP_PREFIX_PATH}/system/logs`,
      title: 'Логи',
      icon: FileTextOutlined,
      breadcrumb: false,
      submenu: []
    }
  ]
}]

const navigationConfig = [...mainNavTree, ...systemNavTree];

export default navigationConfig;
