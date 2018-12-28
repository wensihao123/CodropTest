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
        'CN': 'Portfolio',
    },
    'nav-button4': {
        'EN': 'Services',
        'CN': '服务',
    },
    'nav-button5': {
        'EN': 'Team',
        'CN': '团队',
    },
    'nav-button-lang': {
        'EN': 'Language',
        'CN': '语言',
    },
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
    }

    /* -- Intro --*/

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