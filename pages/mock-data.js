export var main_cities_data = [
    {"id": 1, "name": "伦敦"},
    {"id": 2, "name": "伯明罕"},
    {"id": 3, "name": "格拉斯哥"},
    {"id": 4, "name": "利物浦"},
    {"id": 5, "name": "布里斯托"},
    {"id": 6, "name": "雪菲尔"},
    {"id": 7, "name": "曼彻斯特"},
    {"id": 8, "name": "里兹"},
    {"id": 9, "name": "爱丁堡"},
    {"id": 10, "name": "莱斯特"},
];

export var main_page_modules = [
    {"id": "M1", "title": "二手交易", "sf": true, "img": "/images/nothing.png"},
    {"id": "M2", "title": "房屋转让", "sf": false, "img": "/images/nothing.png"},
    {"id": "M3", "title": "票务转让", "sf": false, "img": "/images/nothing.png"},
    {"id": "M4", "title": "......", "sf": false, "img": "/images/nothing.png"},
    {"id": "M4", "title": "......", "sf": false, "img": "/images/nothing.png"},
    {"id": "M4", "title": "......", "sf": false, "img": "/images/nothing.png"},
];

export var second_hand_module_storefronts = [
    {"id": "SF_0001", "name": "ABC Co. Ltd.", "img": "/images/iphone_7_plus.jpg"},
    {"id": "SF_0002", "name": "DEF Co. Ltd.", "img": "/images/iphone_8_plus.jpg"},
    {"id": "SF_0003", "name": "GHI Co. Ltd.", "img": "/images/iphone_x.jpg"}
];


export var second_hand_product_details =
    {
        "id": 1,
        "name": "iPhone 7 Plus",
        "desc": "Why buy iPhone 8 Plus with same specs?",
        "price": 5000.0,
        "visitCount": 1231,
        "img": [
            "/images/emma.jpg"
        ]
    };

export function getProductListByModuleOrStoreId(id) {
    switch (id) {
        case "SF_0001":
            return Array.of(myM1ProductList[0]);
        case "SF_0002":
            return Array.of(myM1ProductList[1]);
        case "SF_0003":
            return Array.of(myM1ProductList[2]);
        case "M2":
            return myM2ProductList;
        case "M3":
            return myM3ProductList;
        default:
            return null;
    }
}

export function getMyProductDetailsByProductId(productId) {
    let longList = myM1ProductList.concat(myM2ProductList).concat(myM3ProductList);
    let res = {};
    longList.forEach(function (p) {
        if (p.id == productId) res = p;
    });
    return res;
};

export function getMyProductListByModuleId(moduleId) {
    switch (moduleId) {
        case "1":
            return myM1ProductList;
        case "2":
            return myM2ProductList;
        case "3":
            return myM3ProductList;
        default:
            return null;
    }
};

let myM1ProductList = [
    {
        "id": "M1_0001",
        "traded": false,
        "title": {
            "label": "商品",
            "value": "iPhone 7 Plus"
        },
        "desc": {
            "label": "描述",
            "value": "Why buy iPhone 8 Plus with same specs?"
        },
        "price": {
            "label": "金额",
            "value": "5000.0"
        },
        "attr": [
            {
                "label": "浏览量",
                "type": "NUMBER",
                "editable": false,
                "value": "1231"
            }
        ],
        "img": ["/images/iphone_7_plus.jpg", "/images/iphone_7_plus_2.jpg", "/images/iphone_7_plus_3.jpg"]
    },
    {
        "id": "M1_0002",
        "traded": false,
        "title": {
            "label": "商品",
            "value": "iPhone 8 Plus"
        },
        "desc": {
            "label": "描述",
            "value": "Why buy iPhone 8 Plus with same specs?"
        },
        "price": {
            "label": "金额",
            "value": "8000.0"
        },
        "attr": [
            {
                "label": "浏览量",
                "type": "NUMBER",
                "editable": false,
                "value": "5523"
            }
        ],
        "img": ["/images/iphone_8_plus.jpg", "/images/iphone_8_plus_2.jpg"]
    },
    {
        "id": "M1_0003",
        "traded": false,
        "title": {
            "label": "商品",
            "value": "iPhone X"
        },
        "desc": {
            "label": "描述",
            "value": "Why is iPhone X so expensive?"
        },
        "price": {
            "label": "金额",
            "value": "10000.0"
        },
        "attr": [
            {
                "label": "浏览量",
                "type": "NUMBER",
                "editable": false,
                "value": "9999"
            }
        ],
        "img": ["/images/iphone_x.jpg"]
    }
];

let myM2ProductList = [
    {
        "id": "M2_0001",
        "traded": false,
        "title": {
            "label": "名称",
            "value": "Big Studio"
        },
        "desc": {
            "label": "描述",
            "value": "For Bachelor"
        },
        "price": {
            "label": "价格",
            "value": "200000.0"
        },
        "attr": [
            {
                "label": "位置",
                "type": "STRING",
                "editable": true,
                "value": "1, Star Street, London"
            },
            {
                "label": "房型",
                "type": "STRING",
                "editable": true,
                "value": "Studio"
            },
            {
                "label": "时长",
                "type": "STRING",
                "editable": true,
                "value": "3 months"
            },
            {
                "label": "微信號",
                "type": "WECHAT_ID",
                "editable": true,
                "value": "some_person_123"
            },

        ],
        "img": ["/images/house_001_1.jpg"]
    },
    {
        "id": "M2_0002",
        "traded": false,
        "title": {
            "label": "名称",
            "value": "Big Ensuite"
        },
        "desc": {
            "label": "描述",
            "value": "For couple"
        },
        "price": {
            "label": "价格",
            "value": "300000.0"
        },
        "attr": [
            {
                "label": "位置",
                "type": "STRING",
                "editable": true,
                "value": "2, Star Street, London"
            },
            {
                "label": "房型",
                "type": "STRING",
                "editable": true,
                "value": "Ensuite"
            },
            {
                "label": "时长",
                "type": "STRING",
                "editable": true,
                "value": "6 months"
            },
            {
                "label": "微信號",
                "type": "WECHAT_ID",
                "editable": true,
                "value": "some_person_123"
            },

        ],
        "img": ["/images/house_002_1.jpg", "/images/house_002_2.jpg", "/images/house_002_3.jpg", "/images/house_002_4.jpg"]
    },
    {
        "id": "M2_0003",
        "traded": false,
        "title": {
            "label": "名称",
            "value": "Big House"
        },
        "desc": {
            "label": "描述",
            "value": "For Family"
        },
        "price": {
            "label": "价格",
            "value": "400000.0"
        },
        "attr": [
            {
                "label": "位置",
                "type": "STRING",
                "editable": true,
                "value": "3, Star Street, London"
            },
            {
                "label": "房型",
                "type": "STRING",
                "editable": true,
                "value": "House"
            },
            {
                "label": "时长",
                "type": "STRING",
                "editable": true,
                "value": "12 months"
            },
            {
                "label": "微信號",
                "type": "WECHAT_ID",
                "editable": true,
                "value": "some_person_123"
            },

        ],
        "img": ["/images/house_003_1.jpg", "/images/house_003_2.jpg"]
    },
    {
        "id": "M2_0004",
        "traded": false,
        "title": {
            "label": "名称",
            "value": "Big Big Big Apartment"
        },
        "desc": {
            "label": "描述",
            "value": "Who wants to live on Star Street?"
        },
        "price": {
            "label": "价格",
            "value": "500000.0"
        },
        "attr": [
            {
                "label": "位置",
                "type": "STRING",
                "editable": true,
                "value": "4, Star Street, London"
            },
            {
                "label": "房型",
                "type": "STRING",
                "editable": true,
                "value": "Apartment"
            },
            {
                "label": "时长",
                "type": "STRING",
                "editable": true,
                "value": "24 months"
            },
            {
                "label": "微信號",
                "type": "WECHAT_ID",
                "editable": true,
                "value": "some_person_123"
            },

        ],
        "img": ["/images/house_004_1.jpg", "/images/house_004_2.jpg"]
    },

];

let myM3ProductList = [
    {
        "id": "M3_0001",
        "traded": false,
        "title": {
            "label": "名称",
            "value": "五月天 诺亚方舟 世界巡回演唱会"
        },
        "desc": {
            "label": "描述",
            "value": "五月天演唱会"
        },
        "price": {
            "label": "转让价格",
            "value": "5000.0"
        },
        "attr": [
            {
                "label": "有效期",
                "type": "DATE",
                "editable": true,
                "value": "30-05-2018"
            },
            {
                "label": "微信號",
                "type": "WECHAT_ID",
                "editable": true,
                "value": "some_person_123"
            }
        ],
        "img": []
    },
    {
        "id": "M3_0002",
        "traded": false,
        "title": {
            "label": "名称",
            "value": "2011 JJ 林俊杰 I Am 小巨蛋 演唱会"
        },
        "desc": {
            "label": "描述",
            "value": "林俊杰演唱会"
        },
        "price": {
            "label": "转让价格",
            "value": "3000.0"
        },
        "attr": [
            {
                "label": "有效期",
                "type": "DATE",
                "editable": true,
                "value": "30-10-2018"
            },
            {
                "label": "微信號",
                "type": "WECHAT_ID",
                "editable": true,
                "value": "some_person_123"
            }
        ],
        "img": []
    }
];