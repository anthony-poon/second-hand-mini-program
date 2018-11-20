// GET list of cities
export var cities = [
  { 'id': 1, 'short_str': 'LON', 'name': '伦敦' },
  { 'id': 2, 'short_str': 'LEE', 'name': '利兹' },
  { 'id': 3, 'short_str': 'SHE', 'name': '谢菲尔德' },
  { 'id': 4, 'short_str': 'SOU', 'name': '南安普顿' },
  { 'id': 5, 'short_str': 'LOU', 'name': '拉夫堡' },
  { 'id': 6, 'short_str': 'BIR', 'name': '伯明翰' },
  { 'id': 7, 'short_str': 'NOT', 'name': '诺丁汉' },
  { 'id': 8, 'short_str': 'LIV', 'name': '利物浦' },
  { 'id': 9, 'short_str': 'CAM', 'name': '剑桥' },
  { 'id': 10, 'short_str': 'OXF', 'name': '牛津' },
  { 'id': 11, 'short_str': 'MAN', 'name': '曼彻斯特' },
  { 'id': 12, 'short_str': 'NEW', 'name': '纽卡斯尔' },
  { 'id': 13, 'short_str': 'GLA', 'name': '格拉斯哥' },
  { 'id': 14, 'short_str': 'EDI', 'name': '爱丁堡' },
  { 'id': 15, 'short_str': 'COV', 'name': '考文垂' },
  { 'id': 16, 'short_str': 'LEI', 'name': '莱斯特' },
  { 'id': 17, 'short_str': 'BAT', 'name': '巴斯' },
  { 'id': 18, 'short_str': 'DUR', 'name': '杜伦' },
  { 'id': 19, 'short_str': 'CAR', 'name': '卡迪夫' },
  { 'id': 20, 'short_str': 'AND', 'name': '圣安德鲁斯' },
  { 'id': 21, 'short_str': 'WAR', 'name': '华威' },
  { 'id': 22, 'short_str': 'YOR', 'name': '约克' },
  { 'id': 23, 'short_str': 'BRI', 'name': '布里斯托' }
];

// GET list of modules by cityId, e.g. 'LON'
export var modules_of_london = [
  { "id": 1, "location": "伦敦", "name": "二手交易", "img": "/images/nothing.png"},
  { "id": 2, "location": "伦敦", "name": "房屋转让", "img": "/images/nothing.png"},
  { "id": 3, "location": "伦敦", "name": "票务转让", "img": "/images/nothing.png"}
];

export var second_hand_module_storefronts_of_london = [
  { "id": 1, "type": "SecondHandStoreFront", "location": "伦敦", "name": "ABC Co. Ltd.", "img": "/images/iphone_7_plus.jpg"},
  { "id": 2, "type": "SecondHandStoreFront", "location": "伦敦", "name": "DEF Co. Ltd.", "img": "/images/iphone_8_plus.jpg"},
  { "id": 3, "type": "SecondHandStoreFront", "location": "伦敦", "name": "GHI Co. Ltd.", "img": "/images/iphone_x.jpg"}
];



let second_hand_storefront_items_of_london = [
    {
        "id": 1,
        "type": "SecondHandItem",
        "location": "伦敦",
        "traded": false,
        "title":"iPhone 7 Plus",
        "desc": "Why buy iPhone 8 Plus with same specs?",
        "price": "5000.0",
        "attr": [
            {
                "key": "visitCount",
                "value": "1231"
            },
            {
                "key": "wechatId",
                "value": "some_person_123"
            }
        ],
        "img": ["/images/iphone_7_plus.jpg", "/images/iphone_7_plus_2.jpg", "/images/iphone_7_plus_3.jpg"]
    },
];

let house_items_of_london = [
    {
        "id": 1,
        "type": "HousingItem",
        "location": "伦敦",
        "traded": false,
        "title": "Big Studio",
        "desc": "For Bachelor",
        "price": "200000.0",
        "attr": [
            {
                "key": "location",
                "value": "1, Star Street, London"
            },
            {
                "key": "houseType",
                "value": "Studio"
            },
            {
                "key": "duration",
                "value": "3 months"
            },
            {
                "key": "wechatId",
                "value": "some_person_123"
            },
            {
                "key": "visitCount",
                "value": "9999"
            },
        ],
        "img": ["/images/house_001_1.jpg", "/images/house_001_2.jpg"]
    }
];

let ticket_items_of_london = [
    {
        "id": "LONTICP0000001",
        "type": "TicketingItem",
        "location": "伦敦",
        "traded": false,
        "title": "五月天 诺亚方舟 世界巡回演唱会",
        "desc": "五月天演唱会",
        "price": "5000.0",
        "attr": [
            {
                "key": "effectiveData",
                "value": "30-05-2018"
            },
            {
                "key": "wechatId",
                "value": "some_person_123"
            },
            {
                "key": "visitCount",
                "value": "9999"
            }
        ],
        "img": []
    }
];