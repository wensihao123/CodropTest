const dictionary = {
    'title': {
        'EN': 'Title',
        'CN': '标题',
    },
    'subtitle1': {
        'EN': 'A decentralized platform enabling issuance, trading, and settlement of tokenized digital derivatives',
        'CN': '一个区中心化的blablabla平台',
    },
    'subtitle': {
        'EN': 'Redefining Blockchain for a Better World',
        'CN': '用区块链重构美好世界',
    },
    /*-- Nav Bar Entries --*/
    'nav-button-home': {
        'EN': 'Home',
        'CN': '主页',
    },
    'nav-button2': {
        'EN': 'Introduction',
        'CN': '简介',
    },
    'nav-button3': {
        'EN': 'Portfolio',
        'CN': '投资',
    },
    'nav-button4': {
        'EN': 'Partner',
        'CN': '合作',
    },
    'nav-button5': {
        'EN': 'Team',
        'CN': '团队',
    },
    'nav-button-lang': {
        'EN': 'Language',
        'CN': '语言',
    },

    /*-- Intro Page --*/
    'intro-text1': {
        'EN': "LD Capital is one of Asia's earliest organizations focusing on value investing in blockchain field. Owing to industrial resource advantages and professional investment research teams, LD Capital has successively discovered and invested in projects such as Qtum, Vechain and Eos which all achieved over 100 times return.",
        'CN': "LD Capital is one of Asia's earliest organizations focusing on value investing in blockchain field. Owing to industrial resource advantages and professional investment research teams, LD Capital has successively discovered and invested in projects such as Qtum, Vechain and Eos which all achieved over 100 times return."
    },
    'intro-text2': {
        'EN': 'Our teams spread over China, the United States, Europe, Singapore, Japan, and South Korea, and have accumulated rich experience in areas of traditional internet, Fintech, and advanced blockchain technology. We are committed to the globalization of blockchain and quality investment in the entire industry.',
        'CN': 'Our teams spread over China, the United States, Europe, Singapore, Japan, and South Korea, and have accumulated rich experience in areas of traditional internet, Fintech, and advanced blockchain technology. We are committed to the globalization of blockchain and quality investment in the entire industry.'
    },
    'intro-text3': {
        'EN': 'LD Capital focuses on blockchain innovation projects within finance, games, content publishing, Internet of Things and other circuits, and we have been propelling broad layout of blockchain technology and infrastructure construction to facilitate the comprehensive development of the global blockchain ecosystem.',
        'CN': 'LD Capital focuses on blockchain innovation projects within finance, games, content publishing, Internet of Things and other circuits, and we have been propelling broad layout of blockchain technology and infrastructure construction to facilitate the comprehensive development of the global blockchain ecosystem.'
    },
    /*-- Service Page --*/
    'service-title1': {
        'EN': 'Advisory',
        'CN': 'Advisory'
    },
    'service-content1': {
        'EN': 'Blockchain, token economy and legal advisory.',
        'CN': 'Blockchain, token economy and legal advisory.'
    },
    'service-tooltip1': {
        'EN': 'Hunter Capital',
        'CN': '猎人资本'
    },
    'service-title2': {
        'EN': 'PR Marketing',
        'CN': 'PR Marketing'
    },
    'service-content2': {
        'EN': 'Global oriented, Chinese focused PR and Marketing specialists.',
        'CN': 'Global oriented, Chinese focused PR and Marketing specialists.'
    },
    'service-tooltip2': {
        'EN': 'Foking Group',
        'CN': '乾景集团'
    },
    'service-title3': {
        'EN': 'Research / Technology Support',
        'CN': 'Research / Technology Support'
    },
    'service-content3': {
        'EN': 'Blockchain, cryptography, token economy and consensus algorithm research & technical support for projects.',
        'CN': 'Blockchain, cryptography, token economy and consensus algorithm research & technical support for projects.'
    },
    'service-tooltip3': {
        'EN': 'LD Research',
        'CN': '天机阁'
    },
    'service-title4': {
        'EN': 'OTC / Asset Management',
        'CN': 'OTC / Asset Management'
    },
    'service-content4': {
        'EN': 'One of the largest crypto-asset management and financial service providers in Asia with more than 30000BTC AUM.',
        'CN': 'One of the largest crypto-asset management and financial service providers in Asia with more than 30000BTC AUM.'
    },
    'service-tooltip4': {
        'EN': 'LD Plus',
        'CN': 'LD Plus'
    },
     /*-- Team Page --*/
    'team-text': {
        'EN': '100+ industrial professionals and specialists around the world with offices in Beijing, Shanghai, Hangzhou, New York and Singapore.',
        'CN': '100+ industrial professionals and specialists around the world with offices in Beijing, Shanghai, Hangzhou, New York and Singapore.'
    },
    'team-location1': {
        'EN': 'Beijing',
        'CN': '北  京'
    },
    'team-location2': {
        'EN': 'Shanghai',
        'CN': '上  海'
    },
    'team-location3': {
        'EN': 'Hangzhou',
        'CN': '杭  州'
    },
    'team-location4': {
        'EN': 'New York',
        'CN': '纽  约'
    },
    'team-location5': {
        'EN': 'Singapore',
        'CN': '新加坡'
    }
}

const langs = ['EN', 'CN'];
var current_lang = langs[0];
window.change_lang = (index) => {
    current_lang = langs[index];
    translate();
}

function translate() {
    $("[data-translate]").each(function () {
        var key = $(this).data('translate');
        $(this).html(dictionary[key][current_lang] || "N/A");
    });
}

translate();