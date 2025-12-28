
import { DailyPlan, ItemCategory, FlightInfo, HotelInfo } from './types';

export const FLIGHTS: FlightInfo[] = [
  {
    type: 'departure',
    airline: '中華航空',
    flightNo: 'CI501',
    route: '桃園 (TPE) -> 浦東 (PVG)',
    time: '08:45 - 10:50',
    terminal: '桃園 T2 / 浦東 T1',
    notes: '起飛前 2~3 小時報到，最慢 1 小時前完成。\n30 分鐘前抵達登機門。'
  },
  {
    type: 'return',
    airline: '中華航空',
    flightNo: 'CI504',
    route: '浦東 (PVG) -> 桃園 (TPE)',
    time: '19:50 - 21:55',
    terminal: '浦東 T1 / 桃園 T2',
    notes: '起飛前 2~3 小時報到，最慢 1 小時前完成。\n30 分鐘前抵達登機門。'
  }
];

export const HOTEL: HotelInfo = {
  name: '時光漫步S酒店（上海火車站蘇州河店）',
  location: '上海市靜安區梅園路35號(上海火車站地區近長安路口)',
  checkIn: '2026/01/16',
  notes: '冰箱飲料、零食都免費\n一樓有免費洗衣、燙衣服務\n晚上有免費提供消夜\n叫外送，有機器人送餐到房門口',
  image: 'images/hotel_main.jpg'
};

export const ITINERARY: DailyPlan[] = [
  {
    date: '2026/01/16',
    dayOfWeek: '星期五',
    weather: { temp: '4°C / 10°C', condition: '晴時多雲', icon: '☀️' },
    items: [
      {
        id: 'd1-1',
        time: '05:00',
        title: '出發集合',
        category: ItemCategory.TRANSPORT,
        notes: '機場接送，9 人座賓士 Vito',
        imageUrl: 'images/airport_pickup.jpg'
      },
      {
        id: 'd1-2',
        time: '06:45',
        title: '桃園機場報到',
        category: ItemCategory.FLIGHT,
        notes: '第二航廈。\n報到完成之後需先在台灣機場操作實體 SIM卡 / eSIM 卡開通',
        imageUrl: 'images/tpe_airport.jpg'
      },
      {
        id: 'd1-3',
        time: '10:50',
        title: '抵達上海浦東機場',
        category: ItemCategory.FLIGHT,
        notes: '第一航廈。\n** 台灣人是本國人，不用填寫入境卡。\n台灣海關：護照&台胞證；中國海關：台胞證。\n走本國人通道，有快速通關就辦。',
        story: '浦東機場是全球最繁忙的機場之一。',
        imageUrl: 'images/pvg_arrival.jpg'
      },
      {
        id: 'd1-4',
        time: '13:00',
        title: '時光漫步S酒店(上海火車站蘇州河店) 放行李',
        category: ItemCategory.STAY,
        duration: '網約車約 80 分鐘',
        notes: '冰箱飲料、零食都免費\n一樓有免費洗衣、燙衣服務\n晚上有免費提供消夜\n叫外送，有機器人送餐到房門口',
        imageUrl: 'images/hotel_lobby.jpg'
      },
      {
        id: 'd1-5',
        time: '13:40',
        title: '老吉士 (興業太古匯店)',
        category: ItemCategory.FOOD,
        duration: '網約車約 15 分鐘',
        notes: '已電話訂位 14：00',
        tips: [
          '必點：紅燒肉、四喜烤麩、心太軟、鯽魚湯',
          '興業太古匯商場環境舒適，吃飽之後可以考慮要不要走路 5 分鐘去看 LV巨輪'
        ],
        imageUrl: 'images/laojishi.jpg'
      },
      {
        id: 'd1-6',
        time: '15:00',
        title: '南京步行街',
        category: ItemCategory.SIGHT,
        duration: '網約車約 15 分鐘',
        notes: '起點「人民廣場19號出口」，一路逛到外灘（純走 25 - 30 分鐘）。\n不想走可搭小火車（10 CNY），但假日人潮洶湧，小火車預計會比走路慢。\n注意路邊攝影師推銷，千萬不要靠近，坐地起價、推銷不斷。',
        tips: [
          '【特色店家】\n- MM 巧克力亞洲旗艦店\n- 新世界大丸百貨 (廁所最好找的一間)',
          '【熱門美食】\n- CHAGEE霸王茶姬(上海第一百货商业中心店)，建議手機先下單再取\n- 沈大成：老字號糕點店，必買青糰 (類似麻糬)\n- 萊萊小籠：人稱上海小籠包的天花板\n- 王記老上海蔥油餅：隱藏美食\n- 小楊生煎：最知名的生煎包',
          '【伴手禮】大白兔奶糖、蝴蝶酥'
        ],
        imageUrl: 'images/nanjing_road.jpg'
      },
      {
        id: 'd1-7',
        time: '黃昏',
        title: '豫園 & 城隍廟',
        category: ItemCategory.SIGHT,
        notes: '九曲橋、城隍廟、涵碧樓為經典\n豫園燈光秀：每晚18點半至22點，每個半點一場，每場3分鐘左右，逛完陸家嘴再回來欣賞',
        imageUrl: 'images/yuyuan.jpg'
      },
      {
        id: 'd1-8',
        time: '18:00',
        title: '外灘與陸家嘴點燈',
        category: ItemCategory.SIGHT,
        notes: '18:00 點燈。推薦「日落長廊」遠眺全景。\n搭渡輪（2 CNY）到對岸。',
        imageUrl: 'images/the_bund.jpg'
      },
      {
        id: 'd1-9',
        time: '22:00',
        title: '左庭右院鲜牛肉火锅(嘉里合集店)',
        category: ItemCategory.FOOD,
        notes: '10:00-24:00。\n建議線上取號，距離旅館走路 10 分鐘。',
        imageUrl: 'images/hotpot.jpg'
      },
      {
        id: 'd1-10',
        time: '23:30',
        title: '放鬆按摩',
        category: ItemCategory.ACTIVITY,
        notes: '從大眾點評就近找一間',
        imageUrl: 'images/massage.jpg'
      }
    ]
  },
  {
    date: '2026/01/17',
    dayOfWeek: '星期六',
    weather: { temp: '0°C / 11°C', condition: '陰天', icon: '☁️' },
    items: [
      {
        id: 'd2-1',
        time: '07:40',
        title: '上海迪士尼樂園',
        category: ItemCategory.ACTIVITY,
        notes: '需拿台胞證換票。\n迪士尼管家 1/12 聯繫。\n待確認設施與餐廳。',
        imageUrl: 'images/disney.jpg'
      }
    ]
  },
  {
    date: '2026/01/18',
    dayOfWeek: '星期日',
    weather: { temp: '-1°C / 8°C', condition: '陰天', icon: '☁️' },
    items: [
      {
        id: 'd3-1',
        time: '09:30',
        title: '宮宴 (漢服體驗)',
        category: ItemCategory.ACTIVITY,
        notes: '已預訂，宴席 12:10 開始。\n預約攝影 11:30。\n早到可選衣服。',
        imageUrl: 'images/gongyan.jpg'
      },
      {
        id: 'd3-2',
        time: '14:30',
        title: '法租界：田子坊/新天地/思南公館',
        category: ItemCategory.SIGHT,
        notes: '優先逛田子坊。\n思南公館看洋房故居。',
        imageUrl: 'images/shanghai_concession.jpg'
      },
      {
        id: 'd3-3',
        time: '19:50',
        title: '上海浦東機場 起飛',
        category: ItemCategory.FLIGHT,
        notes: '18:00 抵達 T1。\nCI504 航班。\n預祝旅途愉快！',
        imageUrl: 'images/flight_home.jpg'
      }
    ]
  }
];
