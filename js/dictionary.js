const dictionary = {
    'title': {
        'EN': 'Title',
        'CN': '标题',
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
        'CN': '机构简介',
    },
    'nav-button3': {
        'EN': 'Portfolio',
        'CN': '投资组合',
    },
    'nav-button4': {
        'EN': 'Partner',
        'CN': '合作伙伴',
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
        'CN': "了得资本是亚洲最早专注于布局、投资区块链领域的机构之一。得力于强劲的行业优势和专业投研团队，了得资本已经成功发现并投资了顶级区块链项目包括Qtum，Vechain和Eos等，并都取得了超过100倍的投资收益。"
    },
    'intro-text2': {
        'EN': 'Our teams spread over China, the United States, Europe, Singapore, Japan, and South Korea, and have accumulated rich experience in areas of traditional internet, Fintech, and advanced blockchain technology. We are committed to the globalization of blockchain and quality investment in the entire industry.',
        'CN': '了得资本的专业团队覆盖中国，美国，欧洲，新加坡，日本以及韩国，并在传统互联网，互联网金融以及前沿区块链技术等多个领域有很深的积累与经验，致力于区块链的全球化发展和区块链全产业的优质项目投资。'
    },
    'intro-text3': {
        'EN': 'LD Capital focuses on blockchain innovation projects within finance, games, content publishing, Internet of Things and other circuits, and we have been propelling broad layout of blockchain technology and infrastructure construction to facilitate the comprehensive development of the global blockchain ecosystem.',
        'CN': '了得资本专注的区块链创新领域包括金融，游戏，内容分发以及物联网方向，并且为此构建了庞大、健全的区块链技术和基础设施建设帮助全球区块链生态发展，进步。'
    },
    /*-- Service Page --*/
    'service-title1': {
        'EN': 'Advisory',
        'CN': '咨询'
    },
    'service-content1': {
        'EN': 'Blockchain, token economy and legal advisory.',
        'CN': '区块链，通证经济，法务合规咨询服务。'
    },
    'service-tooltip1': {
        'EN': 'Hunter Capital',
        'CN': '猎人资本'
    },
    'service-title2': {
        'EN': 'PR Marketing',
        'CN': '市场宣发'
    },
    'service-content2': {
        'EN': 'Global oriented, Chinese focused PR and Marketing specialists.',
        'CN': '全球化、专注于华人社区的品牌宣发、市场营销专业服务。'
    },
    'service-tooltip2': {
        'EN': 'Foking Group',
        'CN': '乾景集团'
    },
    'service-title3': {
        'EN': 'Research / Technology Support',
        'CN': '研究 / 技术支持'
    },
    'service-content3': {
        'EN': 'Blockchain, cryptography, token economy and consensus algorithm research & technical support for projects.',
        'CN': '区块链，密码学，通证经济及共识机制的研究 & 项目技术支持。'
    },
    'service-tooltip3': {
        'EN': 'LD Research',
        'CN': '天机阁'
    },
    'service-title4': {
        'EN': 'OTC / Asset Management',
        'CN': 'OTC / 资产管理'
    },
    'service-content4': {
        'EN': 'One of the largest crypto-asset management and financial service providers in Asia with more than 30000BTC AUM.',
        'CN': '亚洲最大的加密资产管理和加密资产金融服务商之一，AUM超过3万个比特币。'
    },
    'service-tooltip4': {
        'EN': 'LD Plus',
        'CN': 'LD Plus'
    },
     /*-- Team Page --*/
    'team-text': {
        'EN': '100+ industrial professionals and specialists around the world with offices in Beijing, Shanghai, Hangzhou, New York and Singapore.',
        'CN': '全球超过100位专业的投资/服务人员分布在北京，上海，杭州，纽约和新加坡。'
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