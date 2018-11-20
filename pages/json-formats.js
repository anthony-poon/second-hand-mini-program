// GET list of cities
export var cities = [
    {'id': 'LON', 'name': '伦敦'},
    {'id': 'LEE', 'name': '利兹'},
    {'id': 'SHE', 'name': '谢菲尔德'},
    {'id': 'SOU', 'name': '南安普顿'},
    {'id': 'LOU', 'name': '拉夫堡'},
    {'id': 'BIR', 'name': '伯明翰'},
    {'id': 'NOT', 'name': '诺丁汉'},
    {'id': 'LIV', 'name': '利物浦'},
    {'id': 'CAM', 'name': '剑桥'},
    {'id': 'OXF', 'name': '牛津'},
    {'id': 'MAN', 'name': '曼彻斯特'},
    {'id': 'NEW', 'name': '纽卡斯尔'},
    {'id': 'GLA', 'name': '格拉斯哥'},
    {'id': 'EDI', 'name': '爱丁堡'},
    {'id': 'COV', 'name': '考文垂'},
    {'id': 'LEI', 'name': '莱斯特'},
    {'id': 'BAT', 'name': '巴斯'},
    {'id': 'DUR', 'name': '杜伦'},
    {'id': 'CAR', 'name': '卡迪夫'},
    {'id': 'AND', 'name': '圣安德鲁斯'},
    {'id': 'WAR', 'name': '华威'},
    {'id': 'YOR', 'name': '约克'},
    {'id': 'BRI', 'name': '布里斯托'}
];

// GET list of modules by cityId, e.g. 'LON'
export var modules_of_london = [
    {"id": "SEC", "name": "二手交易", "img": "/images/nothing.png"},
    {"id": "HOU", "name": "房屋转让", "img": "/images/nothing.png"},
    {"id": "TIC", "name": "票务转让", "img": "/images/nothing.png"}
];

export var second_hand_module_storefronts_of_london = [
    {"id": "LONSECS0000001", "name": "ABC Co. Ltd.", "img": "/images/iphone_7_plus.jpg"},
    {"id": "LONSECS0000002", "name": "DEF Co. Ltd.", "img": "/images/iphone_8_plus.jpg"},
    {"id": "LONSECS0000003", "name": "GHI Co. Ltd.", "img": "/images/iphone_x.jpg"}
];



let second_hand_storefront_items_of_london = [
    {
        "id": "LONSECP0000001",
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
        "id": "LONHOUP0000001",
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