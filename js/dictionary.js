const dictionary = {
    'title': {
        'EN': 'Title',
        'CN': '标题',
    },
    'subtitle': {
        'EN': 'A decentralized platform enabling issuance, trading, and settlement of tokenized digital derivatives',
        'CN': '一个区中心化的blablabla平台',
    },
    'subtitle1': {
        'EN': 'Redefining Blockchain for a Better World',
        'CN': '用区块链重构美好世界',
    },
    /*-- Nav Bar Entries --*/
    'nav-button-home': {
        'EN': 'Home',
        'CN': '主页',
    },
    'nav-button2': {
        'EN': 'Whitepaper',
        'CN': '简介',
    },
    'nav-button3': {
        'EN': 'Media',
        'CN': 'Protfolio',
    },
    'nav-button4': {
        'EN': 'FAQ',
        'CN': '服务',
    },
    'nav-button-lang': {
        'EN': 'Language',
        'CN': '语言',
    },
    'intro-text1': {
        'EN': 'Create just what you need for your Perfect Website. Choose from a wide range of Elements & simply put them on our Canvas.',
        'CN': '中文中文中文中文中文中文中文.'
    },
    'intro-text2': {
        'EN': 'Create just what you need for your Perfect Website. Choose from a wide range of Elements & simply put them on our Canvas.',
        'CN': '中文中文中文中文中文中文中文.'
    },
    'intro-text3': {
        'EN': 'Create just what you need for your Perfect Website. Choose from a wide range of Elements & simply put them on our Canvas.',
        'CN': '中文中文中文中文中文中文中文.'
    }

    /* -- Intro --*/

}

const langs = ['EN','CN'];
var current_lang = langs[0];
window.change_lang = (index) => {
    current_lang = langs[index];
    translate();
}

function translate() {
    $("[data-translate]").each(function(){
        var key = $(this).data('translate');
        $(this).html(dictionary[key][current_lang] || "N/A");
    });
}

translate();